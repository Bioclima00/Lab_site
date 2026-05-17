import React from 'react';

export default function SongTanProfile() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          
          {/* 左侧面板：生态水文（深青到靛蓝） */}
          <div className="w-full md:w-1/3 bg-gradient-to-br from-cyan-800 via-blue-700 to-indigo-800 text-white p-10 flex flex-col items-center md:items-start text-center md:text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl"></div>
            
            <div className="relative w-full max-w-[14rem] aspect-[14/18] rounded-2xl overflow-hidden border border-white/20 mb-8 shadow-2xl mx-auto md:mx-0 bg-white/10 backdrop-blur-sm z-10">
              <img src="/people/song-tan.jpg" alt="Song Tan" className="w-full h-full object-cover object-[50%_0%]" />
            </div>
            
            <h1 className="relative z-10 text-3xl font-bold tracking-tight mb-2">Song Tan</h1>
            <p className="relative z-10 text-blue-100 text-sm font-medium leading-relaxed mb-6">
              Master's Student<br/>i-Ecoclimatology Lab
            </p>

            <div className="relative z-10 w-full mt-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-200 mb-4 border-b border-blue-500/50 pb-2">Research Interests</h3>
              <ul className="space-y-3 text-sm font-medium text-blue-50">
                <li>Ecological Hydrology</li>
                <li>Sustainable Water Resource Management</li>
                <li>Soil-Water Interactions</li>
                <li>Carbon-Water-Energy Coupling</li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-2/3 p-10 md:p-16">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Biography</h2>
              <div className="prose prose-slate max-w-none text-gray-600 leading-relaxed space-y-6">
                <p>Song Tan is a master’s student in Environmental Science and Engineering at the Shenzhen International Graduate School of Tsinghua University. His research focuses on ecological hydrology and sustainable water resource management.</p>
                <p>Under the supervision of Professor Yuanchao Fan, he employs advanced modeling techniques, satellite remote sensing, and field studies to investigate water-soil-ecosystem interactions and the impacts of climate change on hydrological processes.</p>
              </div>
            </section>
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Education</h2>
              <div className="space-y-6">
                <div className="border-l-2 border-blue-300 pl-4 relative">
                  <div className="absolute w-2 h-2 bg-blue-600 rounded-full -left-[5px] top-2 shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"></div>
                  <h4 className="text-md font-bold text-gray-900">Master's student in Environmental Science & Eng (Dual Master’s Program)</h4>
                  <p className="text-sm text-gray-500">Tsinghua University – Kanazawa University | 2023.09 - Present</p>
                </div>
                <div className="border-l-2 border-slate-200 pl-4 relative">
                  <div className="absolute w-2 h-2 bg-slate-400 rounded-full -left-[5px] top-2"></div>
                  <h4 className="text-md font-bold text-gray-900">B.E. in Aircraft Design and Engineering (Minor in Mathematics)</h4>
                  <p className="text-sm text-gray-500">Beihang University | 2019.09 - 2023.06</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}