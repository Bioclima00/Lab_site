import React from 'react';

export default function YidaYinProfile() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          
          {/* 左侧面板：太阳辐射与能量（明黄到阳橙） */}
          <div className="w-full md:w-1/3 bg-gradient-to-br from-yellow-600 via-amber-500 to-orange-500 text-white p-10 flex flex-col items-center md:items-start text-center md:text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-20 blur-3xl"></div>
            
            <div className="relative w-full max-w-[14rem] aspect-[14/18] rounded-2xl overflow-hidden border border-white/20 mb-8 shadow-2xl mx-auto md:mx-0 bg-white/10 backdrop-blur-sm z-10">
              <img src="/people/yida-yin.jpg" alt="Yida Yin" className="w-full h-full object-cover object-[50%_0%]" />
            </div>
            
            <h1 className="relative z-10 text-3xl font-bold tracking-tight mb-2">Yida Yin</h1>
            <p className="relative z-10 text-yellow-100 text-sm font-medium leading-relaxed mb-6">
              Master's Student<br/>i-Ecoclimatology Lab
            </p>

            <div className="relative z-10 w-full mt-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-yellow-100 mb-4 border-b border-yellow-300/50 pb-2">Research Interests</h3>
              <ul className="space-y-3 text-sm font-medium text-yellow-50">
                <li>Climate Change</li>
                <li>Energy Budget</li>
                <li>Solar Radiation</li>
                <li>CESM Modeling</li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-2/3 p-10 md:p-16">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Biography</h2>
              <div className="prose prose-slate max-w-none text-gray-600 leading-relaxed space-y-6">
                <p>Yida Yin is currently a second-year master's student at the Tsinghua Shenzhen International Graduate School, Institute of Environment & Ecology.</p>
                <p>His research primarily focuses on the energy budget and its impact on both local and global climate, which falls under the field of climatology. The climate model he uses is CESM2.2.0, published by NCAR, which forms the core of his research, including the interaction between land and the atmosphere.</p>
              </div>
            </section>
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Education</h2>
              <div className="space-y-6">
                <div className="border-l-2 border-yellow-400 pl-4 relative">
                  <div className="absolute w-2 h-2 bg-yellow-500 rounded-full -left-[5px] top-2 shadow-[0_0_0_4px_rgba(234,179,8,0.1)]"></div>
                  <h4 className="text-md font-bold text-gray-900">Master's student in Resource and Environment</h4>
                  <p className="text-sm text-gray-500">Tsinghua SIGS | 2023.09 - Present</p>
                </div>
                <div className="border-l-2 border-slate-200 pl-4 relative">
                  <div className="absolute w-2 h-2 bg-slate-400 rounded-full -left-[5px] top-2"></div>
                  <h4 className="text-md font-bold text-gray-900">B.E. in Telecommunication and Information Engineering</h4>
                  <p className="text-sm text-gray-500">Beijing University of Post and Telecommunications | 2019.09 - 2023.06</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}