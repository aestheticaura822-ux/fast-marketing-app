import React, { useEffect, useRef, useState } from 'react';
import { FaMapMarkerAlt, FaPlay, FaArrowRight, FaCheckCircle, FaChartLine, FaGlobe, FaMobile, FaEnvelope, FaSearch, FaVideo, FaThLarge, FaRocket, FaShieldAlt, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const AdPlacement = () => {
  const statsRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

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

  const placements = [
    {
      zone: "Display Network",
      icon: <FaThLarge className="text-2xl sm:text-3xl" />,
      placements: ["Google Display Network", "Programmatic Direct", "Private Marketplace", "Open Auction", "Native Display", "Rich Media"],
      description: "Reach 90% of global internet users across millions of websites and apps with visually engaging banner ads.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600",
      reach: "90%+ Global Reach",
      ctr: "0.35%",
      color: "from-blue-500 to-cyan-500"
    },
    {
      zone: "Social Media Feeds",
      icon: <FaGlobe className="text-2xl sm:text-3xl" />,
      placements: ["Instagram Feed", "Facebook News Feed", "TikTok For You", "LinkedIn Feed", "Twitter Timeline", "Pinterest Feed"],
      description: "Integrate seamlessly into user's social media experience for natural engagement and higher conversion rates.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600",
      reach: "4.5B+ Monthly Users",
      ctr: "1.2%",
      color: "from-purple-500 to-pink-500"
    },
    {
      zone: "Video Platforms",
      icon: <FaVideo className="text-2xl sm:text-3xl" />,
      placements: ["Pre-roll", "Mid-roll", "Post-roll", "In-stream", "Out-stream", "Connected TV", "YouTube Shorts"],
      description: "Capture attention with video content on the world's largest video platforms. Highest engagement rates.",
      image: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?w=600",
      reach: "3B+ Monthly Viewers",
      ctr: "1.8%",
      color: "from-red-500 to-orange-500"
    },
    {
      zone: "Search Results",
      icon: <FaSearch className="text-2xl sm:text-3xl" />,
      placements: ["Top of Search", "Bottom of Search", "Sidebar", "Shopping Tab", "Image Pack", "Video Carousel"],
      description: "Appear when users are actively searching for products or services like yours. Highest intent traffic.",
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600",
      reach: "8.5B+ Daily Searches",
      ctr: "2.5%",
      color: "from-green-500 to-emerald-500"
    },
    {
      zone: "In-App Placements",
      icon: <FaMobile className="text-2xl sm:text-3xl" />,
      placements: ["Mobile Games", "Utility Apps", "News Apps", "Streaming Apps", "E-commerce Apps", "Fitness Apps"],
      description: "Reach users within their favorite mobile applications. Perfect for mobile-first targeting strategies.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600",
      reach: "5B+ App Users",
      ctr: "0.85%",
      color: "from-indigo-500 to-purple-500"
    },
    {
      zone: "Email & Newsletters",
      icon: <FaEnvelope className="text-2xl sm:text-3xl" />,
      placements: ["Inbox Promotions", "Newsletter Ads", "Transactional Emails", "Dedicated Sends", "Welcome Series", "Abandoned Cart"],
      description: "Land directly in your audience's inbox with targeted email placements. High ROI channel.",
      image: "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?w=600",
      reach: "4B+ Email Accounts",
      ctr: "2.1%",
      color: "from-yellow-500 to-amber-500"
    }
  ];

  const benefits = [
    { icon: <FaGlobe className="text-2xl sm:text-3xl" />, title: "Global Reach", description: "Access audiences across 200+ countries" },
    { icon: <FaChartLine className="text-2xl sm:text-3xl" />, title: "Higher CTR", description: "Strategic placement = better results" },
    { icon: <FaRocket className="text-2xl sm:text-3xl" />, title: "Fast Delivery", description: "Real-time bidding and instant placement" },
    { icon: <FaShieldAlt className="text-2xl sm:text-3xl" />, title: "Brand Safe", description: "Premium verified placements only" }
  ];

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <FaSpinner className="text-4xl sm:text-5xl text-red-600 animate-spin mx-auto mb-4" />
            <p className="text-gray-600 text-sm sm:text-base">Loading Ad Placement solutions...</p>
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
            <source src="https://cdn.pixabay.com/video/2016/05/12/3182-166339036_medium.mp4" type="video/mp4" />
          </video>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center text-white p-4 sm:p-6">
            <div className="max-w-3xl px-2 sm:px-4">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-red-600/80 rounded-full mb-4 sm:mb-6 backdrop-blur-sm">
                <span className="text-yellow-400 text-sm sm:text-base">📍</span>
                <span className="text-xs sm:text-sm font-semibold">Strategic Ad Placement</span>
              </div>
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
                Put Your Ads in the
                <br className="block sm:hidden" />
                <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"> Right Place</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-4 sm:mb-6 px-2">
                Strategic Visibility Solutions — Reach your audience where they are most likely to engage and convert
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button className="bg-red-600 hover:bg-red-700 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
                  <FaPlay size={14} /> Start Placement
                </button>
                <Link to="/services/all" className="border-2 border-white hover:bg-white hover:text-gray-900 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full font-semibold transition-all duration-300 text-center text-sm sm:text-base">
                  View All Placements
                </Link>
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
          <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 mb-8 sm:mb-12 shadow-lg">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <FaMapMarkerAlt className="text-xl sm:text-2xl text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">Strategic Ad Placement Solutions</h2>
            </div>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
              "The right message at the right place makes all the difference. Our strategic ad placement solutions ensure 
              your brand appears where your audience is most receptive, maximizing engagement and conversion rates."
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 mt-3 sm:mt-4">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <FaCheckCircle className="text-green-600 text-sm sm:text-base" />
                <span className="text-xs sm:text-sm text-gray-600">6+ Placement Categories</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <FaCheckCircle className="text-green-600 text-sm sm:text-base" />
                <span className="text-xs sm:text-sm text-gray-600">90%+ Global Reach</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <FaCheckCircle className="text-green-600 text-sm sm:text-base" />
                <span className="text-xs sm:text-sm text-gray-600">Real-time Optimization</span>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-3 sm:p-4 md:p-6 text-center text-white shadow-lg hover:scale-105 transition-transform">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold stat-counter" data-target="90" data-suffix="%">0%</div>
              <div className="text-xs sm:text-sm md:text-base mt-1 sm:mt-2">Global Reach</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-3 sm:p-4 md:p-6 text-center text-white shadow-lg hover:scale-105 transition-transform">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold stat-counter" data-target="8.5" data-suffix="B+">0B+</div>
              <div className="text-xs sm:text-sm md:text-base mt-1 sm:mt-2">Daily Searches</div>
            </div>
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-3 sm:p-4 md:p-6 text-center text-white shadow-lg hover:scale-105 transition-transform">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold stat-counter" data-target="2.5" data-suffix="%">0%</div>
              <div className="text-xs sm:text-sm md:text-base mt-1 sm:mt-2">Avg Search CTR</div>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-3 sm:p-4 md:p-6 text-center text-white shadow-lg hover:scale-105 transition-transform">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold stat-counter" data-target="10000" data-suffix="+">0+</div>
              <div className="text-xs sm:text-sm md:text-base mt-1 sm:mt-2">Publisher Partners</div>
            </div>
          </div>

          {/* Placements Grid */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8">
            Our <span className="gradient-text">Placement Categories</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
            {placements.map((placement, idx) => (
              <div key={idx} className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img 
                    src={placement.image} 
                    alt={placement.zone} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${placement.color} opacity-0 group-hover:opacity-50 transition duration-500`}></div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white drop-shadow-lg">
                    {placement.icon}
                  </div>
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                    <span className="text-white text-[10px] sm:text-xs font-semibold bg-black/60 backdrop-blur-sm px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                      {placement.reach}
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-5 md:p-6">
                  <div className="flex justify-between items-start mb-2 sm:mb-3">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold group-hover:text-red-600 transition leading-tight">
                      {placement.zone}
                    </h3>
                    <div className="text-right ml-2">
                      <span className="text-sm font-bold text-red-500">{placement.ctr}</span>
                      <div className="text-[10px] sm:text-xs text-gray-400">Avg CTR</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{placement.description}</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {placement.placements.slice(0, 4).map((p, i) => (
                      <span key={i} className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-100 rounded-full text-[10px] sm:text-xs text-gray-600">
                        {p}
                      </span>
                    ))}
                    {placement.placements.length > 4 && (
                      <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-100 rounded-full text-[10px] sm:text-xs text-gray-400">
                        +{placement.placements.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 mb-8 sm:mb-12 text-white">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8">
              Why Choose <span className="text-red-500">Our Ad Placements</span>
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

          {/* CTA Section */}
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
              <FaMapMarkerAlt className="text-3xl sm:text-4xl md:text-5xl mx-auto mb-3 sm:mb-4 opacity-80" />
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">Ready for Strategic Placement?</h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 max-w-2xl mx-auto px-2">
                Let's put your ads where they'll perform best. Get started with our expert placement strategy today.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button className="bg-white text-red-600 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm sm:text-base">
                  Start Placement →
                </button>
                <button className="border-2 border-white text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 text-sm sm:text-base">
                  Get Placement Strategy
                </button>
              </div>
              <p className="text-xs sm:text-sm text-gray-200 mt-3 sm:mt-4">No commitment. Free consultation.</p>
            </div>
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

export default AdPlacement;