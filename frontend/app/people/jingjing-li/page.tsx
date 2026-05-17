import React from 'react';

export default function JingjingLiProfile() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          
          {/* 左侧面板：热应激与社会不平等（深玫瑰到灰褐） */}
          <div className="w-full md:w-1/3 bg-gradient-to-br from-rose-800 via-red-900 to-stone-800 text-white p-10 flex flex-col items-center md:items-start text-center md:text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl"></div>
            
            <div className="relative w-full max-w-[14rem] aspect-[14/18] rounded-2xl overflow-hidden border border-white/20 mb-8 shadow-2xl mx-auto md:mx-0 bg-white/10 backdrop-blur-sm z-10">
              <img src="/people/jingjing-li.jpg" alt="Jingjing Li" className="w-full h-full object-cover object-[50%_0%]" />
            </div>
            
            <h1 className="relative z-10 text-3xl font-bold tracking-tight mb-2">Jingjing Li</h1>
            <p className="relative z-10 text-rose-200 text-sm font-medium leading-relaxed mb-6">
              Master's Student<br/>i-Ecoclimatology Lab
            </p>

            <div className="relative z-10 flex space-x-4 mb-10 justify-center md:justify-start w-full">
              <a href="mailto:example@tsinghua.edu.cn" className="text-rose-300 hover:text-white transition-colors" title="Email">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </a>
            </div>

            <div className="relative z-10 w-full mt-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-rose-300 mb-4 border-b border-rose-500/50 pb-2">Research Interests</h3>
              <ul className="space-y-3 text-sm font-medium text-rose-50">
                <li>Heat Adaptation Inequality</li>
                <li>Global Heat-Stress Losses</li>
                <li>Climate Inequality</li>
                <li>Energy-Mediated Mechanisms</li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-2/3 p-10 md:p-16">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Biography</h2>
              <div className="prose prose-slate max-w-none text-gray-600 leading-relaxed space-y-6">
                <p>Jingjing Li is a Master's student in Resources and Environment at Tsinghua Shenzhen International Graduate School. Her research focuses on the hidden inequalities in heat adaptation, specifically quantifying the global transfer of heat-stress losses based on energy-mediated protective mechanisms.</p>
                <p>This study aims to develop an integrated analytical framework linking physical heat risk, actual losses, adaptive capacity, and climate inequality. It seeks to reveal the mechanism by which developed countries mitigate heat-stress-related losses through energy consumption, while less developed countries, constrained by insufficient adaptive capacity, are forced to bear greater health and labor productivity losses.</p>
              </div>
            </section>
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Education</h2>
              <div className="space-y-6">
                <div className="border-l-2 border-red-400 pl-4 relative">
                  <div className="absolute w-2 h-2 bg-red-600 rounded-full -left-[5px] top-2 shadow-[0_0_0_4px_rgba(220,38,38,0.1)]"></div>
                  <h4 className="text-md font-bold text-gray-900">Master's student in Resources and Environment</h4>
                  <p className="text-sm text-gray-500">Tsinghua SIGS | 2025.09 - Present</p>
                </div>
                <div className="border-l-2 border-slate-200 pl-4 relative">
                  <div className="absolute w-2 h-2 bg-slate-400 rounded-full -left-[5px] top-2"></div>
                  <h4 className="text-md font-bold text-gray-900">Bachelor in International Economics and Trade</h4>
                  <p className="text-sm text-gray-500">Xi’an University of Posts and Telecommunications | 2016.09 - 2020.07</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}