import { ChatWebLLM } from '@langchain/community/chat_models/webllm'
import { BaseMessageChunk } from '@langchain/core/messages'
import { InitProgressReport } from '@mlc-ai/web-llm'
import { nanoid } from 'nanoid'
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
} from 'react'
import { WOKER_INIT_MESSAGE_ID } from 'src/utils/worker-base'
import { parseLLMInputToBridgeJSON } from './utils/serialize'
import { useLLMState } from 'src/states/llm'

export const LocalLLMContext = createContext<{
  selectedModel?: string
  initializing?: { worker: boolean; init: boolean; loading: boolean }
  invoke?: (...args: Parameters<ChatWebLLM['invoke']>) => ReturnType<ChatWebLLM['invoke']>
  stream?: (
    ...args: Parameters<ChatWebLLM['stream']>
  ) => AsyncGenerator<unknown, BaseMessageChunk, unknown>
  setInitProgressCallback?: (callback: (initProgress: InitProgressReport) => void) => () => void
  loadModel?: (modelId: string) => Promise<void>
}>({})
export const LocalLLMProvider = ({ children }: PropsWithChildren) => {
  const init = useLLMState((state) => state.init)
  const initializing = useLLMState((state) => state.initializing)
  const selectedModel = useLLMState((state) => state.selectedModel)
  const setInitializing = useLLMState((state) => state.setInitializing)
  const setSelectedModel = useLLMState((state) => state.setSelectedModel)
  const initProgressCallbacksRef = useRef<((initProgress: InitProgressReport) => void)[]>([])
  const currentLoadModelMessageIdRef = useRef<string>()
  const refProcesses = useRef<
    Map<
      string,
      [
        (value: BaseMessageChunk | PromiseLike<BaseMessageChunk>) => void,
        (reason?: unknown) => void,
        { type: string; data: unknown[]; lastIndex: number },
      ]
    >
  >(new Map())
  const worker = useRef<Worker>()

  const initProgressCallback = useCallback((initProgress: InitProgressReport) => {
    initProgressCallbacksRef.current.forEach((callback) => callback(initProgress))
  }, [])

  const setInitProgressCallback = useCallback(
    (callback: (initProgress: InitProgressReport) => void) => {
      initProgressCallbacksRef.current.push(callback)
      return () => {
        initProgressCallbacksRef.current = initProgressCallbacksRef.current.filter(
          (cb) => cb !== callback,
        )
      }
    },
    [],
  )

  const handleMessages = useCallback(
    (event: MessageEvent<{ messageId: string; type: string; payload: unknown }>) => {
      const messageId = event.data.messageId
      if (!messageId) {
        return
      }
      const [resolve, reject, processInfo] = refProcesses.current.get(messageId) || []
      if (messageId === WOKER_INIT_MESSAGE_ID) {
        setInitializing({ init: false })
      } else if (['complete', 'error'].includes(event.data.type)) {
        if (event.data.type === 'complete') {
          resolve?.(event.data.payload as BaseMessageChunk | PromiseLike<BaseMessageChunk>)
        } else {
          reject?.(new Error(JSON.stringify(event.data.payload)))
        }
        refProcesses.current.delete(messageId)
      } else if (event.data.type === 'inprogress') {
        if (processInfo?.data) {
          processInfo.data.push(event.data.payload)
        }
      } else if (event.data.type === 'started') {
        // do nothing
      } else {
        console.warn('Unknown message type', event.data)
      }
    },
    [setInitializing],
  )

  const load = useCallback(async function* (
    messageId = Math.random().toString(36).slice(2),
    ...args: ConstructorParameters<typeof ChatWebLLM>
  ) {
    if (!worker.current) {
      throw new Error('Worker not initialized')
    }

    worker.current.postMessage({
      messageId,
      type: 'load',
      payload: args,
    })
    const promise = new Promise((resolve, reject) => {
      refProcesses.current.set(messageId, [
        resolve,
        reject,
        { type: 'load', data: [], lastIndex: 0 },
      ])
    })

    while (true) {
      const process = refProcesses.current.get(messageId)
      if (process) {
        const [, , processInfo] = process
        const newData = processInfo.data[processInfo.data.length - 1]
        if (newData) {
          yield newData
          processInfo.lastIndex = processInfo.data.length - 1
        }
        await new Promise((resolve) => setTimeout(resolve, 500)) // Polling interval
      } else {
        yield promise.then(() => {})
        break
      }
    }

    return promise
  }, [])

  const invoke = useCallback((...args: Parameters<ChatWebLLM['invoke']>) => {
    if (!worker.current) {
      throw new Error('Worker not initialized')
    }
    const messageId = Math.random().toString(36).slice(2)
    worker.current.postMessage({
      messageId,
      type: 'invoke',
      payload: args,
    })
    return new Promise<Awaited<ReturnType<ChatWebLLM['invoke']>>>((resolve, reject) => {
      refProcesses.current.set(messageId, [
        resolve,
        reject,
        { type: 'invoke', data: [], lastIndex: 0 },
      ])
    })
  }, [])

  const stream = useCallback(async function* (...args: Parameters<ChatWebLLM['invoke']>) {
    if (!worker.current) {
      throw new Error('Worker not initialized')
    }
    const messageId = nanoid()
    const [input, ...rest] = args
    worker.current.postMessage({
      messageId,
      type: 'stream',
      payload: [parseLLMInputToBridgeJSON(input), ...rest],
    })
    const promise = new Promise<Awaited<ReturnType<ChatWebLLM['invoke']>>>((resolve, reject) => {
      refProcesses.current.set(messageId, [
        resolve,
        reject,
        { type: 'invoke', data: [], lastIndex: 0 },
      ])
    })

    while (true) {
      const process = refProcesses.current.get(messageId)
      if (process) {
        const [, , processInfo] = process
        const newData = processInfo.data.slice(processInfo.lastIndex)
        if (newData) {
          yield newData
          processInfo.lastIndex = processInfo.data.length > 0 ? processInfo.data.length : 0
        }
        await new Promise((resolve) => setTimeout(resolve, 200)) // Polling interval
      } else {
        yield promise.then((data) => data)
        break
      }
    }

    return promise
  }, [])

  const loadModel = useCallback(
    async (modelName: string) => {
      if (currentLoadModelMessageIdRef.current) {
        const process = refProcesses.current.get(currentLoadModelMessageIdRef.current)
        if (process) {
          const [, reject] = process
          reject?.('stop')
          refProcesses.current.delete(currentLoadModelMessageIdRef.current)
        }
      }
      currentLoadModelMessageIdRef.current = nanoid()
      setSelectedModel(modelName)
      setInitializing({ loading: true })
      const generator = load(currentLoadModelMessageIdRef.current, {
        model: modelName,
      })
      for await (const data of generator) {
        if (data) {
          initProgressCallback(data as InitProgressReport)
        }
      }
      setTimeout(() => {
        initProgressCallback({
          progress: 100,
          timeElapsed: 1,
          text: `Model ${modelName} loaded.`,
        })
        setInitializing({ loading: false })
      }, 100)
    },
    [initProgressCallback, load, setInitializing, setSelectedModel],
  )

  useLayoutEffect(() => {
    worker.current = new Worker(new URL('./langchain-worker.ts', import.meta.url), {
      type: 'module',
    })
    init()
    worker.current.addEventListener('message', handleMessages)

    setInitializing({ worker: false })

    return () => {
      worker.current?.removeEventListener('message', handleMessages)
      worker.current?.terminate()
    }
  }, [handleMessages, init, load, setInitializing])

  const context = useMemo(
    () => ({
      stream,
      invoke,
      initializing,
      setInitProgressCallback,
      loadModel,
      selectedModel,
    }),
    [stream, invoke, initializing, setInitProgressCallback, loadModel, selectedModel],
  )

  return <LocalLLMContext.Provider value={context}>{children}</LocalLLMContext.Provider>
}
