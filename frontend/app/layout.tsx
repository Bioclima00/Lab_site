import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// 引入 Next.js 专属的 Link 组件
import Link from "next/link"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // 选项卡标题：突出了实验室名称与核心研究方向
  title: "i-Ecoclimatology Lab | Climate & Ecosystems",
  description: "Investigating ecosystem dynamics, carbon-water cycles, and climate attribution through advanced Earth observation",

// 替换选项卡左侧的黑色三角形图标
icons: {
  icon: "/icon.png", // 只要你的 logo 放在 public/icon.png，这里就会自动读取
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        
        {/* 这里是全局导航栏 */}
        <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-200">
          {/* 左侧：Logo 或课题组名称 */}
          <div className="flex items-center space-x-3">
          {/* 调用 public/icon.png */}
          <img src="/icon.png" alt="Lab Logo" className="w-10 h-10 object-contain" />
          <Link href="/" className="text-xl font-bold tracking-tight text-gray-900 hover:text-blue-600 transition-colors">
           i-Ecoclimatology Lab
            </Link>
          </div>

          {/* 右侧：你需要的各个选项卡 */}
          <div className="flex space-x-8 text-sm font-medium text-gray-600">
            <Link href="/research" className="hover:text-black transition-colors">Research</Link>
            <Link href="/people" className="hover:text-black transition-colors">People</Link>
            <Link href="/publication" className="hover:text-black transition-colors">Publication</Link>
            <Link href="/events" className="hover:text-black transition-colors">Events</Link>
            <Link href="/teaching" className="hover:text-black transition-colors">Teaching</Link>
            {/* <Link href="/tour" className="hover:text-black transition-colors">Tour</Link> */}
            {/* <Link href="/post" className="hover:text-black transition-colors">Post</Link> */}
            <Link href="/contact" className="hover:text-black transition-colors">Contact</Link>
            {/* Admin 通常可以稍微区分一下样式 */}
            {/* <Link href="/admin" className="text-blue-600 hover:text-blue-800 transition-colors">Admin</Link> */}
          </div>
        </nav>

        {/* 下方是每个特定网页的主体内容 */}
        {/* 注意：为了防止底部栏压住内容，可以稍微调整 main 的最小高度 (min-h-[calc(100vh-160px)]) */}
        <main className="min-h-[calc(100vh-160px)] bg-zinc-50/50">
          {children}
        </main>
        {/* ========================================================= */}
        {/* 🚀 新增：全局页面底部版权声明 (Footer) */}
        <footer className="w-full bg-white border-t border-gray-200 py-8 mt-auto relative z-50">
          <div className="max-w-6xl mx-auto px-6 flex flex-col items-center justify-center">
            <p className="text-sm font-medium text-gray-500 text-center tracking-wide">
              Copyright &copy; 2026 i-Ecoclimatology Lab, Tsinghua SIGS. All rights reserved.
            </p>
          </div>
        </footer>
        {/* ========================================================= */}
      </body>
    </html>
  );
}