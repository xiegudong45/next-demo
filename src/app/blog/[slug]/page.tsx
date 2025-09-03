import { notFound } from "next/navigation";
import Link from "next/link";

// Mock 文章数据
const articles = [
  {
    slug: "how-to-build-modern-web-apps-with-nextjs",
    title: "如何用 Next.js 构建现代 Web 应用",
    description: "本文介绍了使用 Next.js 构建高性能现代 Web 应用的最佳实践和技巧。",
    date: "2024-06-01",
    author: "张三",
    content: `
      <h2>引言</h2>
      <p>Next.js 是一个基于 React 的全栈框架，它提供了许多开箱即用的功能，让开发者能够快速构建现代化的 Web 应用。</p>
      
      <h2>核心特性</h2>
      <ul>
        <li><strong>服务端渲染 (SSR)</strong>：提升首屏加载速度和 SEO 表现</li>
        <li><strong>静态站点生成 (SSG)</strong>：预渲染页面，提升性能</li>
        <li><strong>API 路由</strong>：内置后端 API 支持</li>
        <li><strong>文件系统路由</strong>：基于文件结构的直观路由</li>
        <li><strong>TypeScript 支持</strong>：完整的类型安全</li>
      </ul>
      
      <h2>项目结构</h2>
      <p>一个典型的 Next.js 项目结构如下：</p>
      <pre><code>my-app/
├── pages/
│   ├── index.js
│   ├── about.js
│   └── api/
├── public/
├── styles/
└── package.json</code></pre>
      
      <h2>最佳实践</h2>
      <ol>
        <li>使用 Image 组件优化图片加载</li>
        <li>合理使用 getStaticProps 和 getServerSideProps</li>
        <li>实现适当的错误边界和加载状态</li>
        <li>优化字体和 CSS 加载</li>
        <li>使用环境变量管理配置</li>
      </ol>
      
      <h2>性能优化</h2>
      <p>Next.js 提供了多种性能优化方案：</p>
      <ul>
        <li>自动代码分割</li>
        <li>预加载关键资源</li>
        <li>智能缓存策略</li>
        <li>Bundle 分析工具</li>
      </ul>
      
      <h2>部署</h2>
      <p>Next.js 应用可以部署到多种平台：</p>
      <ul>
        <li>Vercel（推荐）</li>
        <li>Netlify</li>
        <li>自托管服务器</li>
        <li>Docker 容器</li>
      </ul>
      
      <h2>总结</h2>
      <p>Next.js 是一个功能强大且易于使用的框架，特别适合构建现代化的 Web 应用。通过合理使用其特性，可以显著提升开发效率和用户体验。</p>
    `,
    tags: ["Next.js", "React", "前端开发", "Web 应用"],
    readTime: "8 分钟",
  },
  {
    slug: "frontend-state-management-comparison",
    title: "前端开发中的状态管理方案对比",
    description: "对比了 Redux、MobX、Zustand 等主流前端状态管理方案的优缺点。",
    date: "2024-05-20",
    author: "李四",
    content: `
      <h2>状态管理的重要性</h2>
      <p>在现代前端开发中，状态管理是构建复杂应用的核心问题。随着应用规模的增大，组件间的数据共享和状态同步变得越来越复杂。</p>
      
      <h2>主流状态管理方案</h2>
      
      <h3>1. Redux</h3>
      <p><strong>优点：</strong></p>
      <ul>
        <li>生态系统完善，社区支持强大</li>
        <li>可预测的状态更新流程</li>
        <li>优秀的开发工具支持</li>
        <li>适合大型应用</li>
      </ul>
      <p><strong>缺点：</strong></p>
      <ul>
        <li>样板代码较多</li>
        <li>学习曲线陡峭</li>
        <li>小型应用可能过度设计</li>
      </ul>
      
      <h3>2. MobX</h3>
      <p><strong>优点：</strong></p>
      <ul>
        <li>响应式编程模型</li>
        <li>代码简洁，学习成本低</li>
        <li>自动依赖追踪</li>
        <li>灵活性高</li>
      </ul>
      <p><strong>缺点：</strong></p>
      <ul>
        <li>调试相对困难</li>
        <li>状态变化不够透明</li>
        <li>可能产生意外的副作用</li>
      </ul>
      
      <h3>3. Zustand</h3>
      <p><strong>优点：</strong></p>
      <ul>
        <li>API 简洁，易于使用</li>
        <li>TypeScript 支持优秀</li>
        <li>包体积小</li>
        <li>无需 Provider 包装</li>
      </ul>
      <p><strong>缺点：</strong></p>
      <ul>
        <li>生态系统相对较小</li>
        <li>社区资源有限</li>
        <li>复杂场景下可能不够灵活</li>
      </ul>
      
      <h3>4. Context API + useReducer</h3>
      <p><strong>优点：</strong></p>
      <ul>
        <li>React 内置，无需额外依赖</li>
        <li>轻量级解决方案</li>
        <li>与 React 生态完美集成</li>
      </ul>
      <p><strong>缺点：</strong></p>
      <ul>
        <li>功能相对简单</li>
        <li>大型应用可能不够用</li>
        <li>性能优化需要手动处理</li>
      </ul>
      
      <h2>选择建议</h2>
      <ul>
        <li><strong>小型应用</strong>：Context API + useReducer 或 Zustand</li>
        <li><strong>中型应用</strong>：Zustand 或 MobX</li>
        <li><strong>大型应用</strong>：Redux 或 Redux Toolkit</li>
        <li><strong>团队项目</strong>：考虑团队熟悉度和项目复杂度</li>
      </ul>
      
      <h2>性能考虑</h2>
      <p>无论选择哪种方案，都要注意以下几点：</p>
      <ul>
        <li>避免不必要的重渲染</li>
        <li>合理使用 memo 和 useMemo</li>
        <li>状态结构设计要合理</li>
        <li>考虑使用虚拟化技术处理大量数据</li>
      </ul>
      
      <h2>总结</h2>
      <p>状态管理方案的选择应该基于项目需求、团队能力和长期维护考虑。没有完美的解决方案，关键是要选择最适合当前项目的方案。</p>
    `,
    tags: ["状态管理", "Redux", "MobX", "Zustand", "React"],
    readTime: "12 分钟",
  },
];

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ArticlePage({ params }: PageProps) {
  const article = articles.find((article) => article.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black py-12 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        {/* 返回按钮 */}
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          返回博客列表
        </Link>

        {/* 文章头部 */}
        <header className="mb-8">
          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
            <span>•</span>
            <span>作者：{article.author}</span>
          </div>
          
          <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
            {article.title}
          </h1>
          
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
            {article.description}
          </p>
          
          {/* 标签 */}
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* 文章内容 */}
        <article className="prose prose-lg max-w-none">
          <div
            className="text-gray-800 dark:text-gray-200 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>

        {/* 文章底部 */}
        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              最后更新：{article.date}
            </div>
            <Link
              href="/blog"
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
            >
              查看所有文章
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
