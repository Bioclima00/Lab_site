import React from 'react';

export default function FenLiuProfile() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          
          {/* 左侧面板：农业与农作物（麦黄到青绿） */}
          <div className="w-full md:w-1/3 bg-gradient-to-br from-yellow-500 via-green-600 to-teal-800 text-white p-10 flex flex-col items-center md:items-start text-center md:text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-20 blur-3xl"></div>
            
            <div className="relative w-full max-w-[14rem] aspect-[14/18] rounded-2xl overflow-hidden border border-white/20 mb-8 shadow-2xl mx-auto md:mx-0 bg-white/10 backdrop-blur-sm z-10">
              <img src="/people/fen-liu.jpg" alt="Fen Liu" className="w-full h-full object-cover object-[50%_0%]" />
            </div>
            
            <h1 className="relative z-10 text-3xl font-bold tracking-tight mb-2">Fen Liu</h1>
            <p className="relative z-10 text-green-100 text-sm font-medium leading-relaxed mb-6">
              Master's Student<br/>i-Ecoclimatology Lab
            </p>

            <div className="relative z-10 flex space-x-4 mb-10 justify-center md:justify-start w-full">
              <a href="mailto:example@tsinghua.edu.cn" className="text-green-200 hover:text-white transition-colors" title="Email">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </a>
            </div>

            <div className="relative z-10 w-full mt-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-green-200 mb-4 border-b border-green-500/50 pb-2">Research Interests</h3>
              <ul className="space-y-3 text-sm font-medium text-green-50">
                <li>Climate Change Impacts</li>
                <li>Crop Yield Modeling</li>
                <li>Future Climate Scenarios</li>
                <li>Agricultural Ecology</li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-2/3 p-10 md:p-16">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Biography</h2>
              <div className="prose prose-slate max-w-none text-gray-600 leading-relaxed space-y-6">
                <p>Fen Liu is a Master's student in Resources and Environment at the Tsinghua Shenzhen International Graduate School, joining the lab in September 2025.</p>
                <p>Her research topic is centered on agricultural ecology, specifically investigating the impact of climate change on the yields of three major staple crops: maize, rice, and winter wheat, under various future climate scenarios.</p>
              </div>
            </section>
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Education</h2>
              <div className="space-y-6">
                <div className="border-l-2 border-green-400 pl-4 relative">
                  <div className="absolute w-2 h-2 bg-green-600 rounded-full -left-[5px] top-2 shadow-[0_0_0_4px_rgba(22,163,74,0.1)]"></div>
                  <h4 className="text-md font-bold text-gray-900">Master's student in Resources and Environment</h4>
                  <p className="text-sm text-gray-500">Tsinghua SIGS | 2025.09 - Present</p>
                </div>
                <div className="border-l-2 border-slate-200 pl-4 relative">
                  <div className="absolute w-2 h-2 bg-slate-400 rounded-full -left-[5px] top-2"></div>
                  <h4 className="text-md font-bold text-gray-900">B.S. in Environmental Science</h4>
                  <p className="text-sm text-gray-500">Sichuan Agricultural University | 2021.09 - 2025.06</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}