import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    // 1. 【修改这里】：确保你的最外层 div 包含 "relative overflow-hidden"
    // overflow-hidden 是为了防止丝带的边缘导致网页出现横向滚动条
    <div className="relative flex flex-col items-center w-full bg-white overflow-hidden">

      {/* 🚀 防弹版丝带代码开始 */}
      {/* 使用 z-0 确保它在白色背景之上，使用 pointer-events-none 确保它不会阻挡鼠标点击 */}
      <div className="absolute top-0 left-0 w-full h-[800px] overflow-hidden z-0 pointer-events-none">
        {/* 左侧绿丝带 */}
        <div className="absolute top-20 -left-40 w-96 h-96 bg-emerald-400 opacity-20 rounded-full blur-3xl mix-blend-multiply"></div>
        {/* 右侧青丝带 */}
        <div className="absolute top-60 -right-20 w-96 h-96 bg-blue-400 opacity-20 rounded-full blur-3xl mix-blend-multiply"></div>
      </div>
      {/* 🚀 防弹版丝带代码结束 */}

      {/* 首页大图区域 */}
      {/* ⚠️ 核心：给下方的内容大图加上 relative z-10，让它们浮在丝带上方 */}
      <div className="relative z-10 w-full max-w-6xl h-[500px] rounded-3xl overflow-hidden shadow-2xl mt-8">  {/* 背景合照 */}
        <img 
          src="/team/team2.jpg" 
          alt="Laboratory Team" 
          className="w-full h-full object-cover"
        />
        
        {/* 半透明覆膜 (黑色背景 40% 不透明度) */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg">
            Welcome to i-Ecoclimatology Lab
          </h1>
          {/* ✅ 已修改：基于架构图凝练的全新 Lab 标语 */}
          <p className="mt-4 text-xl text-gray-100 max-w-2xl font-medium">
            Decoding the intricate interactions between ecosystems, water cycles, and climate to advance impact assessment and global mitigation strategies.
          </p>
        </div>
      </div>

      {/* 下方可以继续添加简介或其他模块 */}
      {/* ⚠️ 核心：给下方的简介和推文也加上 relative z-10 */}
    <section className="relative z-10 mt-20 text-center max-w-3xl px-4">
        <h2 className="text-3xl font-bold text-gray-800">Our Research</h2>
        {/* ✅ 已修改：整合了架构图三大支柱，以及 CESM/WRF/归因分析等内容 */}
        <p className="mt-4 text-gray-600 leading-relaxed text-lg">
          Our research encompasses three core pillars: water cycle-climate interactions, ecosystem-climate interactions, and climate impacts & mitigation. By integrating Earth system models (such as CESM and WRF), spatial multi-source data, and attribution analysis, we aim to uncover complex climate feedbacks and develop method-driven, actionable mitigation strategies.
        </p>
        </section>
    {/* 新增：推文 Post 板块 */}
      <section className="relative z-10 mt-20 w-full max-w-5xl px-4 mb-20">
        <div className="flex justify-between items-end border-b border-gray-200 pb-4 mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Latest Updates</h2>
          <Link href="/events" className="text-sm font-semibold text-blue-600 hover:text-blue-800">
            View All Events &rarr;
          </Link>
        </div>
        {/* 两个推文卡片的栅格布局 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* 推文卡片 1: 最新中文新闻 (2024-12-16) */}
          {/* 路径已更新为带日期的版本 */}
          <Link href="/events/deadly-heat-tsinghua-20241216" className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300">
            <div className="p-6">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">Research Breakthrough</span>
              <h3 className="mt-2 text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                深圳国际研究生院范远超团队合作在全球变暖与致命热应激研究方面取得新进展
              </h3>
              <p className="mt-3 text-gray-600 text-sm line-clamp-2">
                首次在全球尺度定量评估了户外湿热、太阳辐射及生理特征等因素对热应激的影响，揭示此前研究严重低估全球变暖带来的户外健康风险。
              </p>
              <div className="mt-6 flex items-center text-xs font-medium text-gray-400">
                <span>December 16, 2024</span>
                <span className="mx-2">&bull;</span>
                <span>Tsinghua News</span>
              </div>
            </div>
          </Link>

          {/* 推文卡片 2: 最新英文新闻 (2024-12-12) */}
          {/* 路径已更新为带日期的版本 */}
          <Link href="/events/deadly-heat-harvard-20241212" className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300">
            <div className="p-6">
              {/* 标签已从 Publications 修改为 Research News */}
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">Research News</span>
              <h3 className="mt-2 text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                Deadly heat coming for healthy people — Harvard research
              </h3>
              <p className="mt-3 text-gray-600 text-sm line-clamp-2">
                Venturing outdoors during heatwaves may become deadly for millions of people in a world only slightly warmer than today’s, according to new research published in Communications Earth & Environment.
              </p>
              <div className="mt-6 flex items-center text-xs font-medium text-gray-400">
                <span>December 12, 2024</span>
                <span className="mx-2">&bull;</span>
                <span>Harvard Gazette</span>
              </div>
            </div>
          </Link>

        </div>
      </section>
    </div>
  );
}