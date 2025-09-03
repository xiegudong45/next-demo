export interface Post {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    content: string;
    coverImage: string;
}

export const posts: Post[] = [
    {
        slug: "getting-started",
        title: "开始使用Next.js",
        date: "2024-01-20",
        excerpt: "Next.js是一个用于构建现代Web应用程序的强大框架。本文将介绍如何开始使用Next.js构建你的第一个应用。",
        coverImage: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1200&q=80",
        content: `
        # 开始使用 Next.js
        Next.js是一个用于构建现代Web应用程序的强大框架。让我们一起探索如何开始使用它！
        `
    }
]