import React from 'react';

export default function SakibaNabiProfile() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        
        <div className="flex flex-col md:flex-row">
          
          {/* 左侧个人信息面板 - 农业(橙色) + 水文(天蓝与深蓝) 的渐变色带 */}
          <div className="w-full md:w-1/3 bg-gradient-to-br from-orange-500 via-sky-500 to-blue-700 text-white p-10 flex flex-col items-center md:items-start text-center md:text-left relative overflow-hidden">
            
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl"></div>

            {/* 响应式相框：自适应宽度且保持 14:18 比例，缩放绝不溢出 */}
            <div className="relative w-full max-w-[14rem] aspect-[14/18] rounded-2xl overflow-hidden border border-white/20 mb-8 shadow-2xl mx-auto md:mx-0 bg-white/10 backdrop-blur-sm z-10">
              <img 
                src="/people/sakiba-nabi.jpg" 
                alt="Sakiba Nabi" 
                className="w-full h-full object-cover object-[50%_0%]" 
              />
            </div>
            
            <h1 className="relative z-10 text-3xl font-bold tracking-tight mb-2">Sakiba Nabi</h1>
            <p className="relative z-10 text-sky-50 text-sm font-medium leading-relaxed mb-6">
              Postdoctoral Fellow<br/>
              i-Ecoclimatology Lab
            </p>

            {/* 学术社交链接 */}
            <div className="relative z-10 flex space-x-4 mb-10 justify-center md:justify-start w-full">
              <a href="mailto:example@tsinghua.edu.cn" className="text-sky-100 hover:text-white transition-colors" title="Email">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-sky-100 hover:text-white transition-colors" title="GitHub">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>

            {/* 严格按照 markdown 提取研究兴趣 */}
            <div className="relative z-10 w-full">
              <h3 className="text-xs font-bold uppercase tracking-wider text-sky-200 mb-4 border-b border-sky-400/50 pb-2">Research Interests</h3>
              <ul className="space-y-3 text-sm font-medium text-sky-50">
                <li>Hydrological Modeling</li>
                <li>Bayesian Flood Frequency Analysis</li>
                <li>Compound Extreme Events Analysis</li>
                <li>Ecohydrology</li>
              </ul>
            </div>
          </div>

          {/* 右侧主内容区 */}
          <div className="w-full md:w-2/3 p-10 md:p-16">
            
            {/* 个人简介 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Biography</h2>
              <div className="prose prose-slate max-w-none text-gray-600 leading-relaxed space-y-6">
                <p>
                  Sakiba Nabi is a Postdoctoral Fellow in Hydrology and Climate Science at the Tsinghua SIGS. Her expertise lies in hydrology and climate-driven flood extremes, with a research portfolio encompassing spatio-temporal variability of precipitation and temperature, hydrological modeling, Bayesian flood frequency analysis, and the analysis of compound extreme events. 
                </p>
                <p>
                  Currently, her work focuses on the impacts of extreme weather events on the Asian Water Tower and their influence on regional monsoon dynamics. Additionally, she investigates the effects of climate-induced floods and droughts on agricultural productivity, aiming to understand the broader implications of a changing climate on water resources and food security.
                </p>
              </div>
            </section>

            {/* 工作经历 - 放置在教育经历上方 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Professional Experience</h2>
              <div className="space-y-6">
                <div className="border-l-2 border-sky-300 pl-4 relative">
                  <div className="absolute w-2 h-2 bg-sky-500 rounded-full -left-[5px] top-2 shadow-[0_0_0_4px_rgba(14,165,233,0.1)]"></div>
                  <h4 className="text-md font-bold text-gray-900">Postdoctoral Fellow in Environmental Science & Hydrology</h4>
                  <p className="text-sm text-gray-500">Tsinghua Shenzhen International Graduate School | Present</p>
                </div>
              </div>
            </section>

            {/* 教育经历 - 严格对应 markdown 中的 education 字段 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Education</h2>
              <div className="space-y-6">
                {/* 博士 */}
                <div className="border-l-2 border-slate-200 pl-4 relative">
                  <div className="absolute w-2 h-2 bg-slate-400 rounded-full -left-[5px] top-2"></div>
                  <h4 className="text-md font-bold text-gray-900">Ph.D. in Civil Engineering (Hydrology Specialization)</h4>
                  <p className="text-sm text-gray-500">National Institute of Technology, Srinagar | 2017 - 2022</p>
                </div>
                {/* 硕士 */}
                <div className="border-l-2 border-slate-200 pl-4 relative">
                  <div className="absolute w-2 h-2 bg-slate-400 rounded-full -left-[5px] top-2"></div>
                  <h4 className="text-md font-bold text-gray-900">M.Tech in Water Resources Engineering</h4>
                  <p className="text-sm text-gray-500">National Institute of Technology, Srinagar | 2015 - 2017</p>
                </div>
                {/* 本科 */}
                <div className="border-l-2 border-slate-200 pl-4 relative">
                  <div className="absolute w-2 h-2 bg-slate-400 rounded-full -left-[5px] top-2"></div>
                  <h4 className="text-md font-bold text-gray-900">B.Tech in Agricultural Engineering</h4>
                  <p className="text-sm text-gray-500">Sher-e-Kashmir University of Agricultural Sciences and Technology | 2013 - 2015</p>
                </div>
              </div>
            </section>

          </div>
        </div>

      </div>
    </div>
  );
}