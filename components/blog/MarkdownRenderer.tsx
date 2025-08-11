'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeHighlight from 'rehype-highlight'
import OptimizedImage from '@/components/ui/OptimizedImage'
import 'highlight.js/styles/github-dark.css'

interface MarkdownRendererProps {
  content: string
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeHighlight]}
        components={{
          img: ({ src, alt }) => {
            if (!src || typeof src !== 'string') return null
            
            return (
              <OptimizedImage
                src={src}
                alt={alt || ''}
                className="my-4"
              />
            )
          },
          a: ({ href, children, ...props }) => (
            <a
              href={href}
              target={href?.startsWith('http') ? '_blank' : '_self'}
              rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              {...props}
            >
              {children}
            </a>
          ),
          code: ({ children, className, ...props }) => {
            const match = /language-(\w+)/.exec(className || '')
            return match ? (
              <code className={className} {...props}>
                {children}
              </code>
            ) : (
              <code
                className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm"
                {...props}
              >
                {children}
              </code>
            )
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}