import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        404 - 文章未找到
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        抱歉，您要查找的文章不存在。
      </p>
      <Link 
        href="/"
        className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
      >
        返回首页
      </Link>
    </div>
  )
}