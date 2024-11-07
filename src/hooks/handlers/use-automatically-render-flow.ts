import { useEffect } from 'react'
import { useFlowManager } from 'src/hooks/handlers/use-flow-manager'
import { getRepository } from 'src/services/database'
import { In } from 'src/services/database/typeorm-wrapper'
import { useFlowState } from 'src/states/flow'

export const useAutomaticallyRenderFlows = (flowManager: ReturnType<typeof useFlowManager>) => {
  const { loadingState, prepareFlowInfo, syncEdges, initialFlow, isReadyRef } = flowManager

  const flowStateReady = useFlowState((state) => state.ready)
  const removeSyncNodeQueue = useFlowState((state) => state.removeSyncNodeQueue)
  const removeSyncEdgeQueue = useFlowState((state) => state.removeSyncEdgeQueue)

  useEffect(() => {
    if (isReadyRef.current || loadingState.loading || !flowStateReady) {
      return
    }
    initialFlow(async () => {
      await prepareFlowInfo({
        where: {
          source_type: In(['LLM', 'Prompt']),
        },
      })
    })
  }, [initialFlow, prepareFlowInfo, loadingState.loading, isReadyRef, flowStateReady])

  useEffect(() => {
    const unsubNodeHandler = useFlowState.subscribe(
      (state) => state.syncNodeQueue,
      async (syncNodeQueue, previousSyncNodeQueue) => {
        const lastTimestamps = previousSyncNodeQueue.map((node) => node.timestamp)
        const handlingQueueItems = syncNodeQueue.filter(
          (item) => !lastTimestamps.includes(item.timestamp),
        )
        if (handlingQueueItems.length) {
          removeSyncNodeQueue(handlingQueueItems.map((item) => item.timestamp))
          for (const item of handlingQueueItems) {
            const response = await prepareFlowInfo(item.query)
            switch (item.syncType) {
              case 'Thread':
                {
                  const threadIds = response?.flowNodes
                    ?.map((node) => {
                      if (node.source_id && node.source_type === 'Thread') {
                        return node.source_id
                      }
                    })
                    .filter(Boolean)
                  if (threadIds?.length) {
                    const messages = await getRepository('Message').find({
                      where: { thread_id: In(threadIds) },
                    })
                    await prepareFlowInfo({
                      where: {
                        source_type: 'Message',
                        source_id: In(messages.map((message) => message.id)),
                      },
                    })
                  }
                }
                break
            }
          }
        }
      },
    )
    const unsubEdgeHandler = useFlowState.subscribe(
      (state) => state.syncEdgeQueue,
      async (syncEdgeQueue, previousSyncEdgeQueue) => {
        const lastTimestamps = previousSyncEdgeQueue.map((node) => node.timestamp)
        const handlingQueueItems = syncEdgeQueue.filter(
          (item) => !lastTimestamps.includes(item.timestamp),
        )
        if (handlingQueueItems.length) {
          removeSyncEdgeQueue(handlingQueueItems.map((item) => item.timestamp))
          syncEdges()
        }
      },
    )

    return () => {
      unsubNodeHandler()
      unsubEdgeHandler()
    }
  }, [prepareFlowInfo, removeSyncEdgeQueue, removeSyncNodeQueue, syncEdges])
}
