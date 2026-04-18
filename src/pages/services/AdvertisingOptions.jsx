import React, { useEffect, useRef, useState } from 'react';
import { FaChartLine, FaRegLightbulb, FaPlay, FaArrowRight, FaCheckCircle, FaTrophy, FaRocket, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const AdvertisingOptions = () => {
  const statsRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    // Get navbar height
    const navbar = document.querySelector('nav');
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }

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
      if (navbar) {
        setNavbarHeight(navbar.offsetHeight);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const options = [
    {
      title: "Display Advertising",
      icon: "🖼️",
      description: "Capture attention with visually striking banner ads across premium websites and apps. Reach potential customers at every stage of their digital journey.",
      features: ["Rich Media Ads", "Responsive Display", "Retargeting", "Programmatic Buying", "Banner Ads", "Interstitial Ads"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600",
      stat: "90%",
      statLabel: "Brand Awareness"
    },
    {
      title: "Search Engine Marketing",
      icon: "🔍",
      description: "Dominate search results with strategic Google Ads campaigns that drive high-intent traffic. Capture customers actively searching for your products.",
      features: ["Keyword Targeting", "Ad Extensions", "Shopping Ads", "Call Ads", "Dynamic Search Ads", "Remarketing Lists"],
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600",
      stat: "400%",
      statLabel: "ROI Average"
    },
    {
      title: "Social Media Advertising",
      icon: "📱",
      description: "Reach your audience where they spend their time - Instagram, Facebook, TikTok, LinkedIn. Build communities that convert.",
      features: ["Feed Ads", "Story Ads", "Carousel Ads", "Collection Ads", "Reels Ads", "Messenger Ads"],
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600",
      stat: "3.2B+",
      statLabel: "Monthly Reach"
    },
    {
      title: "Video Advertising",
      icon: "🎬",
      description: "Engage viewers with cinematic video content on YouTube, TikTok, and connected TV. Tell your brand story through motion.",
      features: ["Pre-roll Ads", "Mid-roll Ads", "Bumper Ads", "In-stream Ads", "Out-stream Ads", "CTV Ads"],
      image: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?w=600",
      stat: "85%",
      statLabel: "Higher Engagement"
    },
    {
      title: "Native Advertising",
      icon: "📰",
      description: "Seamlessly integrate your brand message into publisher content for natural engagement. Ads that don't feel like ads.",
      features: ["In-feed Ads", "Recommendation Widgets", "Promoted Listings", "Content Discovery", "Sponsored Articles", "In-Image Ads"],
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600",
      stat: "53%",
      statLabel: "More Views"
    },
    {
      title: "Email Marketing",
      icon: "📧",
      description: "Build relationships and drive conversions with targeted email campaigns. Nurture leads from prospect to customer.",
      features: ["Newsletters", "Automated Sequences", "Personalization", "A/B Testing", "Drip Campaigns", "Welcome Series"],
      image: "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?w=600",
      stat: "4200%",
      statLabel: "ROI Potential"
    }
  ];

  const benefits = [
    { icon: <FaTrophy className="text-2xl sm:text-3xl" />, title: "Award Winning", description: "Recognized as Pakistan's best digital marketing agency" },
    { icon: <FaRocket className="text-2xl sm:text-3xl" />, title: "Fast Results", description: "See measurable growth within first 30 days" },
    { icon: <FaShieldAlt className="text-2xl sm:text-3xl" />, title: "100% Secure", description: "Your data and campaigns are fully protected" },
    { icon: <FaChartLine className="text-2xl sm:text-3xl" />, title: "Data Driven", description: "Every decision backed by real analytics" }
  ];

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content with proper padding */}
      <div style={{ paddingTop: `${navbarHeight}px` }}>
        {/* Hero Section with Video Background - Responsive */}
        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden mb-8 sm:mb-12 shadow-2xl mx-3 sm:mx-5 md:mx-8 lg:mx-10">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
            poster="https://images.unsplash.com/photo-1551434678-e076c2235b2f?w=1200"
          >
            <source src="https://cdn.pixabay.com/video/2024/03/04/202987-919379330_medium.mp4" type="video/mp4" />
          </video>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center text-white p-4 sm:p-6">
            <div className="max-w-3xl px-3 sm:px-0">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-red-600/80 rounded-full mb-4 sm:mb-6 backdrop-blur-sm">
                <span className="text-yellow-400 text-sm sm:text-base">⚡</span>
                <span className="text-xs sm:text-sm font-semibold">Premium Advertising Solutions</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
                Complete Line of <br />
                <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Opportunities</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-4 sm:mb-6">
                Premium Digital Solutions at Global Velocity.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button className="bg-red-600 hover:bg-red-700 px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2">
                  <FaPlay size={12} className="sm:w-3.5 sm:h-3.5" /> Start Advertising
                </button>
                <Link to="/services/all" className="border-2 border-white hover:bg-white hover:text-gray-900 px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 text-center">
                  View All Services
                </Link>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-3 sm:bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-1.5 sm:w-1.5 sm:h-2 bg-white rounded-full mt-1.5 sm:mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>

        <div className="container-custom px-4 sm:px-6">
          {/* Overview Section - Responsive */}
          <div className="bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 mb-8 sm:mb-12 shadow-lg">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                <FaRegLightbulb className="text-xl sm:text-2xl text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 text-center sm:text-left">Advertising Solutions That Work</h2>
            </div>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 text-center sm:text-left">
              "The story of every business and the story of every story must have the proper platform. 
              We offer the entire line of advertising opportunities to bring your brand to light."
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4 mt-4">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-600 text-sm sm:text-base" />
                <span className="text-xs sm:text-sm text-gray-600">200+ Active Campaigns</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-600 text-sm sm:text-base" />
                <span className="text-xs sm:text-sm text-gray-600">98% Client Retention</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-600 text-sm sm:text-base" />
                <span className="text-xs sm:text-sm text-gray-600">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Stats Section - Responsive Grid */}
          <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-3 sm:p-4 md:p-6 text-center text-white shadow-lg hover:scale-105 transition-transform">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold stat-counter" data-target="500" data-suffix="+">0+</div>
              <div className="text-xs sm:text-sm md:text-base mt-1 sm:mt-2">Happy Clients</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-3 sm:p-4 md:p-6 text-center text-white shadow-lg hover:scale-105 transition-transform">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold stat-counter" data-target="5000" data-suffix="+">0+</div>
              <div className="text-xs sm:text-sm md:text-base mt-1 sm:mt-2">Campaigns Run</div>
            </div>
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-3 sm:p-4 md:p-6 text-center text-white shadow-lg hover:scale-105 transition-transform">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold stat-counter" data-target="50" data-suffix="M+">0M+</div>
              <div className="text-xs sm:text-sm md:text-base mt-1 sm:mt-2">Monthly Reach</div>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-3 sm:p-4 md:p-6 text-center text-white shadow-lg hover:scale-105 transition-transform">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold stat-counter" data-target="99" data-suffix="%">0%</div>
              <div className="text-xs sm:text-sm md:text-base mt-1 sm:mt-2">Uptime Guarantee</div>
            </div>
          </div>

          {/* Options Grid - Responsive */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8">
            Our <span className="gradient-text">Advertising Solutions</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-10 sm:mb-12">
            {options.map((option, idx) => (
              <div key={idx} className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                  <img 
                    src={option.image} 
                    alt={option.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-3xl sm:text-4xl md:text-5xl drop-shadow-lg">{option.icon}</div>
                  <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 bg-white/90 backdrop-blur-sm rounded-lg px-1.5 sm:px-2 py-0.5 sm:py-1">
                    <span className="text-[10px] sm:text-xs font-bold text-red-600">{option.stat}</span>
                  </div>
                </div>
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">{option.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{option.description}</p>
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-3 sm:mb-4">
                    {option.features.slice(0, 4).map((feature, i) => (
                      <span key={i} className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-100 rounded-full text-[10px] sm:text-xs text-gray-600">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <button className="text-red-600 font-semibold text-xs sm:text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <FaArrowRight size={10} className="sm:w-3 sm:h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Section - Responsive */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-10 sm:mb-12 text-white">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8">Why Choose <span className="text-red-500">Fast Marketing</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-red-600 transition-colors duration-300">
                    <div className="text-red-500 group-hover:text-white transition-colors text-xl sm:text-2xl">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section - Responsive */}
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl mb-10 sm:mb-12">
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
              <FaChartLine className="text-3xl sm:text-4xl md:text-5xl mx-auto mb-3 sm:mb-4 opacity-80" />
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">Strategy First</h3>
              <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 max-w-2xl mx-auto px-3">
                Every campaign is rooted in deep market data and consumer insights. 
                We don't guess — we analyze, optimize, and dominate.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
                <button className="bg-white text-red-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Start Your Campaign →
                </button>
                <button className="border-2 border-white text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-white hover:text-red-600 transition-all duration-300">
                  Request a Quote
                </button>
              </div>
              <p className="text-xs sm:text-sm text-gray-200 mt-3 sm:mt-4">No commitment. Free consultation.</p>
            </div>
          </div>

          {/* Back to Home Link - Responsive */}
          <div className="mt-6 sm:mt-8 text-center pb-8 sm:pb-12">
            <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-red-600 transition text-sm sm:text-base">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default AdvertisingOptions;