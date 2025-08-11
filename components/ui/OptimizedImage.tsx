import Image from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export default function OptimizedImage({
  src,
  alt,
  width = 800,
  height = 400,
  className = '',
  priority = false
}: OptimizedImageProps) {
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className="flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-lg min-h-[200px]">
        <span className="text-gray-500 dark:text-gray-400">图片加载失败</span>
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={`
          duration-700 ease-in-out group-hover:opacity-75
          ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}
        `}
        onLoad={() => setLoading(false)}
        onError={() => setError(true)}
        style={{
          objectFit: 'cover',
        }}
      />
    </div>
  )
}