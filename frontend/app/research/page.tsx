"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ResearchPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 轮播图数据配置 - 彻底去除了AI味的冒号前缀和标号，采用极简短句
  const slides = [
    {
      id: 0,
      title: "Lab Aims & Applications",
      image: "/research/welcome.jpg",
      hasOverlay: true,
      overlayClass: "bg-black/55",
      contentPosition: "items-start text-left",
      points: [
        "Decipher land-atmosphere interactions and global ecosystem dynamics.",
        "Develop cutting-edge models for material and energy budget flows.",
        "Quantify climate risks on ecosystem resilience and human health.",
        "Evaluate innovative natural and technology-based mitigation strategies."
      ],
    },
    {
      id: 1,
      title: "Research Directions",
      image: "/research/teamstruc.jpg",
      hasOverlay: false, 
      // 第二张：去除了所有 01, 02 序号，更加干净
      gridPoints: [
        { label: "Water & Climate", text: "Modeling precipitation, soil moisture, and ecohydrological feedbacks." },
        { label: "Ecosystem & Climate", text: "Simulating global terrestrial carbon sinks and vegetation dynamics." },
        { label: "Impacts & Mitigation", text: "Assessing severe urban heat stress and geoengineering solutions." },
        { label: "Core Tools & Models", text: "Integrating Earth System Models (CESM, WRF) with deep learning." }
      ]
    },
    {
      id: 2,
      title: "Join Our Team",
      image: "/research/rec.jpg",
      hasOverlay: true,
      overlayClass: "bg-black/65",
      contentPosition: "items-end text-right",
      points: [
        "A dynamic, international, and highly collaborative environment.",
        "Actively seeking passionate Master's and Ph.D. candidates.",
        "Ideal for backgrounds in Ecology, Geoscience, Atmospheric Science, Physics, Math, or CS.",
        "Seeking self-motivated researchers eager to tackle groundbreaking climate issues."
      ],
      button: {
        text: "Join Us",
        link: "/contact"
      }
    }
  ];

  // 12秒切换，极慢轮播
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 12000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white">
      
      {/* 轮播图主体 */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        
        // 💡 针对第二张流程图幻灯片，大幅减少留白，将卡片向上提拉
        if (slide.id === 1) {
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out flex flex-col bg-white ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* 上半部分：比例缩小到 50%，图片沉底对齐，消除多余空白 */}
              <div className="h-[50%] w-full flex items-end justify-center p-6 pb-2 bg-white">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              
              {/* 下半部分：比例设为 50%，内容向上对齐 (justify-start)，减少与上方图片的割裂感 */}
              <div className="h-[50%] bg-slate-50/50 border-t border-slate-100 p-8 flex flex-col items-center justify-start pt-8">
                <h2 className="text-2xl font-extrabold text-gray-950 mb-6 tracking-wider">
                  {slide.title}
                </h2>
                
                {/* 干净的无序号网格卡片 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl w-full text-left">
                  {slide.gridPoints?.map((pt, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                      <span className="font-bold text-cyan-700 block mb-2 tracking-wide text-sm">
                        {pt.label}
                      </span>
                      <p className="text-gray-500 text-sm leading-relaxed tracking-wide">
                        {pt.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        }

        // 💡 第一张和第三张传统的全屏海报排版
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <img src={slide.image} alt={slide.title} className="absolute inset-0 w-full h-full object-cover" />
            {slide.hasOverlay && <div className={`absolute inset-0 ${slide.overlayClass}`}></div>}

            {/* 文字包裹区 */}
            <div className="absolute inset-0 flex flex-col justify-center max-w-6xl mx-auto px-8 md:px-16 w-full h-full">
              <div className={`flex flex-col w-full ${slide.contentPosition}`}>
                
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-wider text-white drop-shadow-lg mb-10">
                  {slide.title}
                </h1>
                
                {/* ✅ 极简排版：去掉蓝点，使用左侧极细半透明边框，营造高级的排版美感 */}
                <div className="max-w-2xl space-y-6 text-white/95 text-lg md:text-xl font-medium tracking-wide leading-relaxed drop-shadow-md mb-12">
                  {slide.points?.map((point, i) => (
                    <p key={i} className={`border-white/30 py-1 ${slide.contentPosition.includes('text-right') ? 'border-r-2 pr-5' : 'border-l-2 pl-5'}`}>
                      {point}
                    </p>
                  ))}
                </div>
                
                {/* 招募按钮 */}
                {slide.button && (
                  <Link
                    href={slide.button.link}
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-gray-900 bg-white rounded-full hover:bg-gray-100 transition-colors shadow-xl tracking-wide transform hover:scale-105 duration-200"
                  >
                    <svg className="w-5 h-5 mr-2 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                    {slide.button.text}
                  </Link>
                )}

              </div>
            </div>
          </div>
        );
      })}

      {/* 左右切换小箭头 */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/15 text-white hover:bg-black/40 transition-colors backdrop-blur-sm border border-white/10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/15 text-white hover:bg-black/40 transition-colors backdrop-blur-sm border border-white/10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
      </button>

      {/* 底部小圆点指示器 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-cyan-500 scale-125 shadow-sm" : "bg-gray-300/70 hover:bg-gray-400"
            }`}
          ></button>
        ))}
      </div>

    </div>
  );
}