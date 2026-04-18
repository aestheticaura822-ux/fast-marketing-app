import React, { useEffect, useRef, useState } from 'react';
import { FaPlay, FaArrowRight, FaCheckCircle, FaChartLine, FaRocket, FaShieldAlt, FaClock, FaTrophy, FaSpinner, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const AllServices = () => {
  const statsRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  useEffect(() => {
    // Get navbar height
    const navbar = document.querySelector('nav');
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }

    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 500);

    // Counter animation for stats
    const counters = document.querySelectorAll('.stat-counter');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.getAttribute('data-target'));
          let current = 0;
          const increment = target / 50;
          const updateCounter = () => {
            if (current < target) {
              current += increment;
              counter.textContent = Math.ceil(current) + (counter.getAttribute('data-suffix') || '');
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = target + (counter.getAttribute('data-suffix') || '');
            }
          };
          updateCounter();
          observer.unobserve(counter);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));

    // Update navbar height on resize
    const handleResize = () => {
      const navbar = document.querySelector('nav');
      if (navbar) {
        setNavbarHeight(navbar.offsetHeight);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setEmailSubmitted(true);
      setTimeout(() => setEmailSubmitted(false), 3000);
      setEmail('');
    }
  };

  const allServices = [
    { category: "Advertising Options", path: "/services/advertising-options", icon: "📢", description: "Complete line of advertising opportunities across all digital platforms", items: 12, color: "from-blue-500 to-cyan-500", popular: true },
    { category: "Social Media Ads", path: "/services/social-media-ads", icon: "📱", description: "Meta, TikTok, LinkedIn, Twitter & YouTube campaigns", items: 8, color: "from-purple-500 to-pink-500", popular: true },
    { category: "Ad Formats", path: "/services/ad-formats", icon: "🎨", description: "Visual & interactive ad formats that capture attention", items: 15, color: "from-red-500 to-orange-500", popular: false },
    { category: "Targeting Options", path: "/services/targeting-options", icon: "🎯", description: "Precision audience targeting for maximum ROI", items: 24, color: "from-green-500 to-emerald-500", popular: true },
    { category: "Ad Placement", path: "/services/ad-placement", icon: "📍", description: "Strategic visibility solutions across premium networks", items: 18, color: "from-indigo-500 to-purple-500", popular: false },
    { category: "SEO Services", path: "/services/seo", icon: "🔍", description: "Search engine optimization for organic growth", items: 10, color: "from-yellow-500 to-amber-500", popular: true },
    { category: "Content Marketing", path: "/services/content", icon: "✍️", description: "Content strategy & creation that builds authority", items: 8, color: "from-teal-500 to-cyan-500", popular: false },
    { category: "Email Marketing", path: "/services/email", icon: "📧", description: "Campaign management with high conversion rates", items: 6, color: "from-orange-500 to-red-500", popular: false },
    { category: "Analytics & Reporting", path: "/services/analytics", icon: "📊", description: "Data-driven insights for informed decisions", items: 7, color: "from-blue-600 to-indigo-600", popular: true },
    { category: "Brand Strategy", path: "/services/brand", icon: "🎯", description: "Brand identity & positioning for market leadership", items: 5, color: "from-pink-500 to-rose-500", popular: false }
  ];

  const stats = [
    { value: 500, label: "Happy Clients", suffix: "+", color: "from-blue-500 to-cyan-500" },
    { value: 98, label: "Client Retention", suffix: "%", color: "from-purple-500 to-pink-500" },
    { value: 50, label: "Monthly Reach", suffix: "M+", color: "from-orange-500 to-red-500" },
    { value: 24, label: "Support", suffix: "/7", color: "from-green-500 to-emerald-500" }
  ];

  const benefits = [
    { icon: <FaTrophy className="text-2xl sm:text-3xl" />, title: "Award Winning", description: "Pakistan's best digital marketing agency" },
    { icon: <FaRocket className="text-2xl sm:text-3xl" />, title: "Fast Results", description: "See growth within first 30 days" },
    { icon: <FaShieldAlt className="text-2xl sm:text-3xl" />, title: "100% Secure", description: "Your data is fully protected" },
    { icon: <FaClock className="text-2xl sm:text-3xl" />, title: "24/7 Support", description: "Round the clock assistance" }
  ];

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <FaSpinner className="text-4xl sm:text-5xl text-red-600 animate-spin mx-auto mb-4" />
            <p className="text-gray-600 text-sm sm:text-base">Loading services...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* Main Content with proper padding */}
      <div style={{ paddingTop: `${navbarHeight}px` }} className="overflow-x-hidden">

        {/* Hero Section with Video Background */}
        <div className="relative rounded-none sm:rounded-2xl overflow-hidden mb-8 sm:mb-12 shadow-xl mx-0 sm:mx-5 md:mx-8 lg:mx-10 mt-0 sm:mt-6">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
          >
            <source src="https://cdn.pixabay.com/video/2016/09/21/5497-184226939_medium.mp4" type="video/mp4" />
          </video>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center text-white p-4 sm:p-6">
            <div className="max-w-3xl px-2 sm:px-4">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-red-600/80 rounded-full mb-4 sm:mb-6 backdrop-blur-sm">
                <span className="text-yellow-400 text-sm sm:text-base">📋</span>
                <span className="text-xs sm:text-sm font-semibold">Complete Digital Solutions</span>
              </div>
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
                All Services
                <br className="block sm:hidden" />
                <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"> Under One Roof</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-4 sm:mb-6 px-2">
                Complete Digital Marketing Solutions — From strategy to execution, we've got everything you need to dominate your market
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button className="bg-red-600 hover:bg-red-700 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
                  <FaPlay size={14} /> Get Started
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-gray-900 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full font-semibold transition-all duration-300 text-center text-sm sm:text-base">
                  View All Solutions
                </button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
            <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-1.5 sm:h-2 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>

        <div className="container-custom px-4 sm:px-5 md:px-8 lg:px-10">
          {/* Overview Section */}
          <div className="bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 mb-8 sm:mb-12 shadow-lg">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                <FaChartLine className="text-xl sm:text-2xl text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">Complete Digital Marketing Ecosystem</h2>
            </div>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
              "Everything you need to succeed in one place. Our comprehensive suite of digital marketing services 
              covers every aspect of your online presence, from advertising to analytics."
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 mt-3 sm:mt-4">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <FaCheckCircle className="text-green-600 text-sm sm:text-base" />
                <span className="text-xs sm:text-sm text-gray-600">10+ Service Categories</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <FaCheckCircle className="text-green-600 text-sm sm:text-base" />
                <span className="text-xs sm:text-sm text-gray-600">100+ Sub-Services</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <FaCheckCircle className="text-green-600 text-sm sm:text-base" />
                <span className="text-xs sm:text-sm text-gray-600">End-to-End Solutions</span>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12">
            {stats.map((stat, idx) => (
              <div key={idx} className={`bg-gradient-to-r ${stat.color} rounded-xl p-3 sm:p-4 md:p-6 text-center text-white shadow-lg hover:scale-105 transition-transform`}>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold stat-counter" data-target={stat.value} data-suffix={stat.suffix}>0{stat.suffix}</div>
                <div className="text-xs sm:text-sm md:text-base mt-1 sm:mt-2">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Services Grid */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8">
            Our <span className="gradient-text">Service Categories</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
            {allServices.map((service, idx) => (
              <Link key={idx} to={service.path}>
                <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer group overflow-hidden h-full">
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-red-600 text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full z-10">
                      Popular
                    </div>
                  )}
                  
                  {/* Icon with Gradient Background */}
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r ${service.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <span className="text-2xl sm:text-3xl">{service.icon}</span>
                  </div>
                  
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 group-hover:text-red-600 transition-colors line-clamp-1">
                    {service.category}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm mb-2 sm:mb-3 leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                  
                  <div className="flex justify-between items-center mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-gray-100">
                    <span className="text-[10px] sm:text-xs text-gray-400">{service.items}+ Sub-Services</span>
                    <span className="text-red-600 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-1 text-xs sm:text-sm">
                      Explore <FaArrowRight size={10} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 mb-8 sm:mb-12 text-white">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8">
              Why Choose <span className="text-red-500">Fast Marketing</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-red-600 transition-colors duration-300">
                    <div className="text-red-500 group-hover:text-white transition-colors">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1">{benefit.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl mb-8 sm:mb-12">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="https://cdn.pixabay.com/video/2020/03/16/33805-398257065_medium.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-red-700/90"></div>
            
            <div className="relative p-6 sm:p-8 md:p-12 text-center text-white z-10">
              <FaEnvelope className="text-3xl sm:text-4xl md:text-5xl mx-auto mb-3 sm:mb-4 opacity-80" />
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">STAY IN THE LOOP</h3>
              <p className="text-gray-200 mb-4 sm:mb-6 max-w-md mx-auto text-sm sm:text-base">
                Sign up to our newsletter for the latest marketing insights, case studies, and digital trends in Pakistan.
              </p>
              
              {emailSubmitted ? (
                <div className="bg-green-500 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full inline-block animate-fade-in text-sm sm:text-base">
                  ✓ Thanks for subscribing!
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email Address"
                    className="flex-1 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm sm:text-base"
                    required
                  />
                  <button 
                    type="submit"
                    className="bg-white text-red-600 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                  >
                    Join Now →
                  </button>
                </form>
              )}
              <p className="text-[10px] sm:text-xs text-gray-300 mt-3 sm:mt-4">No spam. Unsubscribe anytime.</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 text-center text-white mb-8 sm:mb-12">
            <FaRocket className="text-3xl sm:text-4xl md:text-5xl mx-auto mb-3 sm:mb-4 opacity-80" />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">Ready to Grow Your Business?</h3>
            <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 max-w-2xl mx-auto px-2">
              Let's discuss your goals and create a custom digital marketing strategy that delivers results.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="bg-white text-red-600 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm sm:text-base">
                Get Free Consultation →
              </button>
              <button className="border-2 border-white text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 text-sm sm:text-base">
                View Pricing
              </button>
            </div>
            <p className="text-[10px] sm:text-xs text-gray-200 mt-3 sm:mt-4">No commitment. Free strategy session.</p>
          </div>

          {/* Back to Home Link */}
          <div className="mt-6 sm:mt-8 text-center pb-8 sm:pb-12">
            <Link to="/" className="inline-flex items-center gap-1.5 sm:gap-2 text-gray-500 hover:text-red-600 transition text-sm sm:text-base">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AllServices;