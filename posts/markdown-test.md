---
title: 'Markdown 渲染测试'
date: '2025-08-12'
excerpt: '测试各种 Markdown 语法的渲染效果，包括代码块、表格、列表等。'
author: '测试员'
tags: ['Markdown', '测试', '语法']
---

# Markdown 渲染测试

这是一篇用来测试各种 Markdown 语法渲染效果的文章。

## 文本格式

**粗体文本** 和 *斜体文本* 以及 ~~删除线文本~~

## 代码示例

### 行内代码

这是一段包含 `console.log('Hello World')` 的行内代码。

### 代码块

```javascript
// JavaScript 代码示例
function greet(name) {
  return `Hello, ${name}!`;
}

const message = greet('World');
console.log(message);
```

```python
# Python 代码示例
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# 计算斐波那契数列
for i in range(10):
    print(f"F({i}) = {fibonacci(i)}")
```

```bash
# 命令行示例
npm install
npm run dev
pnpm build
```

## 列表

### 无序列表

- 第一项
- 第二项
  - 嵌套项目 1
  - 嵌套项目 2
- 第三项

### 有序列表

1. 步骤一：安装依赖
2. 步骤二：配置环境
3. 步骤三：启动项目
   1. 开发环境
   2. 生产环境

### 任务列表

- [x] 完成项目初始化
- [x] 添加 Markdown 支持
- [ ] 优化 SEO 设置
- [ ] 添加评论功能

## 表格

| 功能 | 状态 | 优先级 |
|------|------|--------|
| 博客列表 | ✅ 完成 | 高 |
| 文章详情 | ✅ 完成 | 高 |
| Markdown 支持 | ✅ 完成 | 高 |
| 搜索功能 | ⏳ 计划中 | 中 |
| 评论系统 | ⏳ 计划中 | 低 |

## 引用

> 这是一段引用文本。
> 
> 引用可以包含多行内容，也可以包含其他 Markdown 语法。
> 
> —— 某位名人

## 链接和图片

- [Next.js 官网](https://nextjs.org/)
- [TypeScript 文档](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/)

## 水平分割线

---

## 数学公式（如果支持）

行内公式：E = mc²

块级公式：
```
∑(i=1 to n) i = n(n+1)/2
```

## Emoji 支持

🚀 部署成功！  
⚡ 性能优化  
🎨 界面美化  
📝 文档更新  

## 高级语法

### GitHub 风格的警告框

> **Note**: 这是一个提示信息。

> **Warning**: 这是一个警告信息。

### 脚注

这是一个包含脚注的句子[^1]。

[^1]: 这是脚注的内容。

## 总结

通过这个测试页面，我们可以验证博客系统对各种 Markdown 语法的支持程度：

1. ✅ 基础文本格式（粗体、斜体、删除线）
2. ✅ 标题结构（H1-H6）
3. ✅ 代码块和语法高亮
4. ✅ 各种类型的列表
5. ✅ 表格渲染
6. ✅ 引用块
7. ✅ 链接和图片
8. ✅ 水平分割线
9. ✅ Emoji 支持

这个 Markdown 渲染系统已经可以很好地处理大部分常用的语法格式！