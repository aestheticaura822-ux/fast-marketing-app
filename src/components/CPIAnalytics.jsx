import React, { useState } from 'react';
import { FaChartLine, FaTable } from 'react-icons/fa';

const CPIAnalytics = () => {
  const [activeTab, setActiveTab] = useState('daily');
  const [chartView, setChartView] = useState('chart');
  
  const cpiData = {
    daily: [0.8, 1.2, 1.5, 1.3, 2.0, 2.2, 1.8, 2.5, 2.3, 2.8, 2.6, 3.0, 2.9, 2.7],
    weekly: [1.2, 1.8, 2.2, 2.5],
    monthly: [1.5, 2.0, 2.5, 2.8]
  };

  const industries = [
    { industry: "Marketing Agency", avg: "$1.95", min: "$0.78", max: "$4.88+" },
    { industry: "E-Commerce", avg: "$2.40", min: "$0.96", max: "$6.00+" },
    { industry: "Gaming", avg: "$3.50", min: "$1.40", max: "$8.75+" },
    { industry: "Finance", avg: "$4.20", min: "$1.68", max: "$10.50+" },
    { industry: "Technology", avg: "$3.80", min: "$1.52", max: "$9.50+" },
    { industry: "Lifestyle", avg: "$1.80", min: "$0.72", max: "$4.50+" },
    { industry: "Entertainment", avg: "$1.50", min: "$0.60", max: "$3.75+" },
    { industry: "Travel", avg: "$2.80", min: "$1.12", max: "$7.00+" },
    { industry: "Health & Fitness", avg: "$2.00", min: "$0.80", max: "$5.00+" }
  ];

  const maxValue = Math.max(...cpiData[activeTab]);
  const dates = activeTab === 'daily' 
    ? ['Mar 4', 'Mar 5', 'Mar 6', 'Mar 7', 'Mar 8', 'Mar 9', 'Mar 10', 'Mar 11', 'Mar 12', 'Mar 13', 'Mar 14', 'Mar 15', 'Mar 16', 'Mar 17']
    : activeTab === 'weekly' 
      ? ['Week 1', 'Week 2', 'Week 3', 'Week 4']
      : ['Week 1', 'Week 2', 'Week 3', 'Week 4'];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-blue-600 text-xl">📊</span>
            <span className="text-blue-600 font-semibold">Google Advertising Costs by CPI</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Track, Analyze, <span className="gradient-text">Optimize</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Tracking Google Ads Cost Per Install is essential for optimizing campaign performance.
            Analyze CPI pricing and see how costs vary across campaign types.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setChartView('chart')}
            className={`flex items-center gap-2 px-4 md:px-6 py-2 rounded-full transition ${
              chartView === 'chart' ? 'bg-red-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            <FaChartLine /> Chart
          </button>
          <button
            onClick={() => setChartView('table')}
            className={`flex items-center gap-2 px-4 md:px-6 py-2 rounded-full transition ${
              chartView === 'table' ? 'bg-red-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            <FaTable /> Table
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Chart Section */}
          {chartView === 'chart' ? (
            <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                  <h3 className="text-lg md:text-xl font-bold">Average Google CPI</h3>
                  <p className="text-gray-500 text-sm">March 2026: $1.96</p>
                </div>
                <div className="flex gap-2">
                  {['daily', 'weekly', 'monthly'].map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 md:px-4 py-1.5 md:py-2 rounded-lg capitalize transition text-sm md:text-base ${
                        activeTab === tab 
                          ? 'bg-red-600 text-white' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chart Bars */}
              <div className="h-64 md:h-80 flex items-end gap-1 md:gap-2">
                {cpiData[activeTab].map((value, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                    <div className="relative w-full group">
                      <div 
                        className="w-full bg-gradient-to-t from-red-500 to-red-600 rounded-t-lg hover:from-red-600 hover:to-red-700 transition-all cursor-pointer"
                        style={{ height: `${(value / maxValue) * 200}px` }}
                      >
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                          ${value}
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 rotate-45 sm:rotate-0 origin-left">
                      {dates[idx]}
                    </div>
                  </div>
                ))}
              </div>

              {/* Campaign Types */}
              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                {['Maximize Conversions', 'Maximize Conversion Value', 'Target CPM', 'Target CPV', 'Target Impression Share', 'Target ROAS', 'Target Spend'].map(type => (
                  <span key={type} className="px-2 md:px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                    {type}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4">
                <h3 className="text-lg md:text-xl font-bold">CPI Benchmarks by Industry</h3>
                <p className="text-xs md:text-sm opacity-90">Based on Cost Per Install averages</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm md:text-base">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 md:px-6 py-3 text-left font-semibold text-gray-600">Industry</th>
                      <th className="px-3 md:px-6 py-3 text-left font-semibold text-gray-600">Avg CPI</th>
                      <th className="px-3 md:px-6 py-3 text-left font-semibold text-gray-600">Min CPI</th>
                      <th className="px-3 md:px-6 py-3 text-left font-semibold text-gray-600">Max CPI</th>
                    </tr>
                  </thead>
                  <tbody>
                    {industries.map((item, idx) => (
                      <tr key={idx} className="border-t border-gray-100 hover:bg-gray-50 transition">
                        <td className="px-3 md:px-6 py-3 font-medium">{item.industry}</td>
                        <td className="px-3 md:px-6 py-3 text-red-600 font-semibold">{item.avg}</td>
                        <td className="px-3 md:px-6 py-3 text-gray-600">{item.min}</td>
                        <td className="px-3 md:px-6 py-3 text-gray-600">{item.max}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Right Side - Campaign Objective Info */}
          <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-600 text-xl">🎯</span>
              </div>
              <div>
                <h3 className="font-bold">By campaign objective</h3>
                <p className="text-gray-500 text-sm">Health & Fitness</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span>Maximize Conversions</span>
                <span className="text-red-600 font-semibold">$2.15</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span>Target CPA</span>
                <span className="text-red-600 font-semibold">$1.95</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span>Target ROAS</span>
                <span className="text-red-600 font-semibold">$2.45</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span>Target Impression Share</span>
                <span className="text-red-600 font-semibold">$1.85</span>
              </div>
            </div>

            {/* Image */}
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600"
              alt="Google Ads Dashboard"
              className="mt-6 rounded-xl w-full h-32 md:h-40 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CPIAnalytics;