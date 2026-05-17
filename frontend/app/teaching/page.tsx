import React from 'react';

// 课程数据集中管理，方便以后随时添加或修改
const coursesData = [
  {
    id: 1,
    title: "Introductory Ecological Climatology",
    creditHours: 48,
    location: "SIGS",
    isParallel: false,
    themeColor: "emerald",
  },
  {
    id: 2,
    title: "Energy and the Atmospheric Environment",
    creditHours: 16,
    location: "SIGS",
    isParallel: false,
    themeColor: "blue",
  },
  {
    id: 3,
    title: "Techniques for Assessing and Improving the Ecosystem Carbon Sink",
    creditHours: 32,
    location: "SIGS",
    isParallel: true,
    themeColor: "indigo",
  }
];

export default function TeachingPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        
        {/* 页面头部：渐变背景与标题 */}
        <div className="bg-gradient-to-r from-teal-800 to-cyan-700 p-10 md:p-16 text-white relative overflow-hidden">
          {/* 背景装饰光晕 */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl"></div>
          
          <h1 className="relative z-10 text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">
            Teaching & Courses
          </h1>
          <p className="relative z-10 text-cyan-100 text-lg font-medium max-w-2xl">
            Current courses offered by the i-Ecoclimatology Lab for graduate and parallel programs.
          </p>
          <div className="relative z-10 mt-8 text-sm text-cyan-200 flex items-center">
            <span>Last Updated: December 30, 2024</span>
          </div>
        </div>

        {/* 课程列表区域 */}
        <div className="p-10 md:p-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight border-b-2 border-gray-100 pb-4">
            Current Courses
          </h2>

          <div className="space-y-6">
            {coursesData.map((course) => (
              <div 
                key={course.id} 
                className="group relative flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                {/* 左侧动态颜色指示条 */}
                <div className={`absolute left-0 top-0 bottom-0 w-2 bg-${course.themeColor}-500 group-hover:w-3 transition-all duration-300`}></div>
                
                <div className="pl-4 md:pl-6 flex-1">
                  {/* 课程标题 */}
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-cyan-700 transition-colors mb-2 pr-4">
                    {course.title}
                  </h3>
                  
                  {/* 课程元数据 (学时 & 地点) */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 font-medium">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      {course.creditHours} credit hours
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                      {course.location}
                    </div>
                  </div>
                </div>

                {/* 右侧特殊徽章 (如果是清华平行课程) */}
                {course.isParallel && (
                  <div className="mt-4 md:mt-0 ml-4 md:ml-6 flex-shrink-0">
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
                      <svg className="w-3.5 h-3.5 mr-1.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      Tsinghua Parallel Course
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}