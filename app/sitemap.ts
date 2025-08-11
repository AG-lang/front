import { MetadataRoute } from 'next'
import { getSortedPostsData } from '@/lib/posts'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yourdomain.com' // 替换为实际域名
  const posts = getSortedPostsData()

  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/posts/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...postUrls,
  ]
}