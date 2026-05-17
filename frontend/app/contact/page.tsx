import React from 'react';

export default function Contact() {
  return (
    // 添加 relative 和 overflow-hidden 以容纳背景丝带
    <div className="relative min-h-screen bg-gray-50 flex flex-col items-center pb-20 overflow-hidden">
      
      {/* ================= SVG 渐变定义 (隐藏) ================= */}
      <svg width="0" height="0" className="absolute w-0 h-0">
        <defs>
          {/* 主图标与发光丝带的渐变: 青色 -> 蓝色 -> 紫色 */}
          <linearGradient id="tech-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />  {/* Cyan-500 */}
            <stop offset="50%" stopColor="#3b82f6" /> {/* Blue-500 */}
            <stop offset="100%" stopColor="#8b5cf6" /> {/* Violet-500 */}
          </linearGradient>
          {/* 辅助丝带渐变: 蓝色 -> 紫红色 */}
          <linearGradient id="tech-gradient-alt" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />  {/* Blue-500 */}
            <stop offset="100%" stopColor="#d946ef" /> {/* Fuchsia-500 */}
          </linearGradient>
        </defs>
      </svg>

      {/* ================= 科技感背景丝带 ================= */}
      <div className="absolute top-[250px] left-0 w-full h-[800px] pointer-events-none z-0 opacity-40 md:opacity-60">
        <svg viewBox="0 0 1440 800" className="w-full h-full" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* 丝带 1：发光光晕层 */}
          <path d="M-100 400 C 300 100, 600 700, 1500 300" stroke="url(#tech-gradient)" strokeWidth="30" strokeLinecap="round" filter="blur(24px)" opacity="0.6"/>
          {/* 丝带 1：核心高亮锐线 */}
          <path d="M-100 400 C 300 100, 600 700, 1500 300" stroke="url(#tech-gradient)" strokeWidth="4" strokeLinecap="round"/>
          
          {/* 丝带 2：发光光晕层 */}
          <path d="M-100 450 C 400 200, 500 800, 1500 400" stroke="url(#tech-gradient-alt)" strokeWidth="20" strokeLinecap="round" filter="blur(16px)" opacity="0.4"/>
          {/* 丝带 2：细虚线科技感 */}
          <path d="M-100 450 C 400 200, 500 800, 1500 400" stroke="url(#tech-gradient-alt)" strokeWidth="2" strokeDasharray="8 8" strokeLinecap="round"/>
          
          {/* 丝带 3：远处背景微弱的曲线 */}
          <path d="M-100 300 C 200 500, 800 100, 1500 500" stroke="url(#tech-gradient)" strokeWidth="1" opacity="0.5"/>
        </svg>
      </div>

      {/* ================= 顶部 Hero 区域 ================= */}
      <div className="relative w-full h-[400px] flex items-center justify-center">
        {/* 背景图片 */}
        <img 
          src="/contact/contact2.jpg" 
          alt="Contact Background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* 深色渐变遮罩：改为带有微蓝/紫色的科技感遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-indigo-900/60"></div>
        
        {/* 标题文字 */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Contact Us
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-medium leading-relaxed">
            If you are interested in joining this highly interdisciplinary and international group, please contact Dr. Fan directly.
          </p>
        </div>
      </div>

      {/* ================= 核心信息卡片区域 ================= */}
      {/* 提升层级保证在丝带之上，加入 backdrop-blur 让背景丝带透过半透明产生毛玻璃效果 */}
      <div className="relative z-20 -mt-16 w-full max-w-5xl px-4 md:px-8">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/50 overflow-hidden flex flex-col md:flex-row">
          
          {/* 左侧：联系方式详情 */}
          <div className="bg-slate-50/80 w-full md:w-2/5 p-8 md:p-12 border-r border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>
            
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start group">
                <svg className="w-6 h-6 mt-1 flex-shrink-0 transition-transform group-hover:scale-110 duration-300" fill="none" stroke="url(#tech-gradient)" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="ml-4">
                  <p className="text-sm font-semibold text-gray-900">Email</p>
                  <a href="mailto:yuanchao.fan@sz.tsinghua.edu.cn" className="text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 transition-all">
                    yuanchao.fan@sz.tsinghua.edu.cn
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start group">
                <svg className="w-6 h-6 mt-1 flex-shrink-0 transition-transform group-hover:scale-110 duration-300" fill="none" stroke="url(#tech-gradient)" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="ml-4">
                  <p className="text-sm font-semibold text-gray-900">Phone</p>
                  <a href="tel:18026984060" className="text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 transition-all">
                    180 2698 4060
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start group">
                <svg className="w-6 h-6 mt-1 flex-shrink-0 transition-transform group-hover:scale-110 duration-300" fill="none" stroke="url(#tech-gradient)" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="ml-4">
                  <p className="text-sm font-semibold text-gray-900">Address</p>
                  <p className="text-gray-600 leading-relaxed mt-1">
                    2279 Lishui Road<br />
                    University Town, Tsinghua SIGS<br />
                    Building F, 304 & 415<br />
                    Shenzhen, Guangdong, 518071<br />
                    China
                  </p>
                  <a 
                    href="https://www.google.com/maps/place/%E6%B8%85%E5%8D%8E%E5%A4%A7%E5%AD%A6%E6%B7%B1%E5%9C%B3%E7%A0%94%E7%A9%B6%E7%94%9F%E9%99%A2F/@22.5923206,113.9699323,19z/data=!4m14!1m7!3m6!1s0x3403f28946a60645:0x4244adb2a8669d67!2z5riF5Y2O5aSn5a2m5rex5Zyz5Zu96ZmF56CU56m255Sf6Zmi!8m2!3d22.5909624!4d113.9699337!16s%2Fg%2F155ssfv8!3m5!1s0x3403f28ebeabfc4d:0xc597a2ecccad306d!8m2!3d22.5927894!4d113.9703939!16s%2Fg%2F1td27y1w?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                  >
                    View on Map &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧：在线留言表单 / 预约日历 */}
          <div className="w-full md:w-3/5 p-8 md:p-12 bg-white">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all shadow-sm" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all shadow-sm" placeholder="john@example.com" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Research Interest / Subject</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all shadow-sm" placeholder="e.g. PhD Application 2027" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all shadow-sm resize-none" placeholder="Briefly describe your background and interests..."></textarea>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                {/* 预约按钮 */}
                <a 
                  href="https://calendly.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 flex items-center transition-all group"
                >
                  <svg className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" fill="none" stroke="url(#tech-gradient)" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  Schedule a Meeting
                </a>
                
                {/* 提交按钮：渐变色 */}
                <button type="button" className="px-6 py-2.5 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5 transition-all">
                  Send Message
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}