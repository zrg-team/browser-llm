import { lazy, memo, Suspense, useMemo } from 'react'
import DotPattern from 'src/lib/shadcn/ui/dot-pattern'
import { DefaultLoader } from 'src/components/atoms/DefaultLoader'

import { components } from './Components/components'

const LLMPage = lazy(() => import('src/docs/models/llm.mdx'))
const NodesPage = lazy(() => import('src/docs/playground/nodes.mdx'))
const ConnectionsPage = lazy(() => import('src/docs/playground/connections.mdx'))
const EmbeddingPage = lazy(() => import('src/docs/models/embedding.mdx'))
const GetStartedPage = lazy(() => import('src/docs/tutorials/get-started.mdx'))
const StructuredOutputPage = lazy(() => import('src/docs/tutorials/ai-structured-output.mdx'))

const DocumentViewer = memo(
  (props: { name: string }) => {
    console.log('props.name', props.name)
    const inner = useMemo(() => {
      switch (props.name) {
        case 'nodes':
          return <NodesPage components={components} />
        case 'connections':
          return <ConnectionsPage components={components} />
        case 'embedding':
          return <EmbeddingPage components={components} />
        case 'llm':
          return <LLMPage components={components} />
        case 'get-started':
          return <GetStartedPage components={components} />
        case 'ai-structured-output':
          return <StructuredOutputPage components={components} />
        default:
          return <LLMPage components={components} />
      }
    }, [props.name])
    return (
      <div className="max-w-full max-h-full overflow-hidden relative flex flex-col min-h-full">
        <Suspense
          fallback={<DefaultLoader flickeringGrid className="w-full h-full min-h-screen" />}
        >
          <div className="flex-grow h-full overflow-auto flex justify-center min-h-full">
            <DotPattern width={32} height={32} className="h-full" cr={0.6} />
            <div className="p-6 !pb-12 relative max-w-5xl">{inner}</div>
          </div>
        </Suspense>
      </div>
    )
  },
  (pre, next) => pre.name === next.name,
)

export default DocumentViewer
