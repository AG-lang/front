import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { postFrontmatterSchema } from './schemas'

const postsDirectory = path.join(process.cwd(), 'posts')

export interface Post {
  id: string
  title: string
  date: string
  excerpt: string
  content: string
  author: string
  tags: string[]
  published: boolean
}

export function getSortedPostsData(): Omit<Post, 'content'>[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map((fileName) => {
        const id = fileName.replace(/\.md$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        const matterResult = matter(fileContents)
        
        // 使用 zod 验证 frontmatter 数据
        const validatedData = postFrontmatterSchema.parse(matterResult.data)

        return {
          id,
          ...validatedData,
        } as Omit<Post, 'content'>
      })
      .filter(post => post.published) // 只返回已发布的文章

    return allPostsData.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
  } catch (error) {
    console.error('读取文章数据时发生错误:', error)
    return []
  }
}

export function getAllPostIds(): Array<{ params: { id: string } }> {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map((fileName) => {
      return {
        params: {
          id: fileName.replace(/\.md$/, ''),
        },
      }
    })
}

export async function getPostData(id: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    if (!fs.existsSync(fullPath)) {
      return null
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    
    // 使用 zod 验证 frontmatter 数据
    const validatedData = postFrontmatterSchema.parse(matterResult.data)
    
    // 如果文章未发布，返回 null
    if (!validatedData.published) {
      return null
    }

    // 直接返回原始 Markdown 内容，由客户端组件处理渲染
    return {
      id,
      ...validatedData,
      content: matterResult.content,
    }
  } catch (error) {
    console.error(`读取文章 ${id} 时发生错误:`, error)
    return null
  }
}