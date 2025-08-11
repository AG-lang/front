import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "我的博客",
    template: "%s | 我的博客"
  },
  description: "分享前端开发、技术思考和生活感悟的个人博客，使用 Next.js 和 TypeScript 构建",
  keywords: ["博客", "前端开发", "Next.js", "TypeScript", "React", "技术分享"],
  authors: [{ name: "博主" }],
  creator: "博主",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    title: "我的博客",
    description: "分享前端开发、技术思考和生活感悟",
    siteName: "我的博客"
  },
  twitter: {
    card: "summary_large_image",
    title: "我的博客",
    description: "分享前端开发、技术思考和生活感悟"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
