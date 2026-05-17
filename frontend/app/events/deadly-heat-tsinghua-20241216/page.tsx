import React from 'react';

export default function DeadlyHeatTsinghuaEvent() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <article className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        
        <div className="bg-gradient-to-r from-red-800 to-rose-700 p-10 md:p-16 text-white">
          <div className="flex space-x-2 mb-4">
            <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Climate Change</span>
            <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Heatwaves</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            深圳国际研究生院范远超团队合作在全球变暖与致命热应激研究方面取得新进展
          </h1>
          <div className="mt-8 text-sm text-red-100 flex items-center">
            <span>发布日期：2024年12月16日</span>
            <span className="mx-2">&bull;</span>
            <span>清华新闻网</span>
          </div>
        </div>

        <div className="p-10 md:p-16 prose prose-lg prose-slate max-w-none">
          <p className="lead text-xl text-gray-600 font-medium mb-8">
            随着全球气候变化加剧，极端高温天气对人类健康的威胁日益突出。不可补偿热应激是一种极端的热应激状态，即身体散热的能力不足以抵消环境热量的输入，使得健康的个体即使采取充分休息和补水等预防措施，仍然会出现核心体温上升的情况（如不进行干预，热射病和死亡将无法避免）。以往研究主要关注室内环境，假设太阳辐射可以完全避免，但是忽略了无法避免户外活动的脆弱群体，例如全球大约8.5亿农民和7亿需要户外取水的人群。
          </p>

          <p>
            近日，清华大学深圳国际研究生院环境与生态研究院范远超团队及其合作者在研究全球变暖对人类健康影响方面取得重要突破。研究团队首次在全球尺度定量评估了户外湿热、太阳辐射及生理特征等因素对热应激的影响，揭示了此前研究严重低估全球变暖带来的户外健康风险。研究结果表明，在全球升温2°C的情况下，将有数千万无法避免户外活动的人群面临致命热应激风险，这一数字在全球升温4°C时将攀升至数亿人。
          </p>

          <p>
            研究团队开发了一套精确且简约的人体热响应模型，首次将温度、湿度、太阳辐射和风速等户外动态环境因素和几种关键的生理约束同时纳入考量，并用第六次耦合模式比对项目（CMIP6）中的12个地球系统模式的未来气候预测作为输入进行全球热应激的定量评估。该方法的创新在于，传统热应激研究主要依赖于如湿球温度等描述人体外部因素的经验指数，其参数一般校准于当下气候和特定人群，无法外推到未来或其他人群，而该团队所开发的模型直接描述人体反应并可适用于任何气候情景和人群。
          </p>

          {/* ✅ 修复点：已更新为子文件夹绝对路径 */}
          <figure className="my-8">
            <img src="/events/deadly-heat-tsinghua-20241216/CEE01.jpg" alt="人体热应激模型示意图" className="w-full rounded-xl shadow-md border border-gray-200" />
            <figcaption className="text-center text-sm text-gray-500 mt-3">图1. 人体热应激模型示意图：以往研究（a）与该研究（b）的区别</figcaption>
          </figure>

          <p>
            研究发现，本世纪预期面临不可补偿热应激的户外活动人口将比以往室内研究多出数千万。具体来说，在全球变暖2°C的情景下，预计有2400万农民或户外取水的人口平均每年将经历8天（或96小时）不可补偿热应激。当升温4°C时，将有1.3亿农民或1.6亿户外取水人口平均每年受到14天（或168小时）不可补偿热应激的影响。
          </p>

          {/* ✅ 修复点：已更新为子文件夹绝对路径 */}
          <figure className="my-8">
            <img src="/events/deadly-heat-tsinghua-20241216/CEE02.jpg" alt="不可补偿热应激影响的土地面积及户外劳动人口" className="w-full rounded-xl shadow-md border border-gray-200" />
            <figcaption className="text-center text-sm text-gray-500 mt-3">图2. 不可补偿热应激影响的土地面积（a，c）及户外劳动人口（b，d）</figcaption>
          </figure>

          <p>
            如果考虑其他户外活动人口如建筑工人或快递员，或老年及亚健康人群，影响将更为广泛。即使在有遮阳条件下，暴露于不可补偿热应激的人口数量也比此前完全忽视辐射影响的研究预测高出六倍以上。热带地区，尤其是南亚、非洲北部、南美和中东部分地区将首当其冲，中国华东华南地区也在接近这些危险条件。
          </p>

          {/* ✅ 修复点：已更新为子文件夹绝对路径 */}
          <figure className="my-8">
            <img src="/events/deadly-heat-tsinghua-20241216/CEE03.jpg" alt="年累计不可补偿热应激时间" className="w-full rounded-xl shadow-md border border-gray-200" />
            <figcaption className="text-center text-sm text-gray-500 mt-3">图3. 年累计不可补偿热应激时间（阳光暴露下，针对有农业人口地区）</figcaption>
          </figure>

          <p>
            此外，研究表明受极端热应激事件影响的人群将不得不考虑把户外活动时间转移到夜间或清晨（18:00至9:00之间），但这种改变将会带来一系列的社会、经济影响和安全隐患。
          </p>

          <blockquote className="border-l-4 border-red-600 bg-red-50 p-6 rounded-r-xl my-8 italic text-gray-700">
            “我们的模型将气候研究和生理学研究相结合，为跨领域合作搭建了一座桥梁，能更准确地评估各种气候条件下的热应激健康风险。”
            <footer className="mt-2 text-sm font-bold text-gray-900 not-italic">— 范远超 (研究负责人)</footer>
          </blockquote>

          <blockquote className="border-l-4 border-gray-400 bg-gray-50 p-6 rounded-r-xl my-8 italic text-gray-700">
            “对于气候变化，也许最大的未知是：我们将允许地球变暖到什么程度？这取决于我们自己。为了避免不可补偿热应激带来的最严重影响，我们需要迅速淘汰化石燃料，将全球升温控制在2°C以下。”
            <footer className="mt-2 text-sm font-bold text-gray-900 not-italic">— Kaighin McColl (研究合作者)</footer>
          </blockquote>

          <p>
            相关研究成果以“全球变暖导致广泛的户外不可补偿热应激风险”（Widespread outdoor exposure to uncompensable heat stress with warming）为题，于12月12日发表于《自然》（Nature）系列期刊《通讯·地球与环境》（<i className="font-semibold text-gray-900">Communications Earth & Environment</i>）。
          </p>

          <p className="text-sm text-gray-500 mt-8">
            清华大学深圳国际研究生院助理教授范远超为论文第一作者及通讯作者，哈佛大学地球与行星科学系助理教授凯金·麦科尔（Kaighin McColl）为论文第二作者及共同通讯作者。研究得到深圳市科技创新委员会、鹏城孔雀计划特聘岗位科研启动基金和哈佛大学太阳能地球工程研究计划奖学金的资助。
          </p>

          <hr className="my-8" />
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://doi.org/10.1038/s43247-024-01930-6" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-red-600 hover:bg-red-700 transition-colors">
              阅读 Nature 原文
            </a>
            <a href="https://www.tsinghua.edu.cn/info/1175/115952.htm" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-colors">
              清华大学新闻网报道
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}