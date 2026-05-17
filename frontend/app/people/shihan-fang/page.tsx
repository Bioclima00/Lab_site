import React from 'react';

export default function ShihanFangProfile() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          
          {/* 左侧面板：森林与碳汇（深祖母绿到青色） */}
          <div className="w-full md:w-1/3 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 text-white p-10 flex flex-col items-center md:items-start text-center md:text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl"></div>
            
            <div className="relative w-full max-w-[14rem] aspect-[14/18] rounded-2xl overflow-hidden border border-white/20 mb-8 shadow-2xl mx-auto md:mx-0 bg-white/10 backdrop-blur-sm z-10">
              <img src="/people/shihan-fang.jpg" alt="Shihan Fang" className="w-full h-full object-cover object-[50%_0%]" />
            </div>
            
            <h1 className="relative z-10 text-3xl font-bold tracking-tight mb-2">Shihan Fang</h1>
            <p className="relative z-10 text-emerald-100 text-sm font-medium leading-relaxed mb-6">
              Master's Student<br/>i-Ecoclimatology Lab
            </p>

            <div className="relative z-10 w-full mt-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-200 mb-4 border-b border-emerald-500/50 pb-2">Research Interests</h3>
              <ul className="space-y-3 text-sm font-medium text-emerald-50">
                <li>Climate Change Mitigation</li>
                <li>Forest Conservation Financing</li>
                <li>Decarbonisation Technology</li>
                <li>Carbon Credits & Policy</li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-2/3 p-10 md:p-16">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Biography</h2>
              <div className="prose prose-slate max-w-none text-gray-600 leading-relaxed space-y-6">
                <p>Shihan Fang is a Singaporean Master’s student at the Institute of Environment and Ecology (iEE) in Tsinghua Shenzhen International Graduate School. Prior to Tsinghua, she was a journalist and podcaster covering climate innovation in Asia.</p>
                <p>Her research interests lie at the intersection between climate science, climate technology, and climate mitigation policy. Some focus areas include forest conservation policy, direct air carbon capture and storage, and carbon financing.</p>
              </div>
            </section>
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Education</h2>
              <div className="space-y-6">
                <div className="border-l-2 border-emerald-300 pl-4 relative">
                  <div className="absolute w-2 h-2 bg-emerald-600 rounded-full -left-[5px] top-2 shadow-[0_0_0_4px_rgba(5,150,105,0.1)]"></div>
                  <h4 className="text-md font-bold text-gray-900">Master's student in Environmental Science</h4>
                  <p className="text-sm text-gray-500">Tsinghua SIGS | 2024.09 - Present</p>
                </div>
                <div className="border-l-2 border-slate-200 pl-4 relative">
                  <div className="absolute w-2 h-2 bg-slate-400 rounded-full -left-[5px] top-2"></div>
                  <h4 className="text-md font-bold text-gray-900">B.A. in Political Science (Minor in Religious Studies)</h4>
                  <p className="text-sm text-gray-500">National University of Singapore | 2005.08 - 2010.02</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}