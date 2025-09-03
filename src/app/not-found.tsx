export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">页面未找到</h2>
      <p className="mb-6 text-lg text-gray-600 dark:text-gray-400">
        抱歉，您访问的页面不存在。
      </p>
      <a
        href="/"
        className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
      >
        返回首页
      </a>
    </div>
  );
}
