import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPostData, getAllPostIds } from '@/lib/posts'
import MarkdownRenderer from '@/components/blog/MarkdownRenderer'

interface PostPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  const paths = getAllPostIds()
  return paths.map((path) => ({
    id: path.params.id,
  }))
}

export async function generateMetadata({ params }: PostPageProps) {
  const { id } = await params
  const post = await getPostData(id)
  
  if (!post) {
    return {
      title: '文章未找到',
      description: '请检查链接是否正确'
    }
  }

  return {
    title: `${post.title} - 我的博客`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      locale: 'zh_CN',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    }
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params
  const post = await getPostData(id)
  
  if (!post) {
    notFound()
  }
    
  return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Navigation */}
        <nav className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
          >
            ← 返回首页
          </Link>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mb-4">
            <span>作者：{post.author}</span>
            <span>•</span>
            <time dateTime={post.date}>{post.date}</time>
          </div>

          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Article Content */}
        <main id="main-content">
          <MarkdownRenderer content={post.content} />
        </main>

        {/* Navigation Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link 
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
          >
            ← 返回文章列表
          </Link>
        </footer>
      </div>
    )
}