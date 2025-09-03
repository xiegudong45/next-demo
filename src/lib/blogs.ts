export interface BlogSummary {
  id: number;
  slug: string;
  title: string;
  description: string;
  date: string;
  image?: string;
}

export async function getBlogs(): Promise<BlogSummary[]> {
  // simulate network latency
  await new Promise((r) => setTimeout(r, 150));

  return [
    {
      id: 1,
      slug: "how-to-build-modern-web-apps-with-nextjs",
      title: "如何用 Next.js 构建现代 Web 应用",
      description: "本文介绍了使用 Next.js 构建高性能现代 Web 应用的最佳实践和技巧。",
      date: "2024-06-01",
      image: "/blog1.jpg",
    },
    {
      id: 2,
      slug: "frontend-state-management-comparison",
      title: "前端开发中的状态管理方案对比",
      description: "对比了 Redux、MobX、Zustand 等主流前端状态管理方案的优缺点。",
      date: "2024-05-20",
      image: "/blog2.jpg",
    },
  ];
}
