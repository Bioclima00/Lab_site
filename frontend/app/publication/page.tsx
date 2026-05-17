import React from 'react';

// 📋 实验室发表论文数据库
// 以后有新文章，只需要在这里最上面加一段 {} 即可，页面会自动渲染！
const publicationsData = [

  {
    id: "pub-2025-1",
    year: "2025",
    title: "Plant phenology evaluation of CRESCENDO land surface models using satellite-derived Leaf Area Index – Part 2: Seasonal trough, peak, and amplitude",
    authors: "Peano, D., Hemming, D., Delire, C., Fan, Y., Lee, H., Materia, S., Nabel, J. E. M. S., Park, T., Wårlind, D., Wiltshire, A., Zaehle, S.",
    journal: "Biogeosciences",
    volume: "22, 7117–7135",
    doiLink: "https://doi.org/10.5194/bg-22-7117-2025"
  },
  {
    id: "pub-2025-3",
    year: "2025",
    title: "Divergent impacts of climate interventions on China’s north-south water divide",
    authors: "Zhang, X., Fan, Y., Tjiputra, J., Muri, H., Chen, Q.",
    journal: "Communications Earth & Environment",
    volume: "6(1), 736",
    doiLink: "https://www.nature.com/articles/s43247-025-02708-0"
  },
  {
    id: "pub-2025-2",
    year: "2025",
    title: "The interaction of solar radiation modification with Earth system tipping elements",
    authors: "Futerman, G., Adhikari, M., Duffey, A., Fan, Y., Gurevitch, J., Irvine, P., Wieners, C.",
    journal: "Earth System Dynamics",
    volume: "16(4), 939–978",
    doiLink: "https://doi.org/10.5194/esd-16-939-2025"
  },
  {
    id: "pub-2024-1",
    year: "2024",
    title: "Widespread outdoor exposure to uncompensable heat stress with warming",
    authors: "Fan, Y. * & McColl, K. A.",
    journal: "Communications Earth & Environment",
    volume: "5, 1–13",
    doiLink: "https://doi.org/10.1038/s43247-024-01930-6"
  },
  {
    id: "pub-2023-1",
    year: "2023",
    title: "Unequal effects of climate intervention on agriculture",
    authors: "Fan, Y. *",
    journal: "Nature Food",
    volume: "4, 835–836",
    doiLink: "https://doi.org/10.1038/s43016-023-00854-4"
  },
  {
    id: "pub-2022-1",
    year: "2022",
    title: "Implementing a rubber plant functional type in the Community Land Model (CLM5) improves the accuracy of carbon and water flux estimation",
    authors: "Ali, A.A.*, Fan, Y. (equal contribution), Corre, M.D., Kotowska, M.M., et al.",
    journal: "Land",
    volume: "11, 183",
    doiLink: "https://doi.org/10.3390/land11020183"
  },
  {
    id: "pub-2021-1",
    year: "2021",
    title: "Solar geoengineering can alleviate climate change pressures on crop yields",
    authors: "Fan, Y. *, Tjiputra, J., Muri, H., Lombardozzi, D., Park, C.-E., Wu, S., Keith, D.",
    journal: "Nature Food",
    volume: "2, 373–381",
    doiLink: "https://doi.org/10.1038/s43016-021-00278-w",
    note: "Featured in News & Views, and in the media: Harvard University; NCAR; Sigma2"
  },
  {
    id: "pub-2019-1",
    year: "2019",
    title: "Inequal responses of drylands to radiative forcing geoengineering methods",
    authors: "Park, C., Jeong, S., Fan, Y. *, Tjiputra, J., Muri, H., Zheng, C. *",
    journal: "Geophysical Research Letters",
    volume: "46 (23), 14011–14020",
    doiLink: "https://doi.org/10.1029/2019GL084210"
  },
  {
    id: "pub-2019-2",
    year: "2019",
    title: "Reconciling canopy interception parameterization and rainfall forcing frequency in CLM for simulating evapotranspiration of rainforests and oil palm plantations in Indonesia",
    authors: "Fan, Y. *, Meijide, A., Lawrence, D., Roupsard, O., Calson, K., Chen, H-Y., Röll, A., Niu, F., Knohl, A.",
    journal: "Journal of Advances in Modeling Earth Systems",
    volume: "11(3), 732–751",
    doiLink: "https://doi.org/10.1029/2018MS001476"
  },
  {
    id: "pub-2019-3",
    year: "2019",
    title: "El Niño–Southern Oscillation (ENSO) event reduces uptake of an Indonesian oil palm plantation",
    authors: "Stiegler, C., Meijide, A., Fan, Y., Ali, A. A., June, T., Knohl, A.",
    journal: "Biogeosciences",
    volume: "16 (14), 2873–2890",
    doiLink: "https://doi.org/10.5194/bg-16-2873-2019"
  },
  {
    id: "pub-2017-1",
    year: "2017",
    title: "Controls of water and energy fluxes in oil palm plantations: Environmental variables and oil palm age",
    authors: "Meijide, A., Röll, A., Fan, Y., Herbst, M., Niu, F., Tiedemann, F., June, T., Rauf, A., Hölscher, D., Knohl, A.",
    journal: "Agricultural and Forest Meteorology",
    volume: "239, 71–85",
    doiLink: "https://doi.org/10.1016/j.agrformet.2017.02.034"
  },
  {
    id: "pub-2015-1",
    year: "2015",
    title: "A sub-canopy structure for simulating oil palm in the Community Land Model (CLM-Palm): phenology, allocation and yield",
    authors: "Fan, Y. *, Roupsard, O., Bernoux, M., Le Maire, G., Panferov, O., Kotowska, M. M., Knohl, A.",
    journal: "Geoscientific Model Development",
    volume: "8(11), 3785–3800",
    doiLink: "https://doi.org/10.5194/gmd-8-3785-2015"
  },
  {
    id: "pub-2014-1",
    year: "2014",
    title: "A sun–crown–sensor model and adapted C-correction logic for topographic correction of high resolution forest imagery",
    authors: "Fan, Y., Koukal, T., Weisberg, P. J.",
    journal: "ISPRS Journal of Photogrammetry and Remote Sensing",
    volume: "96, 94–105",
    doiLink: "https://doi.org/10.1016/j.isprsjprs.2014.07.006"
  },
  {
    id: "pub-2014-2",
    year: "2014",
    title: "Spatio-temporal analysis of remotely sensed forest mortality associated with road de-icing salts",
    authors: "Fan, Y. *, Weisberg, P. J., Nowak, R. S.",
    journal: "Science of The Total Environment",
    volume: "472, 929–938",
    doiLink: "https://doi.org/10.1016/j.scitotenv.2013.11.131"
  },
  {
    id: "pub-2007-1",
    year: "2007",
    title: "The measure of utilizing rural biomass resource rationally",
    authors: "Fan, Y. *",
    journal: "Journal of Agricultural Mechanization Research",
    volume: "(12), 200–202, 217",
    doiLink: "https://scholar.google.com/scholar?q=The+measure+of+utilizing+rural+biomass+resource+rationally",
    note: "In Chinese"
  },
  {
    id: "pub-2007-2",
    year: "2007",
    title: "“Hollow villages” exhausted rural areas",
    authors: "Fan, Y. *",
    journal: "Ecological Economy",
    volume: "(8), 18–21",
    doiLink: "https://scholar.google.com/scholar?q=%E2%80%9CHollow+villages%E2%80%9D+exhausted+rural+areas",
    note: "In Chinese"
  }
];

