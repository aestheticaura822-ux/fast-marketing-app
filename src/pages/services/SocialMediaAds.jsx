import React, { useEffect, useRef, useState } from 'react';
import { FaInstagram, FaFacebook, FaTiktok, FaLinkedin, FaTwitter, FaYoutube, FaPlay, FaArrowRight, FaCheckCircle, FaChartLine, FaUsers, FaRocket, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const SocialMediaAds = () => {
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

  const platforms = [
    {
      name: "Meta Ads (Facebook & Instagram)",
      icon: <FaFacebook className="text-2xl sm:text-3xl" />,
      iconColor: "text-blue-600",
      color: "from-blue-600 to-indigo-600",
      stats: "2.9B+ Monthly Active Users",
      description: "Reach billions across Facebook and Instagram with precise targeting and engaging ad formats. Perfect for brand awareness and direct response campaigns.",
      features: ["Feed Ads", "Story Ads", "Reels Ads", "Shopping Ads", "Messenger Ads", "WhatsApp Ads"],
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600",
      roi: "320%",
      cpc: "$0.50"
    },
    {
      name: "TikTok Ads",
      icon: <FaTiktok className="text-2xl sm:text-3xl" />,
      iconColor: "text-black",
      color: "from-black to-gray-800",
      stats: "1B+ Monthly Active Users",
      description: "Capture Gen Z and Millennial attention with viral, short-form video content on TikTok. Highest engagement rates among all platforms.",
      features: ["In-Feed Ads", "TopView Ads", "Branded Hashtags", "Branded Effects", "Spark Ads", "Live Ads"],
      image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=600",
      roi: "450%",
      cpc: "$0.30"
    },
    {
      name: "YouTube Ads",
      icon: <FaYoutube className="text-2xl sm:text-3xl" />,
      iconColor: "text-red-600",
      color: "from-red-600 to-red-800",
      stats: "2.5B+ Monthly Active Users",
      description: "Dominate the world's largest video platform with engaging video advertising. Reach users at every stage of the buyer journey.",
      features: ["Skippable Ads", "Non-skippable Ads", "Bumper Ads", "Masthead Ads", "Discovery Ads", "YouTube Shorts"],
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600",
      roi: "280%",
      cpc: "$0.65"
    },
    {
      name: "LinkedIn Ads",
      icon: <FaLinkedin className="text-2xl sm:text-3xl" />,
      iconColor: "text-blue-700",
      color: "from-blue-700 to-blue-900",
      stats: "900M+ Professionals",
      description: "Target B2B decision-makers and professionals with precise job-title targeting. Best for lead generation and B2B marketing.",
      features: ["Sponsored Content", "Message Ads", "Dynamic Ads", "Text Ads", "Video Ads", "Event Ads"],
      image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=600",
      roi: "210%",
      cpc: "$1.20"
    },
    {
      name: "Twitter (X) Ads",
      icon: <FaTwitter className="text-2xl sm:text-3xl" />,
      iconColor: "text-blue-400",
      color: "from-blue-400 to-blue-600",
      stats: "450M+ Monthly Active Users",
      description: "Engage with real-time conversations and trending topics on Twitter. Perfect for brand launches and real-time marketing.",
      features: ["Promoted Tweets", "Promoted Accounts", "Promoted Trends", "Amplify Pre-roll", "Twitter Live"],
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600",
      roi: "190%",
      cpc: "$0.45"
    },
    {
      name: "Pinterest Ads",
      icon: <FaInstagram className="text-2xl sm:text-3xl" />,
      iconColor: "text-pink-600",
      color: "from-red-500 to-pink-600",
      stats: "450M+ Monthly Active Users",
      description: "Reach users actively planning and shopping with visual discovery ads. High purchase intent audience.",
      features: ["Promoted Pins", "Video Pins", "Shopping Ads", "Carousel Ads", "Idea Pins", "Collection Ads"],
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600",
      roi: "350%",
      cpc: "$0.35"
    }
  ];

  const benefits = [
    { icon: <FaUsers className="text-2xl sm:text-3xl" />, title: "Massive Reach", description: "Access to billions of active users globally" },
    { icon: <FaChartLine className="text-2xl sm:text-3xl" />, title: "High Engagement", description: "Average engagement rates up to 5.6%" },
    { icon: <FaRocket className="text-2xl sm:text-3xl" />, title: "Fast Growth", description: "See results within first week" },
    { icon: <FaShieldAlt className="text-2xl sm:text-3xl" />, title: "Brand Safety", description: "Advanced brand protection tools" }
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
          >
            <source src="https://cdn.pixabay.com/video/2024/12/26/248907_medium.mp4" type="video/mp4" />
          </video>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center text-white p-4 sm:p-6">
            <div className="max-w-3xl px-3 sm:px-0">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-red-600/80 rounded-full mb-4 sm:mb-6 backdrop-blur-sm">
                <span className="text-yellow-400 text-sm sm:text-base">📱</span>
                <span className="text-xs sm:text-sm font-semibold">Social Media Advertising</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
                Dominate Social
                <span className="block sm:inline bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"> Media Platforms</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-4 sm:mb-6">
                Meta & YouTube Campaigns That Drive Results — Reach billions, engage audiences, and grow your brand
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button className="bg-red-600 hover:bg-red-700 px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2">
                  <FaPlay size={12} className="sm:w-3.5 sm:h-3.5" /> Start Campaign
                </button>
                <Link to="/services/all" className="border-2 border-white hover:bg-white hover:text-gray-900 px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 text-center">
                  View All Platforms
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
          <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-red-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 mb-8 sm:mb-12 shadow-lg">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                <FaUsers className="text-xl sm:text-2xl text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 text-center sm:text-left">Complete Social Media Advertising Solutions</h2>
            </div>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 text-center sm:text-left">
              "Meet your audience where they spend their time. From Facebook to TikTok, Instagram to LinkedIn — 
              we create data-driven social campaigns that deliver measurable results and real business growth."
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4 mt-4">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-600 text-sm sm:text-base" />
                <span className="text-xs sm:text-sm text-gray-600">6+ Platforms Covered</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-600 text-sm sm:text-base" />
                <span className="text-xs sm:text-sm text-gray-600">5B+ Combined Reach</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-600 text-sm sm:text-base" />
                <span className="text-xs sm:text-sm text-gray-600">AI-Powered Targeting</span>
              </div>
            </div>
          </div>

          {/* Stats Section - Responsive Grid */}
          <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-3 sm:p-4 md:p-6 text-center text-white shadow-lg hover:scale-105 transition-transform">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold stat-counter" data-target="500" data-suffix="+">0+</div>
              <div className="text-xs sm:text-sm md:text-base mt-1 sm:mt-2">Active Social Campaigns</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-3 sm:p-4 md:p-6 text-center text-white shadow-lg hover:scale-105 transition-transform">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold stat-counter" data-target="50" data-suffix="M+">0M+</div>
              <div className="text-xs sm:text-sm md:text-base mt-1 sm:mt-2">Monthly Impressions</div>
            </div>
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-3 sm:p-4 md:p-6 text-center text-white shadow-lg hover:scale-105 transition-transform">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold stat-counter" data-target="5.6" data-suffix="%">0%</div>
              <div className="text-xs sm:text-sm md:text-base mt-1 sm:mt-2">Avg Engagement Rate</div>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-3 sm:p-4 md:p-6 text-center text-white shadow-lg hover:scale-105 transition-transform">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold stat-counter" data-target="320" data-suffix="%">0%</div>
              <div className="text-xs sm:text-sm md:text-base mt-1 sm:mt-2">Average ROI</div>
            </div>
          </div>

          {/* Platforms Grid - Responsive */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8">
            Our <span className="gradient-text">Social Media Platforms</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 md:gap-8 mb-10 sm:mb-12">
            {platforms.map((platform, idx) => (
              <div key={idx} className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
                  <img 
                    src={platform.image} 
                    alt={platform.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${platform.color} opacity-0 group-hover:opacity-50 transition duration-500`}></div>
                  <div className={`absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 drop-shadow-lg ${platform.iconColor}`}>
                    {platform.icon}
                  </div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-black/60 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-0.5 sm:py-1">
                    <span className="text-white text-[10px] sm:text-xs font-semibold">{platform.stats}</span>
                  </div>
                </div>
                <div className="p-4 sm:p-5 md:p-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-3">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold group-hover:text-red-600 transition-colors">{platform.name}</h3>
                    <div className="text-right">
                      <span className="text-xs sm:text-sm font-bold text-red-500">{platform.roi}</span>
                      <div className="text-[10px] sm:text-xs text-gray-400">Avg ROI</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{platform.description}</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    {platform.features.slice(0, 5).map((feature, i) => (
                      <span key={i} className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-100 rounded-full text-[10px] sm:text-xs text-gray-600">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-[10px] sm:text-xs text-gray-400">Avg CPC</span>
                      <div className="text-xs sm:text-sm font-semibold text-gray-800">{platform.cpc}</div>
                    </div>
                    <button className="text-red-600 font-semibold text-xs sm:text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Explore Platform <FaArrowRight size={10} className="sm:w-3 sm:h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Section - Responsive */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-10 sm:mb-12 text-white">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8">Why Choose <span className="text-red-500">Our Social Media Services</span></h2>
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
              <FaRocket className="text-3xl sm:text-4xl md:text-5xl mx-auto mb-3 sm:mb-4 opacity-80" />
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">Ready to Go Viral?</h3>
              <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 max-w-2xl mx-auto px-3">
                Let's create social media campaigns that capture attention, drive engagement, and grow your brand exponentially.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
                <button className="bg-white text-red-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Start Your Campaign →
                </button>
                <button className="border-2 border-white text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-white hover:text-red-600 transition-all duration-300">
                  Get Free Consultation
                </button>
              </div>
              <p className="text-xs sm:text-sm text-gray-200 mt-3 sm:mt-4">No commitment. Free strategy session.</p>
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

export default SocialMediaAds;