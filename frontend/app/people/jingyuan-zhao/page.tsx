import React from 'react';

export default function JingyuanZhaoProfile() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          
          {/* 左侧面板：生物与能量（琥珀到橙黄） */}
          <div className="w-full md:w-1/3 bg-gradient-to-br from-blue-800 via-blue-800 to-blue-800 text-white p-10 flex flex-col items-center md:items-start text-center md:text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl"></div>
            
            <div className="relative w-full max-w-[14rem] aspect-[14/18] rounded-2xl overflow-hidden border border-white/20 mb-8 shadow-2xl mx-auto md:mx-0 bg-white/10 backdrop-blur-sm z-10">
              <img src="/people/jingyuan-zhao.jpg" alt="Jingyuan Zhao" className="w-full h-full object-cover object-[50%_0%]" />
            </div>
            
            <h1 className="relative z-10 text-3xl font-bold tracking-tight mb-2">Jingyuan Zhao</h1>
            <p className="relative z-10 text-amber-100 text-sm font-medium leading-relaxed mb-6">
              Master's Student<br/>i-Ecoclimatology Lab
            </p>

            <div className="relative z-10 flex space-x-4 mb-10 justify-center md:justify-start w-full">
              <a href="mailto:example@tsinghua.edu.cn" className="text-amber-200 hover:text-white transition-colors" title="Email">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </a>
            </div>

            <div className="relative z-10 w-full">
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-200 mb-4 border-b border-amber-500/50 pb-2">Research Interests</h3>
              <ul className="space-y-3 text-sm font-medium text-amber-50">
                <li>Climate Change</li>
                <li>Global Energy Balance</li>
                <li>Livestock Modeling</li>
                <li>Machine Learning</li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-2/3 p-10 md:p-16">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Biography</h2>
              <div className="prose prose-slate max-w-none text-gray-600 leading-relaxed space-y-6">
                <p>Jingyuan Zhao is currently a Master of Science at the Shenzhen Graduate School of Tsinghua University, where his research interests focus on mathematical-physical modeling and machine learning.</p>
                <p>Currently, he is working on modeling the energy balance of livestock and predicting the impact of climate on livestock.</p>
              </div>
            </section>
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Education</h2>
              <div className="space-y-6">
                <div className="border-l-2 border-amber-300 pl-4 relative">
                  <div className="absolute w-2 h-2 bg-amber-500 rounded-full -left-[5px] top-2 shadow-[0_0_0_4px_rgba(245,158,11,0.1)]"></div>
                  <h4 className="text-md font-bold text-gray-900">Master's student in Resource and Environment</h4>
                  <p className="text-sm text-gray-500">Tsinghua SIGS | 2024.09 - Present</p>
                </div>
                <div className="border-l-2 border-slate-200 pl-4 relative">
                  <div className="absolute w-2 h-2 bg-slate-400 rounded-full -left-[5px] top-2"></div>
                  <h4 className="text-md font-bold text-gray-900">B.S. in Environmental Sciences</h4>
                  <p className="text-sm text-gray-500">Guangzhou University | 2019.09 - 2023.06</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}