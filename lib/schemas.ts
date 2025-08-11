import { z } from 'zod'

export const postFrontmatterSchema = z.object({
  title: z.string().min(1, '文章标题不能为空'),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, '日期格式应为 YYYY-MM-DD'),
  excerpt: z.string().min(1, '文章摘要不能为空'),
  author: z.string().default('匿名'),
  tags: z.array(z.string()).default([]),
  published: z.boolean().default(true),
})

export const postSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  date: z.string(),
  excerpt: z.string().min(1),
  author: z.string(),
  tags: z.array(z.string()),
  content: z.string(),
  published: z.boolean().default(true),
})

export type PostFrontmatter = z.infer<typeof postFrontmatterSchema>
export type PostData = z.infer<typeof postSchema>