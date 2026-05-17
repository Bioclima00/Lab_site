import React from 'react';
import Link from 'next/link';

// 将推文数据集中管理，方便以后添加新推文
const eventsData = [
  {
    id: "deadly-heat-tsinghua-20241216",
    title: "深圳国际研究生院范远超团队合作在全球变暖与致命热应激研究方面取得新进展",
    date: "December 16, 2024",
    tag: "Research Breakthrough",
    tagColor: "text-red-600",
    bgColor: "bg-red-50",
    source: "Tsinghua News",
    excerpt: "首次在全球尺度定量评估了户外湿热、太阳辐射及生理特征等因素对热应激的影响，揭示此前研究严重低估全球变暖带来的户外健康风险。",
    link: "/events/deadly-heat-tsinghua-20241216"
  },
  {
    id: "deadly-heat-harvard-20241212",
    title: "Deadly heat coming for healthy people — Harvard research",
    date: "December 12, 2024",
    tag: "Research News",
    tagColor: "text-orange-600",
    bgColor: "bg-orange-50",
    source: "Harvard Gazette",
    excerpt: "Venturing outdoors during heatwaves may become deadly for millions of people in a world only slightly warmer than today’s, according to new research published in Communications Earth & Environment.",
    link: "/events/deadly-heat-harvard-20241212"
  },
  {
    id: "solar-geoengineering-20210520",
    title: "Model shows solar geoengineering may be surprisingly effective in alleviating impacts of global warming on crops",
    date: "May 20, 2021",
    tag: "Publication",
    tagColor: "text-blue-600",
    bgColor: "bg-blue-50",
    source: "Nature Food",
    excerpt: "Solar geoengineering is not a fix-all for climate change but it could be one of several tools to manage climate risks. Research offers better understanding of its effect on agriculture.",
    link: "/events/solar-geoengineering-20210520"
  }
];

export default function EventsIndexPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* 页面头部：优雅的标题与背景描述 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            Lab Events & News
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Discover the latest research breakthroughs, publications, and academic activities from the i-Ecoclimatology Lab.
          </p>
        </div>

        {/* 推文卡片网格：响应式设计 (手机1列, 平板2列, 电脑3列) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {eventsData.map((event) => (
            <Link 
              href={event.link} 
              key={event.id}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* 卡片顶部的小色块装饰，增加设计感 */}
              <div className={`h-2 w-full ${event.bgColor}`}></div>
              
              <div className="p-8 flex flex-col flex-grow">
                {/* 标签 */}
                <span className={`text-xs font-bold uppercase tracking-wider mb-3 block ${event.tagColor}`}>
                  {event.tag}
                </span>
                
                {/* 标题 */}
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-3 mb-4 leading-snug">
                  {event.title}
                </h3>
                
                {/* 摘要内容 */}
                <p className="text-gray-600 text-sm line-clamp-4 flex-grow mb-6 leading-relaxed">
                  {event.excerpt}
                </p>
                
                {/* 底部元数据 (日期 & 来源) */}
                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between text-xs font-medium text-gray-400">
                  <span>{event.date}</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-slate-600">
                    {event.source}
                  </span>
                </div>
              </div>
            </Link>
          ))}

        </div>

        {/* 底部加载更多 / 提示区 (未来如果推文很多可以做分页) */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 text-sm font-medium">
            More events will be updated soon.
          </p>
        </div>

      </div>
    </div>
  );
}