export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* 头部区域 */}
      <header className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">孤帆 AI</h1>
          <p className="text-xl text-gray-300">AI 编程作品展示平台</p>
        </div>
      </header>

      {/* 项目展示区域 */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">我的 AI 作品</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 项目卡片 1 */}
          <div className="bg-gray-800 rounded-lg p-6 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-4">AI 助手</h3>
            <p className="text-gray-300 mb-4">基于大型语言模型的智能编程助手，帮助开发者提高编码效率。</p>
            <a href="#" className="text-blue-400 hover:text-blue-300">查看详情 →</a>
          </div>

          {/* 项目卡片 2 */}
          <div className="bg-gray-800 rounded-lg p-6 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-4">代码生成器</h3>
            <p className="text-gray-300 mb-4">智能代码生成工具，支持多种编程语言和框架。</p>
            <a href="#" className="text-blue-400 hover:text-blue-300">查看详情 →</a>
          </div>

          {/* 项目卡片 3 */}
          <div className="bg-gray-800 rounded-lg p-6 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-4">AI 学习平台</h3>
            <p className="text-gray-300 mb-4">个性化学习路径推荐，智能练习系统。</p>
            <a href="#" className="text-blue-400 hover:text-blue-300">查看详情 →</a>
          </div>
        </div>
      </section>

      {/* 联系方式 */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-400">
        <p>© 2024 孤帆 AI. All rights reserved.</p>
      </footer>
    </main>
  );
}
