import React from 'react';

export default function DeadlyHeatHarvardEvent() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <article className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        
        <div className="bg-gradient-to-r from-orange-800 to-red-700 p-10 md:p-16 text-white">
          <div className="flex space-x-2 mb-4">
            <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Climate</span>
            <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Heatwaves</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            Deadly heat coming for healthy people — Harvard research
          </h1>
          <div className="mt-8 text-sm text-red-100 flex items-center">
            <span>Published: December 12, 2024</span>
          </div>
        </div>

        <div className="p-10 md:p-16 prose prose-lg prose-slate max-w-none">
          {/* ✅ 新增：在正文顶部优雅地插入了你提供的 featured1.jpg */}
          <img 
            src="/events/deadly-heat-harvard-20241212/featured1.jpg" 
            alt="Deadly heat impacts" 
            className="w-full rounded-2xl shadow-md mb-10 object-cover" 
          />

          <p className="lead text-xl text-gray-600 font-medium mb-8">
            Venturing outdoors during heatwaves may become deadly for millions of people in a world only slightly warmer than today’s, according to new research that considers the effect of solar radiation, wind, and other factors on the human body.
          </p>

          <p>
            The Harvard University researchers look at “uncompensable heat” — heat stress so severe that even a fit, healthy, hydrated person cannot tolerate it for long. Previous studies largely ignored the effects of sunlight and radiation on heat stress, assuming people can move indoors to avoid heat. But many people don’t have that luxury. And conditions indoors, where airflow is often reduced, can be even more dangerous, they find.
          </p>

          <p>
            The research, published Dec. 12 in the journal <i className="font-semibold text-gray-900">Communications Earth & Environment</i>, is authored by <strong>Yuanchao Fan</strong>, a 2019-2022 fellow at Harvard University Center for the Environment who is now an assistant professor at Tsinghua University Shenzhen International Graduate School, and <strong>Kaighin McColl</strong>, assistant professor of Earth and planetary sciences and of environmental science and engineering at Harvard.
          </p>

          <p>
            It is well-known that heatwaves are increasingly deadly. But whereas previous research has examined human thresholds for humidity and heat, Fan and McColl expand their model to include the impact of solar radiation.
          </p>

          <blockquote className="border-l-4 border-orange-500 bg-orange-50 p-6 rounded-r-xl my-8 italic text-gray-700">
            “We incorporated radiative and other effects into a relatively simple model of the human-energy balance and used it to develop future heat stress projections that are considerably more severe than those based on prior approaches. Sunlight and other radiation, which has been largely ignored in earlier work, turns out to be really important.”
            <footer className="mt-2 text-sm font-bold text-gray-900 not-italic">— Kaighin McColl</footer>
          </blockquote>

          <p>
            In a world 2 degrees Celsius warmer than the pre-industrial average, they find that 24 million farmers would face about eight days of uncompensable heat stress yearly — mostly in North Africa, South and Southeast Asia, Australia, and South America. With 4 degrees of warming, that figure jumps to 127 million farmers impacted for about 14 days per year. Turning to the estimated 700 million people who must walk outdoors for more than 30 minutes a day to collect drinking water, the authors find 24 million and 164 million impacted under those same warming scenarios, respectively.
          </p>

          <p>
            “Outdoor work would need to be completed at night or in the early morning during these times, disrupting access to drinking water and farming cycles,” McColl said.
          </p>

          <p>
            But the hazards extend into the shade. Fan and McColl’s model projects the risk of uncompensable heat stress to a person standing under a tree is more than six times higher than estimated by previous studies that ignore radiation. Indoor spaces can also be risky due to reduced airflow.
          </p>

          <blockquote className="border-l-4 border-red-600 bg-red-50 p-6 rounded-r-xl my-8 italic text-gray-700">
            “Climate researchers often rely on heat-stress metrics that focus on weather conditions, while medical researchers study individual responses to heat. Our model bridges this gap, combining both approaches to better assess risks under any climate condition.”
            <footer className="mt-2 text-sm font-bold text-gray-900 not-italic">— Yuanchao Fan</footer>
          </blockquote>

          <hr className="my-8" />
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://www.nature.com/articles/s43247-024-01930-6" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-orange-600 hover:bg-orange-700 transition-colors">
              Read Paper on Nature
            </a>
            <a href="https://news.harvard.edu/gazette/story/newsplus/deadly-heat-coming-for-healthy-people-harvard-research/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-colors">
              Harvard Gazette Original
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}