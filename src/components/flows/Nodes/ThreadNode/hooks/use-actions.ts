import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import omitBy from 'lodash/omitBy'
import isUndefined from 'lodash/isUndefined'
import { useInternalNode, useReactFlow } from '@xyflow/react'
import { useCreateMessage } from 'src/hooks/mutations/use-create-message'
import { toast } from 'src/lib/hooks/use-toast'
import { useFlowState } from 'src/states/flow'
import { MessageNodeData } from 'src/components/flows/Nodes/MessageNode/type'

import { ThreadNodeData } from '../type'

export const useActions = (id: string, data: ThreadNodeData) => {
  const node = useInternalNode(id)
  const { t } = useTranslation('flows')
  const { getNode, getHandleConnections } = useReactFlow()
  const updateNodes = useFlowState((state) => state.updateNodes)
  const { createMessage: createMessageFunction, loading } = useCreateMessage({
    getNode,
    getHandleConnections,
  })

  const onMessageUpdate = useCallback(
    (info: { id?: string; nodeData: Partial<MessageNodeData> }) => {
      if (!info.id) {
        return
      }
      const item = getNode(info.id)
      if (!item || !info.nodeData) {
        return
      }
      updateNodes([
        {
          id: item.id,
          type: 'replace',
          item: {
            ...item,
            data: {
              ...item.data,
              ...omitBy(info.nodeData, isUndefined),
            },
          },
        },
      ])
    },
    [getNode, updateNodes],
  )
  const createMessage = useCallback(
    async (input: string) => {
      if (node && data.entity) {
        try {
          await createMessageFunction(node, input, {
            onMessageUpdate,
          })
        } catch (error) {
          if (error instanceof Error && error.message.includes('LLM_NOT_LOADED_YET')) {
            return toast({
              variant: 'destructive',
              title: t('thread_node.errors.llm_not_loaded_yet'),
            })
          }
          toast({
            variant: 'destructive',
            title: `${error}`,
          })
        }
      }
    },
    [node, data.entity, createMessageFunction, onMessageUpdate, t],
  )

  return { loading, createMessage }
}
