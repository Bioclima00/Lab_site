"use client";  // <--- 标志着这是一个客户端组件

import React from 'react';
import Link from 'next/link';

/* ============================================================================
   📋 【实验室人员管理数据库】 📋
   
   管理人员的规则极其简单：
   1. 【如何添加新类别？】 复制一段 `{ category: "...", members: [...] }` 即可。
   2. 【如何添加新成员？】 在对应类别的 members 列表里，按照格式加一行新的数据。
   3. 【如何修改排序？】 想让谁排在前面，就把谁的那行代码剪切、粘贴到列表的最上面！
      (Next.js 会严格按照你在这里排列的从上到下的顺序来显示他们)
   ============================================================================ */

const teamData = [
  {
    category: "Principal Investigator",
    members: [
      {
        id: "yuanchao-fan",
        name: "Yuanchao Fan",
        title: "Associate Professor",
        role: "PI of i-Ecoclimatology Lab",
        imageUrl: "/people/yuanchao-fan.jpg"
      }
    ]
  },
  {
    category: "Postdoctoral Researchers",
    members: [
      {
        id: "xiao-zhang", // 注意：这决定了点击后的网址是 /people/jiameng-xu
        name: "Xiao Zhang",
        title: "Postdoctoral Researcher",
        role: "WRF & Ecosystem Modeling",
        imageUrl: "/people/xiao-zhang.jpg"
      },
      {
        id: "jiameng-xu", // 注意：这决定了点击后的网址是 /people/jiameng-xu
        name: "Jiameng Xu",
        title: "Postdoctoral Researcher",
        role: "Ecosystem Modeling",
        imageUrl: "/people/jiameng-xu.jpg"
      },
      {
        id: "sakiba-nabi", // 注意：这决定了点击后的网址是 /people/jiameng-xu
        name: "Sakiba Nabi",
        title: "Postdoctoral Researcher",
        role: "Ecosystem Modeling",
        imageUrl: "/people/sakiba-nabi.jpg"
      }
      // 如果有第二个博士后，直接在这里接着写：
      // { id: "...", name: "...", title: "...", role: "...", imageUrl: "..." }
    ]
  },
  {
    category: "Graduate Students",
    members: [
      /* === 博士生 (按入学年份排序: 2023 -> 2024 -> 2025) === */
      {
        id: "mei-du",
        name: "Mei Du",
        title: "Ph.D. Student",
        role: "Human Heat Stress",
        imageUrl: "/people/mei-du.jpg",
        // objectPos: "object-[10%_0%]"
      },
      {
        id: "zhaoyu-dong",
        name: "Zhaoyu Dong",
        title: "Ph.D. Student",
        role: "Soil Moisture and Ice Point Modeling",
        imageUrl: "/people/zhaoyu-dong.jpg",
        objectPos: "object-[10%_0%]"
      },
      {
        id: "senyao-feng",
        name: "Senyao Feng",
        title: "Ph.D. Student",
        role: "Ultra-high-resolution Remote Sensing",
        imageUrl: "/people/senyao-feng.jpg"
      },
      {
        id: "yuanyuan-luo",
        name: "Yuanyuan Luo",
        title: "Ph.D. Student",
        role: "Large-Scale Photovoltaic Microclimates",
        imageUrl: "/people/yuanyuan-luo.jpg"
      },
      {
        id: "kayastha-bhusan",
        name: "Bhusan Kayastha",
        title: "Ph.D. Student",
        role: "AI Powered Heat Stress Prediction",
        imageUrl: "/people/kayastha-bhusan.jpg"
      },
      // /* === 硕士生 (按入学年份排序: 2023 -> 2024 -> 2025) === */
      // // --- 2023级硕士 ---
/* === 硕士生 (按入学年份排序: 2023 -> 2024 -> 2025) === */
      // --- 2023级硕士 ---
      {
        id: "song-tan",
        name: "Song Tan",
        title: "Master's Student",
        role: "Ecological Hydrology",
        imageUrl: "/people/song-tan.jpg"
      },
      {
        id: "yida-yin",
        name: "Yida Yin",
        title: "Master's Student",
        role: "Energy Budget & Solar Radiation",
        imageUrl: "/people/yida-yin.jpg"
      },
      {
        id: "jiahao-fang",
        name: "Jiahao Fang",
        title: "Master's Student",
        role: "Climate Modeling & Heatwaves",
        imageUrl: "/people/jiahao-fang.jpg"
      },
      // --- 2024级硕士 ---
      {
        id: "jingyuan-zhao",
        name: "Jingyuan Zhao",
        title: "Master's Student",
        role: "Global Energy Balance",
        imageUrl: "/people/jingyuan-zhao.jpg"
      },
      {
        id: "yaru-jin",
        name: "Yaru Jin",
        title: "Master's Student",
        role: "Global Climate Modeling",
        imageUrl: "/people/yaru-jin.jpg"
      },
      {
        id: "xiaheng-feng",
        name: "Xiaheng Feng",
        title: "Master's Student",
        role: "Climate Modeling & Energy",
        imageUrl: "/people/xiaheng-feng.jpg"
      },
      {
        id: "marek-visnovec",
        name: "Marek Visnovec",
        title: "Master's Student",
        role: "Decarbonisation & DAC",
        imageUrl: "/people/marek-visnovec.jpg"
      },
      {
        id: "shihan-fang",
        name: "Shihan Fang",
        title: "Master's Student",
        role: "Climate Mitigation Policy",
        imageUrl: "/people/shihan-fang.jpg"
      },
      // --- 2025级硕士 ---
      {
        id: "lei-sheng",
        name: "Lei Sheng",
        title: "Master's Student",
        role: "Geoengineering & Heat Stress",
        imageUrl: "/people/lei-sheng.jpg"
      },
      {
        id: "jingjing-li",
        name: "Jingjing Li",
        title: "Master's Student",
        role: "Heat Adaptation Inequality",
        imageUrl: "/people/jingjing-li.jpg"
      },
      {
        id: "fen-liu",
        name: "Fen Liu",
        title: "Master's Student",
        role: "Climate Change & Crop Yields",
        imageUrl: "/people/fen-liu.jpg"
      },
      {
        id: "jiahui-zhang",
        name: "Jiahui Zhang",
        title: "Master's Student",
        role: "Global Ecological Drought Responses",
        imageUrl: "/people/jiahui-zhang.jpg"
      },
      
      // 想让谁排第一，就把谁写在列表最上面
    ]
  },
  // 你随时可以取消下面这段代码的注释，激活“ Alumni (校友)” 模块
  /*
  {
    category: "Alumni",
    members: [
      { id: "former-student", name: "John Doe", title: "M.S. 2025", role: "Now at Univ X", imageUrl: "/people/default.jpg" }
    ]
  }
  */
];

