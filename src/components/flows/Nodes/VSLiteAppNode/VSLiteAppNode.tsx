import { lazy, memo, Suspense, useCallback, useState } from 'react'
import { Position } from '@xyflow/react'
import { NodeHeader } from 'src/components/flows/NodeHeader'
import { DefaultHandle } from 'src/components/flows/DefaultHandle'
import LazyIcon from 'src/components/atoms/LazyIcon'
import { parseJSONLToFileSystemTree } from 'src/services/web-container/utils/file-tree'
import CreateSourcebaseCard from 'src/components/molecules/CreateSourcebaseCard'
import type { FileSystemTree } from '@webcontainer/api'

import { EditorAppNodeProps } from './type'
import { useActions } from './hooks/use-actions'

const VSLiteApp = lazy(() => import('src/lib/vslite/VSLite'))

export const VSLiteAppNode = memo((props: EditorAppNodeProps) => {
  const { id, isConnectable, data } = props
  const [fileSystemTree, setFileSystemTree] = useState(
    data?.flowNode?.raw ? parseJSONLToFileSystemTree(data.flowNode.raw) : undefined,
  )
  const { updateCodeContainerData } = useActions(id)

  const handleUpdateCodeContainerData = useCallback(
    async (tree: FileSystemTree) => {
      if (!data?.flowNode?.id) return

      await updateCodeContainerData(data?.flowNode?.id, tree)
      setFileSystemTree(tree)
    },
    [data?.flowNode?.id, updateCodeContainerData],
  )

  if (!fileSystemTree) {
    return (
      <div className="h-full flex justify-center items-center">
        <CreateSourcebaseCard className="w-64" onUpdateSourceBase={handleUpdateCodeContainerData} />
      </div>
    )
  }

  return (
    <div className="w-[1380px] h-[500px]">
      <DefaultHandle type="target" position={Position.Top} isConnectable={isConnectable} />
      <div className="w-full h-full rounded-lg border bg-card overflow-hidden">
        <NodeHeader id={id} />
        <Suspense
          fallback={
            <div className="h-full w-full flex justify-center items-center">
              <LazyIcon name="loader-circle" className="animate-spin" />
            </div>
          }
        >
          <VSLiteApp fileSystemTree={fileSystemTree} />
        </Suspense>
      </div>
      <DefaultHandle type="source" position={Position.Bottom} isConnectable={isConnectable} />
    </div>
  )
})
