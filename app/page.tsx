import { getSortedPostsData } from '@/lib/posts'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import PostGrid from '@/components/blog/PostGrid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '我的博客 - 前端开发与技术分享',
  description: '分享前端开发、技术思考和生活感悟',
  keywords: ['前端开发', 'Next.js', 'React', '技术博客', 'JavaScript', 'TypeScript'],
  authors: [{ name: '博客作者' }],
  openGraph: {
    title: '我的博客 - 前端开发与技术分享',
    description: '分享前端开发、技术思考和生活感悟',
    type: 'website',
    locale: 'zh_CN',
  },
  twitter: {
    card: 'summary_large_image',
    title: '我的博客 - 前端开发与技术分享',
    description: '分享前端开发、技术思考和生活感悟',
  }
}

export default function Home() {
  const posts = getSortedPostsData()

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Header 
        title="欢迎来到我的博客" 
        description="分享前端开发、技术思考和生活感悟"
      />
      
      <main id="main-content">
        <PostGrid posts={posts} />
      </main>

      <Footer />
    </div>
  )
}
