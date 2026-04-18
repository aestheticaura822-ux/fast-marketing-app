import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaMinus, FaSearch, FaEnvelope, FaPhone, FaComments, FaArrowRight, FaCheckCircle, FaHeadset, FaClock, FaShieldAlt } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      id: 1,
      question: "What marketing services do you offer?",
      answer: "We provide comprehensive digital strategy, social media administration, branding & identity design, online/offline ad campaigns, and professional content creation tailored to your brand goals. Our services include SEO, PPC, social media marketing, email marketing, content creation, and brand strategy.",
      category: "services",
      icon: "📢"
    },
    {
      id: 2,
      question: "How do you measure the success of a campaign?",
      answer: "We use data-driven statistics, including ROI, conversion rates, and engagement metrics, to track and optimize every campaign for maximum impact. Our real-time dashboards provide complete transparency into campaign performance, allowing you to see exactly how your investment is performing.",
      category: "process",
      icon: "📊"
    },
    {
      id: 3,
      question: "Can you help with offline advertising like billboards?",
      answer: "Yes. We specialize in both digital and traditional advertising, including high-impact billboard designs and print media strategies. Our creative team ensures brand consistency across all channels, whether online or offline.",
      category: "services",
      icon: "🏙️"
    },
    {
      id: 4,
      question: "How long does it take to see results?",
      answer: "While some branding updates are immediate, digital campaigns typically show significant data and trends within the first 30 days of launch. SEO results may take 3-6 months for full impact, but we provide regular progress reports throughout the process.",
      category: "process",
      icon: "⏱️"
    },
    {
      id: 5,
      question: "Do you offer custom branding packages?",
      answer: "Absolutely. We tailor our services to fit businesses of all sizes, from startups needing a new identity to established corporations looking for a refresh. Every package is customized to meet your specific goals, budget, and timeline.",
      category: "packages",
      icon: "🎨"
    },
    {
      id: 6,
      question: "How involved do I need to be in the process?",
      answer: "We follow a collaborative approach where we handle the heavy lifting while keeping you informed during key strategy and approval milestones. You'll have a dedicated account manager and regular check-ins, but we handle the day-to-day execution.",
      category: "process",
      icon: "🤝"
    },
    {
      id: 7,
      question: "Can you manage our brand's social media accounts?",
      answer: "Yes, our Social Media Administration service covers content planning, posting, community management, and performance reporting across all major platforms including Facebook, Instagram, TikTok, LinkedIn, and Twitter.",
      category: "services",
      icon: "📱"
    },
    {
      id: 8,
      question: "Do you work with international clients?",
      answer: "As part of the global Fast Group, we serve clients internationally, leveraging our diverse expertise to create campaigns that resonate across different markets and cultures. We have experience working with clients across North America, Europe, Middle East, and Asia.",
      category: "general",
      icon: "🌍"
    },
    {
      id: 9,
      question: "What makes Fast Marketing different from other agencies?",
      answer: "We combine data-driven strategies with creative excellence, backed by the resources of the Fast Group Alliance. Our holistic approach ensures brand consistency across all channels, and we're obsessed with delivering measurable ROI for our clients.",
      category: "general",
      icon: "⚡"
    },
    {
      id: 10,
      question: "How do we get started?",
      answer: "Simply contact us to schedule a consultation. We'll discuss your vision, goals, and budget, then provide a customized strategy to move your brand forward. Get started by clicking the 'Get Started' button or calling us directly.",
      category: "process",
      icon: "🚀"
    }
  ];

  const categories = [
    { id: "all", name: "All Questions", icon: "📋", count: faqs.length },
    { id: "services", name: "Services", icon: "📢", count: faqs.filter(f => f.category === "services").length },
    { id: "process", name: "Process", icon: "⚙️", count: faqs.filter(f => f.category === "process").length },
    { id: "packages", name: "Packages", icon: "📦", count: faqs.filter(f => f.category === "packages").length },
    { id: "general", name: "General", icon: "💡", count: faqs.filter(f => f.category === "general").length }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  const stats = [
    { value: "24/7", label: "Support Available", icon: <FaHeadset className="text-2xl sm:text-3xl" /> },
    { value: "98%", label: "Client Satisfaction", icon: <FaCheckCircle className="text-2xl sm:text-3xl" /> },
    { value: "15min", label: "Avg Response Time", icon: <FaClock className="text-2xl sm:text-3xl" /> },
    { value: "100%", label: "Confidential", icon: <FaShieldAlt className="text-2xl sm:text-3xl" /> }
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section - Responsive */}
      <section className="relative overflow-hidden pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 sm:pb-20 md:pb-24">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-marketing-animation-1201-large.mp4" type="video/mp4" />
        </video>
        
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

        <div className="container-custom relative z-10 text-center text-white px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-red-600/80 rounded-full mb-4 sm:mb-6 backdrop-blur-sm">
            <span className="text-yellow-400 text-sm sm:text-base">❓</span>
            <span className="text-xs sm:text-sm font-semibold">Frequently Asked Questions</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
            Got Questions?
            <span className="block sm:inline bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"> We've Got Answers</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            Answers to common questions about our creative marketing and advertising solutions.
          </p>
        </div>
      </section>

      <div className="container-custom py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        {/* Stats Section - Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-3 sm:p-4 md:p-6 text-center text-white shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-2 sm:mb-3">{stat.icon}</div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold">{stat.value}</div>
              <div className="text-xs sm:text-sm mt-1 opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Search Bar - Responsive */}
        <div className="max-w-2xl mx-auto mb-8 sm:mb-10 px-2 sm:px-0">
          <div className="relative">
            <FaSearch className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm sm:text-base" />
            <input
              type="text"
              placeholder="Search your question..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all outline-none text-gray-700 text-sm sm:text-base"
            />
          </div>
        </div>

        {/* Category Filters - Horizontal Scroll on Mobile */}
        <div className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 overflow-x-auto pb-4 sm:pb-0 px-2 sm:px-0">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full transition-all duration-300 whitespace-nowrap ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="text-sm sm:text-base">{category.icon}</span>
              <span className="text-xs sm:text-sm md:text-base">{category.name}</span>
              <span className={`text-xs px-1.5 sm:px-2 py-0.5 rounded-full ${
                activeCategory === category.id ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* FAQ Accordion - Responsive */}
        <div className="max-w-4xl mx-auto px-2 sm:px-0">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-8 sm:py-12">
              <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">🔍</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">No results found</h3>
              <p className="text-sm sm:text-base text-gray-500">Try searching with different keywords</p>
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => (
              <div
                key={faq.id}
                className="mb-3 sm:mb-4 animate-fade-in"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className={`w-full text-left p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl transition-all duration-300 flex justify-between items-start gap-3 sm:gap-4 ${
                    openIndex === faq.id
                      ? 'bg-gradient-to-r from-red-50 to-orange-50 shadow-lg'
                      : 'bg-white hover:bg-gray-50 shadow-md'
                  }`}
                >
                  <div className="flex gap-2 sm:gap-3 md:gap-4 flex-1">
                    <div className="text-xl sm:text-2xl md:text-3xl flex-shrink-0">{faq.icon}</div>
                    <div>
                      <span className="font-semibold text-gray-800 text-sm sm:text-base md:text-lg">
                        {faq.id}. {faq.question}
                      </span>
                    </div>
                  </div>
                  <div className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                    openIndex === faq.id ? 'bg-red-600 text-white' : 'bg-gray-100 text-red-600'
                  }`}>
                    {openIndex === faq.id ? <FaMinus size={12} className="sm:w-3 sm:h-3 md:w-3.5 md:h-3.5" /> : <FaPlus size={12} className="sm:w-3 sm:h-3 md:w-3.5 md:h-3.5" />}
                  </div>
                </button>
                
                {openIndex === faq.id && (
                  <div className="mt-2 p-4 sm:p-5 md:p-6 bg-white rounded-xl shadow-md border-l-4 border-red-500 animate-fade-in">
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Still Have Questions Section - Responsive */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 sm:p-8 md:p-12 text-center text-white mx-2 sm:mx-0">
          <FaComments className="text-4xl sm:text-5xl mx-auto mb-3 sm:mb-4 text-red-500" />
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">Still Have Questions?</h3>
          <p className="text-sm sm:text-base text-gray-300 mb-5 sm:mb-6 max-w-2xl mx-auto px-2">
            Can't find the answer you're looking for? Please chat with our friendly team.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-red-700 hover:shadow-xl transition-all duration-300"
            >
              <FaEnvelope size={14} className="sm:w-4 sm:h-4" /> Contact Support
            </Link>
            <a
              href="tel:+923210846667"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              <FaPhone size={14} className="sm:w-4 sm:h-4" /> Call Us Now
            </a>
          </div>
          <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-400 px-2">
            <p className="break-words">📧 Email: xfastgroup001@gmail.com | 📞 Phone: +92 321 0846667</p>
          </div>
        </div>

        {/* CTA Section - Responsive */}
        <div className="mt-8 sm:mt-12 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 sm:p-8 md:p-10 text-center text-white mx-2 sm:mx-0">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">Ready to Get Started?</h3>
          <p className="text-sm sm:text-base md:text-lg mb-5 sm:mb-6 px-2">Let's discuss your goals and create a strategy that works for you.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-red-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Get Started <FaArrowRight size={12} className="sm:w-3.5 sm:h-3.5" />
          </Link>
          <p className="text-xs sm:text-sm text-gray-200 mt-3 sm:mt-4">No commitment. Free consultation.</p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FAQ;