export default function People() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      
      {/* 🚀 【已修改的丝带区域】：使用 z-0 和指针穿透，确保完美显色且不遮挡点击 */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* 中部青色丝带 */}
        <div className="absolute top-1/4 -right-40 w-[30rem] h-[30rem] bg-cyan-300 opacity-20 rounded-full blur-3xl mix-blend-multiply animate-pulse"></div>
        {/* 底部绿色丝带 */}
        <div className="absolute bottom-20 -left-20 w-[25rem] h-[25rem] bg-emerald-300 opacity-20 rounded-full blur-3xl mix-blend-multiply"></div>
      </div>
      {/* 🚀 丝带区域修改结束 */}
      
      {/* 顶部 Hero 区域 */}
      <div className="relative w-full h-[350px]">
        <img 
          src="/team/team3.jpg" 
          alt="i-Ecoclimatology Team" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/50 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Meet the Team
          </h1>
        </div>
      </div>

      {/* 成员列表区域 (自动根据上面的 teamData 生成) */}
      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        
        {/* 遍历每一个分类 (PI, Postdocs, Students...) */}
        {teamData.map((section, index) => (
          <section key={index} className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-100 pb-3 mb-8 tracking-tight">
              {section.category}
            </h2>
            
            {/* 自动网格排版：手机单列，平板双列，电脑四列 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              
              {/* 遍历该分类下的每一个人 */}
              {section.members.map((person) => (
                <Link 
                  href={`/people/${person.id}`} 
                  key={person.id}
                  className="group flex flex-col items-center text-center p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                >
                  {/* 时尚的矩形相框 */}
                  <div className="w-48 h-64 rounded-2xl overflow-hidden mb-5 shadow-sm group-hover:shadow-xl transition-all duration-300 border border-slate-100 bg-slate-50 relative">
                    <img 
                      src={person.imageUrl} 
                      alt={person.name} 
                      className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${person.objectPos || 'object-top'}`} 
                      // 💡 错误处理：如果照片还没放进文件夹，用一个灰色占位符代替，防止网页崩溃
                      onError={(e) => {
                        e.currentTarget.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23cbd5e1'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E";
                        e.currentTarget.className = "w-full h-full object-cover p-8 opacity-50";
                      }}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{person.name}</h3>
                  <p className="text-sm text-gray-500 mt-1 font-medium">{person.title}</p>
                  <p className="text-xs text-gray-400 mt-1">{person.role}</p>
                </Link>
              ))}

            </div>
          </section>
        ))}

      </div>
    </div>
  );
}