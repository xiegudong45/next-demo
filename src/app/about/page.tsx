import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black py-12 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black dark:text-white mb-4">关于我们</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            了解这个 Next.js Demo 应用的更多信息
          </p>
        </div>

        {/* 应用介绍 */}
        <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-4">应用概述</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            这是一个使用 Next.js 15 和 React 19 构建的现代化 Web 应用演示项目。
            项目展示了现代前端开发的最佳实践，包括：
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
            <li>基于文件系统的路由系统</li>
            <li>服务端渲染 (SSR) 和静态站点生成 (SSG)</li>
            <li>响应式设计和移动端适配</li>
            <li>深色/浅色主题切换</li>
            <li>TypeScript 类型安全</li>
            <li>Tailwind CSS 样式系统</li>
          </ul>
        </div>

        {/* 技术栈 */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4">前端技术</h3>
            <ul className="space-y-2 text-blue-800 dark:text-blue-200">
              <li>• React 19 - 最新的 React 版本</li>
              <li>• Next.js 15 - 全栈 React 框架</li>
              <li>• TypeScript - 类型安全的 JavaScript</li>
              <li>• Tailwind CSS - 实用优先的 CSS 框架</li>
            </ul>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-4">开发特性</h3>
            <ul className="space-y-2 text-green-800 dark:text-green-200">
              <li>• 热重载开发体验</li>
              <li>• ESLint 代码质量检查</li>
              <li>• 响应式设计系统</li>
              <li>• 深色模式支持</li>
            </ul>
          </div>
        </div>

        {/* 项目结构 */}
        <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-4">项目结构</h2>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm">
            <pre className="text-gray-800 dark:text-gray-200">
{`src/
├── app/
│   ├── layout.tsx          # 根布局组件
│   ├── page.tsx            # 首页
│   ├── globals.css         # 全局样式
│   ├── blog/
│   │   ├── page.tsx        # 博客列表页
│   │   └── [slug]/
│   │       ├── page.tsx    # 文章详情页
│   │       └── not-found.tsx # 404 页面
│   └── about/
│       └── page.tsx        # 关于页面
└── ...`}
            </pre>
          </div>
        </div>

        {/* 功能特性 */}
        <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-4">主要功能</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
              <div>
                <h4 className="font-semibold text-black dark:text-white">博客系统</h4>
                <p className="text-gray-600 dark:text-gray-400">完整的博客文章展示和管理功能</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
              <div>
                <h4 className="font-semibold text-black dark:text-white">响应式设计</h4>
                <p className="text-gray-600 dark:text-gray-400">完美适配各种设备尺寸</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex-shrink-0 mt-1"></div>
              <div>
                <h4 className="font-semibold text-black dark:text-white">深色模式</h4>
                <p className="text-gray-600 dark:text-gray-400">支持浅色和深色主题切换</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex-shrink-0 mt-1"></div>
              <div>
                <h4 className="font-semibold text-black dark:text-white">SEO 友好</h4>
                <p className="text-gray-600 dark:text-gray-400">服务端渲染提升搜索引擎优化</p>
              </div>
            </div>
          </div>
        </div>

        {/* 快速链接 */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-6">开始探索</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              返回首页
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              浏览博客
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