export default function PublicationsPage() {
  // 对文章进行年份分组处理，让页面渲染出漂亮的时间轴
  // 使用 as Record<string, any[]> 告诉 TypeScript 这个对象的结构
  const groupedPublications = publicationsData.reduce((acc, pub) => {
    if (!acc[pub.year]) acc[pub.year] = [];
    acc[pub.year].push(pub);
    return acc;
  }, {} as Record<string, any[]>);
  
  // 将年份从大到小排序
  const sortedYears = Object.keys(groupedPublications).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* 页面头部介绍 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            Selected Publications
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our recent research output focusing on climate-ecosystem interactions, Earth system modeling, heat stress, and climate change mitigation.
          </p>
          <div className="mt-6 flex justify-center">
            {/* 跳转到 Google Scholar 的按钮 */}
            <a 
              href="https://scholar.google.com/citations?user=0Nj_pzQdGbMC" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2 border border-slate-300 shadow-sm text-sm font-bold rounded-full text-slate-700 bg-white hover:bg-slate-50 hover:text-blue-600 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.911L12 5l12 9.5V20h-2v-3.808L16 19.34V12.5l-4-3.125z"/></svg>
              View full profile on Google Scholar
            </a>
          </div>
        </div>

        {/* 论文列表主体 (时间轴布局) */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          {sortedYears.map((year) => (
            <div key={year} className="mb-12 last:mb-0 relative">
              
              {/* 年份标签 */}
              <div className="flex items-center mb-6">
                <h2 className="text-3xl font-black text-slate-800 tracking-tight w-24 flex-shrink-0">
                  {year}
                </h2>
                <div className="h-px bg-slate-200 flex-grow ml-4"></div>
              </div>

              {/* 该年份下的论文列表 */}
              <div className="space-y-8 pl-0 md:pl-28">
                {groupedPublications[year].map((pub) => (
                  <div key={pub.id} className="group flex flex-col items-start relative">
                    
                    {/* 文章标题 */}
                    <h3 className="text-lg font-bold text-gray-900 leading-snug mb-2 group-hover:text-blue-700 transition-colors">
                      {pub.title}
                    </h3>
                    
                    {/* 作者列表 (使用 dangerouslySetInnerHTML 高亮 Fan, Y.) */}
                    <p 
                      className="text-gray-600 text-sm mb-1 leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: pub.authors.replace(/Fan, Y\./g, '<strong class="text-gray-900">Fan, Y.</strong>')
                      }}
                    ></p>
                    
                    {/* 期刊 & 卷号 */}
                    <p className="text-sm font-medium text-slate-500 mb-3">
                      <i className="text-emerald-700">{pub.journal}</i> {pub.volume}
                    </p>

                    {/* 如果有备注信息 (比如获得了新闻报道或者语言说明) */}
                    {pub.note && (
                      <p className="text-xs text-orange-600 font-semibold mb-3 bg-orange-50 px-2 py-1 rounded inline-block">
                        ★ {pub.note}
                      </p>
                    )}

                    {/* DOI / Link 按钮 */}
                    {pub.doiLink && (
                      <a 
                        href={pub.doiLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs font-bold text-blue-600 hover:text-white border border-blue-600 hover:bg-blue-600 px-3 py-1 rounded transition-colors"
                      >
                        DOI / Link
                        <svg className="w-3 h-3 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                      </a>
                    )}
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}