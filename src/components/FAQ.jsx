import React, { useState } from 'react';
import { FaChevronDown, FaCommentDots } from 'react-icons/fa';

const faqs = [
  {
    q: "What is Google Ads Cost Per Install (CPI)?",
    a: "Cost Per Install (CPI) is the amount you pay each time a user installs your app after clicking on your Google Ads campaign. It's a key metric for mobile app marketing campaigns that helps measure the efficiency of your user acquisition efforts."
  },
  {
    q: "How Much Does Google Ads' Average Cost per Install?",
    a: "The average CPI varies by industry, typically ranging from $1.50 to $5.00. Gaming apps often have lower CPIs ($1-3), while finance apps may see higher costs ($4-8+). Factors like targeting, ad quality, and competition affect the final cost."
  },
  {
    q: "What is a Good Average Cost Per Install (CPI) for Google Ads?",
    a: "A 'good' CPI depends on your industry and goals. For most, $1-$5 is considered effective, but sector-specific targets vary based on app value, lifetime value (LTV) of users, and market competition."
  },
  {
    q: "How Do I Get the Lowest Score on My Google CPI?",
    a: "Optimize your app store listing, target high-intent keywords, use engaging ad creatives, implement A/B testing, improve your app's ratings and reviews, and refine your audience targeting to lower CPI effectively."
  },
  {
    q: "Why is My Google CPI So High?",
    a: "High CPI can result from competitive keywords, poor ad relevance, low-quality creatives, inefficient targeting, high competition in your industry, or a low-quality app store listing. Review and optimize these factors to reduce costs."
  },
  {
    q: "Can I Track the Performance of My CPI Campaigns in Google Ads?",
    a: "Yes! Google Ads provides detailed conversion tracking, analytics dashboards, and comprehensive campaign reports to monitor your CPI performance in real-time. You can track installs, costs, and ROI through the Google Ads interface."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full mb-4">
            <span className="text-red-600">❓</span>
            <span className="text-red-600 font-semibold">Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Got Questions? <span className="gradient-text">We've Got Answers</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, idx) => (
            <div key={idx} className="mb-4">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left p-4 md:p-5 bg-gray-50 rounded-xl hover:bg-gray-100 transition flex justify-between items-center gap-4"
              >
                <span className="font-semibold text-gray-800 text-sm md:text-base">{faq.q}</span>
                <FaChevronDown className={`text-red-600 transition-transform duration-300 flex-shrink-0 ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === idx && (
                <div className="p-4 md:p-5 bg-white border border-gray-100 rounded-b-xl animate-fade-in">
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Chat Button */}
        <div className="text-center mt-10 md:mt-12">
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:shadow-xl transition group">
            <FaCommentDots />
            Chat with us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;