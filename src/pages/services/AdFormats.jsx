import React, { useEffect, useRef, useState } from 'react';
import { FaPlay, FaArrowRight, FaCheckCircle, FaChartLine, FaVideo, FaImage, FaWindowMaximize, FaNewspaper, FaPenFancy, FaGamepad, FaRocket, FaShieldAlt, FaEye, FaMousePointer } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const AdFormats = () => {
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

  const formats = [
    {
      title: "Banner Ads",
      icon: <FaImage className="text-2xl sm:text-3xl" />,
      iconBg: "from-blue-500 to-cyan-500",
      description: "Big, conspicuous and meant to draw immediate attention. Perfect for brand awareness campaigns and retargeting.",
      sizes: ["300x250", "728x90", "160x600", "300x600", "970x250", "320x50"],
      stats: "2.5%",
      statLabel: "Avg CTR",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Pop-Up Ads",
      icon: <FaWindowMaximize className="text-2xl sm:text-3xl" />,
      iconBg: "from-purple-500 to-pink-500",
      description: "Intelligently placed to capture a user in the appropriate moment without disrupting experience. High conversion rates.",
      sizes: ["Exit Intent", "Time-based", "Scroll-triggered", "Click-triggered", "Entry Popup", "Slide-in"],
      stats: "3.2%",
      statLabel: "Conversion Rate",
      image: "https://images.unsplash.com/photo-1556742049-0cfed2f52a73?w=600",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Video Ads",
      icon: <FaVideo className="text-2xl sm:text-3xl" />,
      iconBg: "from-red-500 to-orange-500",
      description: "Short-form cinematic video content designed for high engagement. We handle everything from pre-production to placement.",
      sizes: ["6s Bumper", "15s", "30s", "60s+", "YouTube Shorts", "TikTok Video"],
      stats: "85%",
      statLabel: "Higher Engagement",
      image: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?w=600",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Native Ads",
      icon: <FaNewspaper className="text-2xl sm:text-3xl" />,
      iconBg: "from-green-500 to-emerald-500",
      description: "Advertisements that perfectly integrate into content to appear natural and non-disruptive. Blends seamlessly with user experience.",
      sizes: ["In-feed", "In-article", "Recommendation", "Search Results", "Promoted Listings", "Content Discovery"],
      stats: "53%",
      statLabel: "More Views",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Sponsored Content",
      icon: <FaPenFancy className="text-2xl sm:text-3xl" />,
      iconBg: "from-yellow-500 to-amber-500",
      description: "Establishing trust with worthwhile branded content that provides genuine value to readers and builds authority.",
      sizes: ["Articles", "Reviews", "Listicles", "Guides", "Interviews", "Case Studies", "White Papers"],
      stats: "4.5x",
      statLabel: "Trust Factor",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600",
      color: "from-yellow-500 to-amber-500"
    },
    {
      title: "Interactive Ads",
      icon: <FaGamepad className="text-2xl sm:text-3xl" />,
      iconBg: "from-indigo-500 to-purple-500",
      description: "Engage users with gamified and interactive ad experiences that drive higher engagement rates and longer dwell time.",
      sizes: ["Quizzes", "Polls", "AR Filters", "360° Video", "Shoppable", "Swipeable", "Mini Games"],
      stats: "5.2x",
      statLabel: "Higher Engagement",
      image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=600",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const benefits = [
    { icon: <FaEye className="text-2xl sm:text-3xl" />, title: "High Visibility", description: "Capture attention with premium ad placements" },
    { icon: <FaMousePointer className="text-2xl sm:text-3xl" />, title: "Better Engagement", description: "Interactive formats drive higher CTR" },
    { icon: <FaRocket className="text-2xl sm:text-3xl" />, title: "Fast Production", description: "Quick turnaround for all ad formats" },
    { icon: <FaShieldAlt className="text-2xl sm:text-3xl" />, title: "Quality Assured", description: "All ads reviewed for excellence" }
  ];

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content with proper padding */}
      <div style={{ paddingTop: `${navbarHeight}px` }}>
        {/* Hero Section with Video Background - Responsive */}
        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden mb-8 sm:mb-12 shadow-2xl mx-3 sm:mx-5 md:mx-8 lg:mx-10 mt-4 sm:mt-6">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
            poster="https://images.unsplash.com/photo-1536240474400-aa2b3c1aab69?w=1200"
          >
            <source src="https://cdn.pixabay.com/video/2016/08/14/4463-178898449_medium.mp4" type="video/mp4" />
          </video>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center text-white p-4 sm:p-6">
            <div className="max-w-3xl px-3 sm:px-0">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-red-600/80 rounded-full mb-4 sm:mb-6 backdrop-blur-sm">
                <span className="text-yellow-400 text-sm sm:text-base">🎨</span>
                <span className="text-xs sm:text-sm font-semibold">Creative Ad Formats</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
                Visual & 
                <span className="block sm:inline bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"> Interactive Excellence</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-4 sm:mb-6 px-2">
                From banner ads to interactive experiences — we create stunning ad formats that capture attention and drive results
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button className="bg-red-600 hover:bg-red-700 px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2">
                  <FaPlay size={12} className="sm:w-3.5 sm:h-3.5" /> Create Ad
                </button>
                <Link to="/services/all" className="border-2 border-white hover:bg-white hover:text-gray-900 px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 text-center">
                  View All Formats
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
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                <FaChartLine className="text-xl sm:text-2xl text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 text-center sm:text-left">Complete Range of Ad Formats</h2>
            </div>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 text-center sm:text-left">
              "Visual & Interactive Excellence — We create stunning ad experiences that capture attention, 
              drive engagement, and deliver measurable results across all digital platforms."
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4 mt-4">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-600 text-sm sm:text-base" />
                <span className="text-xs sm:text-sm text-gray-600">15+ Ad Formats</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-600 text-sm sm:text-base" />
                <span className="text-xs sm:text-sm text-gray-600">Custom Designs</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-600 text-sm sm:text-base" />
                <span className="text-xs sm:text-sm text-gray-600">Responsive & Optimized</span>
              </div>
            </div>
          </div>

          {/* Stats Section - Responsive Grid */}
          <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-3 sm:p-4 md:p-6 text-center text-white shadow-lg hover:scale-105 transition-transform">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold stat-counter" data-target="15" data-suffix="+">0+</div>
              <div className="text-xs sm:text-sm md:text-base mt-1 sm:mt-2">Ad Formats</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-3 sm:p-4 md:p-6 text-center text-white shadow-lg hover:scale-105 transition-transform">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold stat-counter" data-target="2.5" data-suffix="%">0%</div>
              <div className="text-xs sm:text-sm md:text-base mt-1 sm:mt-2">Avg Banner CTR</div>
            </div>
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-3 sm:p-4 md:p-6 text-center text-white shadow-lg hover:scale-105 transition-transform">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold stat-counter" data-target="85" data-suffix="%">0%</div>
              <div className="text-xs sm:text-sm md:text-base mt-1 sm:mt-2">Video Engagement</div>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-3 sm:p-4 md:p-6 text-center text-white shadow-lg hover:scale-105 transition-transform">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold stat-counter" data-target="5.2" data-suffix="x">0x</div>
              <div className="text-xs sm:text-sm md:text-base mt-1 sm:mt-2">Interactive ROI</div>
            </div>
          </div>

          {/* Formats Grid - Responsive */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8">
            Our <span className="gradient-text">Ad Formats</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-10 sm:mb-12">
            {formats.map((format, idx) => (
              <div key={idx} className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                  <img 
                    src={format.image} 
                    alt={format.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${format.color} opacity-0 group-hover:opacity-50 transition duration-500`}></div>
                  <div className={`absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${format.iconBg} rounded-lg sm:rounded-xl flex items-center justify-center text-white shadow-lg`}>
                    {format.icon}
                  </div>
                  <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-0.5 sm:py-1">
                    <span className="text-xs sm:text-sm font-bold text-red-600">{format.stats}</span>
                    <span className="text-[10px] sm:text-xs text-gray-500 ml-0.5 sm:ml-1">{format.statLabel}</span>
                  </div>
                </div>
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-red-600 transition">{format.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{format.description}</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {format.sizes.slice(0, 5).map((item, i) => (
                      <span key={i} className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-100 rounded-full text-[10px] sm:text-xs text-gray-600">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Section - Responsive */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-10 sm:mb-12 text-white">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8">Why Choose <span className="text-red-500">Our Ad Formats</span></h2>
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
              <FaGamepad className="text-3xl sm:text-4xl md:text-5xl mx-auto mb-3 sm:mb-4 opacity-80" />
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">Ready to Create Engaging Ads?</h3>
              <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 max-w-2xl mx-auto px-3">
                Let's create stunning ad formats that capture attention, drive engagement, and deliver results for your brand.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
                <button className="bg-white text-red-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Start Creating →
                </button>
                <button className="border-2 border-white text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-white hover:text-red-600 transition-all duration-300">
                  View Portfolio
                </button>
              </div>
              <p className="text-xs sm:text-sm text-gray-200 mt-3 sm:mt-4">No commitment. Free creative consultation.</p>
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

export default AdFormats;