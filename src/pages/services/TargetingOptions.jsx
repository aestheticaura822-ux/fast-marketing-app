import React, { useEffect, useRef, useState } from 'react';
import { FaUsers, FaMapMarkerAlt, FaChartLine, FaMobile, FaClock, FaTags, FaPlay, FaArrowRight, FaCheckCircle, FaBullseye, FaRocket, FaShieldAlt, FaTachometerAlt, FaBrain } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const TargetingOptions = () => {
  const statsRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const location = useLocation();

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

  const serviceNav = [
    { name: "Advertising Options", path: "/services/advertising-options", icon: "📢" },
    { name: "Social Media Ads", path: "/services/social-media-ads", icon: "📱" },
    { name: "Ad Formats", path: "/services/ad-formats", icon: "🎨" },
    { name: "Targeting Options", path: "/services/targeting-options", icon: "🎯" },
    { name: "Ad Placement", path: "/services/ad-placement", icon: "📍" },
    { name: "All Services", path: "/services/all", icon: "📋" }
  ];

  const targetingMethods = [
    {
      icon: <FaUsers className="text-4xl" />,
      title: "Demographic Targeting",
      description: "Reach specific audiences based on age, gender, income, education, and more. Perfect for segmenting your ideal customers.",
      options: ["Age: 13-65+", "Gender: Male/Female/All", "Income Levels", "Education Status", "Marital Status", "Parental Status"],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600",
      stat: "85%",
      statLabel: "More Relevant",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaMapMarkerAlt className="text-4xl" />,
      title: "Geographic Targeting",
      description: "Target users by location from country level down to specific radius around a point. Local or global reach.",
      options: ["Countries", "Cities", "Postal Codes", "Radius (1-500km)", "Location Groups", "Custom Maps"],
      image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600",
      stat: "70%",
      statLabel: "Higher Local CTR",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaChartLine className="text-4xl" />,
      title: "Behavioral Targeting",
      description: "Reach users based on their online behavior, purchase intent, and interests. Target high-intent audiences.",
      options: ["Purchase Intent", "Website Visits", "App Activity", "Search History", "Content Engagement", "Past Purchases"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
      stat: "3x",
      statLabel: "Higher Conversion",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaMobile className="text-4xl" />,
      title: "Device Targeting",
      description: "Optimize your ads for specific devices, operating systems, and connection types. Reach users on their preferred devices.",
      options: ["Mobile Devices", "Desktop", "Tablets", "iOS/Android", "WiFi Only", "Carriers", "Device Models"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600",
      stat: "40%",
      statLabel: "Better Experience",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <FaClock className="text-4xl" />,
      title: "Time & Dayparting",
      description: "Schedule your ads to appear at optimal times for maximum conversion. Reach users when they're most active.",
      options: ["Hour of Day", "Day of Week", "Custom Schedules", "Time Zones", "Holiday Periods", "Seasonal Timing"],
      image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=600",
      stat: "35%",
      statLabel: "Lower CPC",
      color: "from-yellow-500 to-amber-500"
    },
    {
      icon: <FaTags className="text-4xl" />,
      title: "Keyword & Interest Targeting",
      description: "Target users based on their search queries and expressed interests. Capture users actively looking for solutions.",
      options: ["Keywords", "Interests", "Affinity Audiences", "In-market Audiences", "Custom Intent", "Lookalike Audiences"],
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600",
      stat: "5x",
      statLabel: "Higher Intent",
      color: "from-red-500 to-orange-500"
    }
  ];

  const benefits = [
    { icon: <FaBullseye className="text-3xl" />, title: "Precision Targeting", description: "99.9% accuracy in audience targeting" },
    { icon: <FaBrain className="text-3xl" />, title: "AI-Powered", description: "Machine learning optimized targeting" },
    { icon: <FaRocket className="text-3xl" />, title: "Higher ROI", description: "Reduce wasted ad spend by up to 40%" },
    { icon: <FaShieldAlt className="text-3xl" />, title: "Privacy Compliant", description: "GDPR & CCPA compliant targeting" }
  ];

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content with proper padding */}
      <div style={{ paddingTop: `${navbarHeight}px` }}>
        {/* Service Navigation Bar */}
        <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
          <div className="container-custom">
            <div className="flex overflow-x-auto gap-2 py-4 scrollbar-hide justify-center">
              {serviceNav.map((service, idx) => (
                <Link
                  key={idx}
                  to={service.path}
                  className={`flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full whitespace-nowrap transition-all duration-300 text-sm md:text-base ${
                    location.pathname === service.path
                      ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="text-base md:text-lg">{service.icon}</span>
                  <span>{service.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Section with Video Background */}
        <div className="relative rounded-2xl overflow-hidden mb-12 shadow-2xl mx-5 md:mx-8 lg:mx-10 mt-6">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[400px] md:h-[500px] object-cover"
            
          >
            <source src="https://cdn.pixabay.com/video/2016/01/29/1992-153555258_medium.mp4" type="video/mp4" />
          </video>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center text-white p-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/80 rounded-full mb-6 backdrop-blur-sm">
                <span className="text-yellow-400">🎯</span>
                <span className="text-sm font-semibold">Precision Audience Targeting</span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                Hit Your
                <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"> Perfect Audience</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-6">
                Precision targeting options that ensure your ads reach the right people, at the right time, on the right devices
              </p>
              <div className="flex gap-4 justify-center">
                <button className="bg-red-600 hover:bg-red-700 px-6 md:px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2">
                  <FaPlay size={14} /> Start Targeting
                </button>
                <Link to="/services/all" className="border-2 border-white hover:bg-white hover:text-gray-900 px-6 md:px-8 py-3 rounded-full font-semibold transition-all duration-300">
                  Explore All Options
                </Link>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-2 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>

        <div className="container-custom">
          {/* Overview Section */}
          <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-6 md:p-8 mb-12 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <FaBullseye className="text-2xl text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Precision Targeting Solutions</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              "Reach the right people with surgical precision. Our advanced targeting options ensure your ads are seen by 
              users most likely to convert, maximizing your ROI and minimizing wasted ad spend."
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-600" />
                <span className="text-sm text-gray-600">6+ Targeting Methods</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-600" />
                <span className="text-sm text-gray-600">99.9% Accuracy</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-600" />
                <span className="text-sm text-gray-600">Real-time Optimization</span>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-4 md:p-6 text-center text-white shadow-lg hover:scale-105 transition-transform">
              <div className="text-3xl md:text-4xl font-bold stat-counter" data-target="99.9" data-suffix="%">0%</div>
              <div className="text-sm md:text-base mt-2">Targeting Accuracy</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-4 md:p-6 text-center text-white shadow-lg hover:scale-105 transition-transform">
              <div className="text-3xl md:text-4xl font-bold stat-counter" data-target="500" data-suffix="+">0+</div>
              <div className="text-sm md:text-base mt-2">Targeting Options</div>
            </div>
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-4 md:p-6 text-center text-white shadow-lg hover:scale-105 transition-transform">
              <div className="text-3xl md:text-4xl font-bold stat-counter" data-target="40" data-suffix="%">0%</div>
              <div className="text-sm md:text-base mt-2">Lower Ad Spend</div>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-4 md:p-6 text-center text-white shadow-lg hover:scale-105 transition-transform">
              <div className="text-3xl md:text-4xl font-bold stat-counter" data-target="3" data-suffix="x">0x</div>
              <div className="text-sm md:text-base mt-2">Better Conversion</div>
            </div>
          </div>

          {/* Targeting Methods Grid */}
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Our <span className="gradient-text">Targeting Methods</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-12">
            {targetingMethods.map((method, idx) => (
              <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={method.image} 
                    alt={method.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-50 transition duration-500`}></div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-2 shadow-lg">
                    <div className="text-red-600">{method.icon}</div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-sm font-bold text-red-600">{method.stat}</span>
                    <span className="text-xs text-gray-500 ml-1">{method.statLabel}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-red-600 transition">{method.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{method.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {method.options.map((option, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                        {option}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 mb-12 text-white">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Why Choose <span className="text-red-500">Our Targeting</span></h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 transition-colors duration-300">
                    <div className="text-red-500 group-hover:text-white transition-colors">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Precision Stats Card */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl mb-12">
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
            
            <div className="relative p-8 md:p-12 text-center text-white z-10">
              <FaTachometerAlt className="text-5xl mx-auto mb-4 opacity-80" />
              <h3 className="text-4xl md:text-6xl font-bold mb-3">99.9%</h3>
              <p className="text-xl md:text-2xl mb-4">Precision Targeting Accuracy</p>
              <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto text-gray-200">
                Hit your exact audience with data-driven surgical precision, minimizing waste and maximizing conversion. 
                Our AI-powered targeting ensures every ad dollar works harder for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Start Precision Targeting →
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-all duration-300">
                  Get Targeting Strategy
                </button>
              </div>
              <p className="text-sm text-gray-200 mt-4">No commitment. Free targeting consultation.</p>
            </div>
          </div>

          {/* Back to Home Link */}
          <div className="mt-8 text-center pb-12">
            <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-red-600 transition">
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

export default TargetingOptions;