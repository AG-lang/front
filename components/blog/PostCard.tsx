import Link from 'next/link'
import type { Post } from '@/lib/posts'

interface PostCardProps {
  post: Omit<Post, 'content'>
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          <Link 
            href={`/posts/${post.id}`}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {post.title}
          </Link>
        </h2>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
          {post.excerpt}
        </p>
        
        <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <span>作者：{post.author}</span>
          <time dateTime={post.date}>{post.date}</time>
        </div>
        
        {post.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span 
                key={tag}
                className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}