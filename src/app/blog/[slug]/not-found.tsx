import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-black py-12 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-300 dark:text-gray-700 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
            文章未找到
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            抱歉，您要查找的文章不存在或已被删除。
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/blog"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            返回博客列表
          </Link>
          
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
              返回首页
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

