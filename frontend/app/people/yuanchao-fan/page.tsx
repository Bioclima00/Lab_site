import React from 'react';

export default function YuanchaoFanProfile() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        
        <div className="flex flex-col md:flex-row">
          
          {/* ========================================================================
            🎨 【主题配色修改指南】 🎨
            这里的背景颜色完全由 className 里的几个单词控制：
            1. bg-gradient-to-br : 意思是背景颜色向右下角 (bottom-right) 渐变
            2. from-emerald-800  : 渐变的【起始色】（这里是较深的祖母绿）
            3. via-teal-700      : 渐变的【中间色】（这里是海蓝）
            4. to-cyan-900       : 渐变的【结束色】（这里是深青色）

            💡 如果你以后想换颜色，只需要改上面这三个词。
            例如，想换成冷静的深海科技蓝调：
            改成 -> from-blue-900 via-indigo-800 to-slate-900
            
            想换成热情的秋天/土壤色调：
            改成 -> from-orange-800 via-amber-700 to-stone-900
            ========================================================================
          */}
          <div className="w-full md:w-1/3 bg-gradient-to-br from-emerald-800 via-teal-700 to-cyan-900 text-white p-10 flex flex-col items-center md:items-start text-center md:text-left relative overflow-hidden">
            
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl"></div>
            {/* 锁定宽高比防止变形 */}
            <div className="relative w-full max-w-[14rem] aspect-[14/18] rounded-2xl overflow-hidden border border-white/20 mb-8 shadow-2xl mx-auto md:mx-0 bg-white/10 backdrop-blur-sm z-10">
              <img 
                src="/people/yuanchao-fan.jpg" 
                alt="Yuanchao Fan" 
                className="w-full h-full object-cover object-top" 
              />
            </div>
            
            <h1 className="relative z-10 text-3xl font-bold tracking-tight mb-2">Yuanchao Fan</h1>
            {/* 更新为 Associate Professor */}
            <p className="relative z-10 text-emerald-50 text-sm font-medium leading-relaxed mb-6">
              Associate Professor of Environmental Science & Engineering<br/>
              PI of i-Ecoclimatology Lab
            </p>

            {/* 学术社交链接 */}
            <div className="relative z-10 flex space-x-4 mb-10 justify-center md:justify-start w-full">
              <a href="mailto:yuanchao.fan@sz.tsinghua.edu.cn" className="text-emerald-100 hover:text-white transition-colors" title="Email">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </a>
              <a href="https://scholar.google.com/citations?user=0Nj_pzQdGbMC" target="_blank" rel="noopener noreferrer" className="text-emerald-100 hover:text-white transition-colors" title="Google Scholar">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.911L12 5l12 9.5V20h-2v-3.808L16 19.34V12.5l-4-3.125z"/></svg>
              </a>
              <a href="https://github.com/yfa008" target="_blank" rel="noopener noreferrer" className="text-emerald-100 hover:text-white transition-colors" title="GitHub">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>

            {/* 研究兴趣 */}
            <div className="relative z-10 w-full">
              <h3 className="text-xs font-bold uppercase tracking-wider text-teal-200 mb-4 border-b border-teal-600/50 pb-2">Research Interests</h3>
              <ul className="space-y-3 text-sm font-medium text-emerald-50">
                <li>Energy, Water, Carbon Cycles</li>
                <li>Climate Risk and Impact Assessment</li>
                <li>Climate Change Mitigation</li>
                <li>Climate-Land-Ecosystem-Society Nexus</li>
                <li>Earth System Modelling</li>
                <li>Remote Sensing</li>
              </ul>
            </div>
          </div>

          {/* 右侧主内容区 */}
          <div className="w-full md:w-2/3 p-10 md:p-16">
            
            {/* 个人简介 (去掉了 Representative Works 的杂糅) */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Biography</h2>
              <div className="prose prose-slate max-w-none text-gray-600 leading-relaxed space-y-6">
                <p>
                  Dr. Fan joined Tsinghua SIGS in January 2023. He was formerly a research fellow at Harvard University Center for the Environment (2019-2022) and a postdoctoral researcher at the Norwegian Research Centre and the Bjerknes Centre for Climate Research (2016-2019). He specializes in climate change impact assessment and mitigation, applying principles of ecological climatology.
                </p>
                <p>
                  His research interests lie in the field of climate change 
                  impact and climate mitigation. 
                  Focusing on issues in the Climate-Land-Ecosystem-Society nexus, 
                  he take an interdisciplinary approach to assessing the impact of climate change and climate intervention
                   (including solar geoengineering) on agriculture, ecosystem, and human livability, as well as the feedback of 
                   land cover change to climate, to provide decision support for addressing 
                   climate change and building a carbon neutral society.
                </p>
              </div>
            </section>

            {/* 新增独立模块：代表作 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Representative Works</h2>
              <div className="space-y-4">
                <div className="p-5 rounded-xl border border-slate-100 bg-slate-50 hover:shadow-md hover:bg-white transition-all duration-300">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs mt-0.5 mr-3">1</span>
                    <p className="text-gray-800 text-sm leading-relaxed font-medium">
                      Developing a human energy balance model to project the impact of extreme heat stress on human health.
                    </p>
                  </div>
                </div>
                <div className="p-5 rounded-xl border border-slate-100 bg-slate-50 hover:shadow-md hover:bg-white transition-all duration-300">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs mt-0.5 mr-3">2</span>
                    <p className="text-gray-800 text-sm leading-relaxed font-medium">
                      Evaluating the impacts of solar geoengineering and emissions reduction scenarios on agriculture using Earth system models.
                    </p>
                  </div>
                </div>
                <div className="p-5 rounded-xl border border-slate-100 bg-slate-50 hover:shadow-md hover:bg-white transition-all duration-300">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs mt-0.5 mr-3">3</span>
                    <p className="text-gray-800 text-sm leading-relaxed font-medium">
                      Developing a CLM-Palm model to quantify the impact of rainforest to oil palm conversion on land-atmosphere carbon, water, and energy fluxes.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 更新：工作经历 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Professional Experience</h2>
              <div className="space-y-6">
                {/* 2026 晋升副教授 */}
                <div className="border-l-2 border-emerald-200 pl-4 relative">
                  <div className="absolute w-2 h-2 bg-emerald-500 rounded-full -left-[5px] top-2 shadow-[0_0_0_4px_rgba(16,185,129,0.1)]"></div>
                  <h4 className="text-md font-bold text-gray-900">Associate Professor</h4>
                  <p className="text-sm text-gray-500">Tsinghua Shenzhen International Graduate School | 2026.01 - Present</p>
                </div>
                {/* 2023 助理教授 */}
                <div className="border-l-2 border-emerald-100 pl-4 relative">
                  <div className="absolute w-2 h-2 bg-emerald-300 rounded-full -left-[5px] top-2"></div>
                  <h4 className="text-md font-bold text-gray-900">Assistant Professor</h4>
                  <p className="text-sm text-gray-500">Tsinghua Shenzhen International Graduate School | 2023.01 - 2025.12</p>
                </div>
                <div className="border-l-2 border-emerald-100 pl-4 relative">
                  <div className="absolute w-2 h-2 bg-emerald-300 rounded-full -left-[5px] top-2"></div>
                  <h4 className="text-md font-bold text-gray-900">Research Fellow</h4>
                  <p className="text-sm text-gray-500">Harvard University | 2019.10 - 2022.10</p>
                </div>
                <div className="border-l-2 border-emerald-100 pl-4 relative">
                  <div className="absolute w-2 h-2 bg-emerald-300 rounded-full -left-[5px] top-2"></div>
                  <h4 className="text-md font-bold text-gray-900">Postdoctoral Researcher</h4>
                  <p className="text-sm text-gray-500">NORCE Norwegian Research Centre & Bjerknes Centre for Climate Research | 2016.09 - 2019.08</p>
                </div>
                <div className="border-l-2 border-emerald-100 pl-4 relative">
                  <div className="absolute w-2 h-2 bg-emerald-300 rounded-full -left-[5px] top-2"></div>
                  <h4 className="text-md font-bold text-gray-900">Research Assistant</h4>
                  <p className="text-sm text-gray-500">Smithsonian Conservation Biology Institute | 2011.09 - 2012.10</p>
                </div>
              </div>
            </section>

            {/* 教育经历 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Education</h2>
              <div className="space-y-6">
                <div className="border-l-2 border-slate-200 pl-4 relative">
                  <div className="absolute w-2 h-2 bg-slate-400 rounded-full -left-[5px] top-2"></div>
                  <h4 className="text-md font-bold text-gray-900">Ph.D. in Bioclimatology</h4>
                  <p className="text-sm text-gray-500">University of Göttingen | 2012.11 - 2016.06</p>
                </div>
                <div className="border-l-2 border-slate-200 pl-4 relative">
                  <div className="absolute w-2 h-2 bg-slate-400 rounded-full -left-[5px] top-2"></div>
                  <h4 className="text-md font-bold text-gray-900">Ph.D. in Functional Ecology and Agricultural Sciences</h4>
                  <p className="text-sm text-gray-500">AgroParisTech (Joint Degree) | 2012.11 - 2016.06</p>
                </div>
                <div className="border-l-2 border-slate-200 pl-4 relative">
                  <div className="absolute w-2 h-2 bg-slate-400 rounded-full -left-[5px] top-2"></div>
                  <h4 className="text-md font-bold text-gray-900">M.S. in Environmental and Natural Resource Sciences</h4>
                  <p className="text-sm text-gray-500">University of Nevada, Reno | 2008.07 - 2011.08</p>
                </div>
                <div className="border-l-2 border-slate-200 pl-4 relative">
                  <div className="absolute w-2 h-2 bg-slate-400 rounded-full -left-[5px] top-2"></div>
                  <h4 className="text-md font-bold text-gray-900">B.Eng. in Remote Sensing Science and Technology</h4>
                  <p className="text-sm text-gray-500">Wuhan University | 2003.09 - 2008.06</p>
                </div>
              </div>
            </section>

            {/* 学术兼职 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Academic Services</h2>
              <div className="space-y-5">
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-700 mb-2">Editorial Roles</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Topical Editor for <i className="font-medium">Geoscientific Model Development</i>; Editorial Board Member for <i className="font-medium">Farming System</i>.
                  </p>
                </div>
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-700 mb-2">Journal Reviewer</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <i className="font-medium">Nature Climate Change</i>, <i className="font-medium">Nature Food</i>, <i className="font-medium">Nature Communications</i>, <i className="font-medium">Communications Earth & Environment</i>, <i className="font-medium">Geoscientific Model Development</i>, <i className="font-medium">Science of The Total Environment</i>, <i className="font-medium">Agricultural and Forest Meteorology</i>, <i className="font-medium">Climate Dynamics</i>, <i className="font-medium">Climatic Change</i>, and other international peer-reviewed journals.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </div>

      </div>
    </div>
  );
}