import React from 'react';

export default function SolarGeoengineeringEvent() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <article className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        
        <div className="bg-gradient-to-r from-blue-900 to-sky-700 p-10 md:p-16 text-white">
          <div className="flex space-x-2 mb-4">
            <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Climate</span>
            <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Geoengineering</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            Model shows solar geoengineering may be surprisingly effective in alleviating impacts of global warming on crops
          </h1>
          <p className="text-sky-100 text-lg font-medium">
            Research offers better understanding of solar geoengineering’s effect on agriculture.
          </p>
          <div className="mt-8 text-sm text-sky-200 flex items-center">
            <span>Published: May 20, 2021</span>
          </div>
        </div>

        <div className="p-10 md:p-16 prose prose-lg prose-slate max-w-none">
          {/* ✅ 新增：在正文顶部优雅地插入了你提供的 featured.jpg */}
          <img 
            src="/events/solar-geoengineering-20210520/featured.jpg" 
            alt="Solar geoengineering illustration" 
            className="w-full rounded-2xl shadow-md mb-10 object-cover" 
          />

          <p className="lead text-xl text-gray-600 font-medium mb-8">
            Solar geoengineering — putting aerosols into the atmosphere to reflect sunlight and reduce global warming — is not a fix-all for climate change but it could be one of several tools to manage climate risks. A growing body of research has explored the ability of solar geoengineering to reduce physical climate changes. But much less is known about how solar geoengineering could affect the ecosystem and, particularly, agriculture.
          </p>

          <p>
            Now, research from the Harvard John A. Paulson School of Engineering and Applied Sciences (SEAS) finds that solar geoengineering may be surprisingly effective in alleviating some of the worst impacts of global warming on crops.
          </p>

          <p>
            The research, a collaboration with the Norwegian Research Centre and the Bjerknes Centre for Climate Research, the Norwegian University of Science and Technology, the National Center for Atmospheric Research in Boulder, Seoul National University, and the Chinese Academy of Sciences, is published in <i className="font-semibold text-gray-900">Nature Food</i>.
          </p>

          <blockquote className="border-l-4 border-blue-600 bg-blue-50 p-6 rounded-r-xl my-8 italic text-gray-700">
            “Research on solar geoengineering must address whether or not it is effective at reducing human impacts of climate change. Our paper helps fill that gap by using the best crop model yet embedded in a climate model to examine the potential impact of solar geoengineering on agricultural yields.”
            <footer className="mt-2 text-sm font-bold text-gray-900 not-italic">— David Keith, Professor of Applied Physics at SEAS and Professor of Public Policy at the Harvard Kennedy School</footer>
          </blockquote>

          <p>
            The team looked at three types of solar geoengineering — stratospheric aerosol injection, marine sky brightening, and cirrus cloud thinning — and their impact on the global yield of maize, sugarcane, wheat, rice, soy, and cotton in a business-as-usual future where emissions continue at their current levels.
          </p>

          <p>
            In such a future, the most effective way to protect crops against the worst effects of global climate change is to reduce the surface temperature. The researchers found that all three potential solar geoengineering methods have a strong cooling effect that would benefit crop yields.
          </p>

          <p>
            Previous research suggested that cooling temperatures brought on by stratospheric aerosol injection may also lead to less rainfall, which could result in yield loss for rainfed crops. But these studies didn’t look at one of the most important ecological factors in crop transpiration and productivity — humidity.
          </p>

          <blockquote className="border-l-4 border-emerald-600 bg-emerald-50 p-6 rounded-r-xl my-8 italic text-gray-700">
            “Relative humidity or vapor pressure deficit has stronger control on plant water use and crop productivity than precipitation. We found that in a cooler world under multiple scenarios, except cirrus cloud thinning, there will be higher relative humidity, which will alleviate water stress for rainfed crops. Our model shows that the change in precipitation resulting from all three solar geoengineering methods would, in fact, have very little effect on crops.”
            <footer className="mt-2 text-sm font-bold text-gray-900 not-italic">— Yuanchao Fan, Fellow in the Harvard Solar Geoengineering Research Program and first author of the paper</footer>
          </blockquote>

          <p>
            The researchers compared how agricultural productivity is affected by solar geoengineering and emissions reductions. The researchers found that while emissions reductions have strong cooling and humidity benefits, they may have a smaller benefit for crop yields than solar geoengineering because the reduction of CO2 fertilization reduces the productivity of most crops compared with solar geoengineering that achieves the same temperature reduction. The finding highlights the need to combine emissions reductions with other tools, including increasing the use of nitrogen fertilization and changes to land use.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Climate risks cannot be resolved with any single tool</h3>
          <p>
            “Even if emissions were eliminated tomorrow, the world’s most vulnerable will still suffer from climate change,” said Keith. “Policymakers need to consider how emissions cuts might be supplemented by specific local adaptations to help farmers reduce the impacts of climate on agriculture, and by global actions such as carbon removal and solar geoengineering.”
          </p>

          <p className="text-sm text-gray-500 mt-8">
            <em>The research was co-authored by Jerry Tjiputra, Helene Muri, Danica Lombardozzi, Chang-Eui Park, and Shengjun Wu. The research was supported in part by Harvard University’s Solar Geoengineering Research Program.</em>
          </p>

          <hr className="my-8" />
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://www.nature.com/articles/s43016-021-00278-w" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-colors">
              Read Paper on Nature Food
            </a>
            <a href="https://seas.harvard.edu/news/2021/05/model-shows-solar-geoengineering-may-be-surprisingly-effective-alleviating-impacts" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-colors">
              Read Original Press Release
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}