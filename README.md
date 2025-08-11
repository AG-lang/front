# 我的博客

一个使用 Next.js 15、TypeScript 和 Tailwind CSS 构建的现代化博客网站。

## 特性

- 📝 **Markdown 支持** - 使用 Markdown 格式编写文章
- 🎨 **响应式设计** - 适配各种设备屏幕
- ⚡ **静态生成** - 构建时预生成所有页面，实现最佳性能
- 🔍 **SEO 优化** - 完整的元数据和结构化数据支持
- 🌙 **深色模式** - 支持深色主题切换
- 📱 **移动端优化** - 完美的移动设备体验
- 🏷️ **标签系统** - 文章分类和标签功能
- 🔗 **友好的 URL** - 基于文件名的路由系统

## 技术栈

- **Next.js 15** - React 全栈框架，使用 App Router
- **TypeScript** - 类型安全的 JavaScript 开发
- **Tailwind CSS** - 实用优先的 CSS 框架
- **Gray Matter** - Markdown 前置数据解析
- **Remark** - Markdown 处理器
- **Vercel** - 部署平台

## 快速开始

### 环境要求

- Node.js 18+ 
- pnpm

### 安装依赖

\`\`\`bash
pnpm install
\`\`\`

### 开发模式

\`\`\`bash
pnpm dev
\`\`\`

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

\`\`\`bash
pnpm build
\`\`\`

### 启动生产服务器

\`\`\`bash
pnpm start
\`\`\`

## 项目结构

\`\`\`
blog-website/
├── app/                    # Next.js App Router 页面
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   └── posts/             # 文章页面
│       └── [id]/          # 动态路由
│           ├── page.tsx   # 文章详情页
│           └── not-found.tsx # 404 页面
├── lib/                   # 工具函数
│   └── posts.ts          # 文章数据处理
├── posts/                 # Markdown 文章目录
│   ├── hello-world.md
│   ├── nextjs-features.md
│   └── web-development-trends.md
├── public/               # 静态资源
└── vercel.json          # Vercel 部署配置
\`\`\`

## 编写文章

1. 在 \`posts/\` 目录下创建 \`.md\` 文件
2. 文件开头添加前置数据：

\`\`\`markdown
---
title: '文章标题'
date: '2025-08-11'
excerpt: '文章摘要'
author: '作者名'
tags: ['标签1', '标签2']
---

# 文章内容

这里是 Markdown 格式的文章内容...
\`\`\`

3. 保存文件，重新构建即可看到新文章

## 部署到 Vercel

1. 将代码推送到 GitHub 仓库
2. 在 [Vercel](https://vercel.com) 上导入项目
3. Vercel 会自动检测 Next.js 项目并进行部署
4. 每次推送代码到主分支都会自动重新部署

### 手动部署

如果已安装 Vercel CLI：

\`\`\`bash
npx vercel --prod
\`\`\`

## 自定义配置

### 修改网站信息

编辑 \`app/layout.tsx\` 文件中的 \`metadata\` 对象：

\`\`\`typescript
export const metadata: Metadata = {
  title: {
    default: "你的博客名称",
    template: "%s | 你的博客名称"
  },
  description: "你的博客描述",
  // ... 其他配置
}
\`\`\`

### 修改样式

- 编辑 \`app/globals.css\` 修改全局样式
- 使用 Tailwind CSS 类名进行样式定制
- 支持深色模式的响应式设计

### 添加新功能

- 在 \`lib/\` 目录下添加工具函数
- 在 \`app/\` 目录下添加新页面
- 修改 \`posts.ts\` 添加新的数据处理逻辑

## 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 贡献

欢迎提交 Issue 和 Pull Request！

---

使用 ❤️ 和 Next.js 构建