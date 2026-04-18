import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaChevronRight } from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer';

const ServicesLayout = ({ title, subtitle, children, currentService }) => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    // Get navbar height dynamically
    const navbar = document.querySelector('nav');
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
    
    // Update on resize
    const handleResize = () => {
      if (navbar) {
        setNavbarHeight(navbar.offsetHeight);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const serviceLinks = [
    { name: "Advertising Options", path: "/services/advertising-options", icon: "📢" },
    { name: "Social Media Ads", path: "/services/social-media-ads", icon: "📱" },
    { name: "Ad Formats", path: "/services/ad-formats", icon: "🎨" },
    { name: "Targeting Options", path: "/services/targeting-options", icon: "🎯" },
    { name: "Ad Placement", path: "/services/ad-placement", icon: "📍" },
    { name: "All Services", path: "/services/all", icon: "📋" }
  ];

  return (
    <>
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content with proper padding */}
      <div className="pt-0">
        {/* Hero Section for Services */}
        <section 
          className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 text-white"
          style={{ paddingTop: `${navbarHeight + 40}px`, paddingBottom: '80px' }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-data-server-connections-30077-large.mp4" type="video/mp4" />
          </video>
          
          <div className="container-custom relative z-10">
            <Link to="/" className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition group">
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">{subtitle}</p>
          </div>
        </section>

        {/* Service Navigation - Breadcrumb Style */}
        <div className="bg-white border-b border-gray-200 shadow-sm">
          <div className="container-custom py-4">
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <Link to="/" className="text-gray-500 hover:text-red-600 transition">Home</Link>
              <FaChevronRight className="text-gray-400 text-xs" />
              <Link to="/services" className="text-gray-500 hover:text-red-600 transition">Services</Link>
              <FaChevronRight className="text-gray-400 text-xs" />
              <span className="text-red-600 font-semibold">{title}</span>
            </div>
            
            {/* Service Sub-navigation */}
            <div className="flex flex-wrap gap-3 mt-4">
              {serviceLinks.map((service, idx) => (
                <Link
                  key={idx}
                  to={service.path}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    currentService === service.name
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-600'
                  }`}
                >
                  <span className="mr-2">{service.icon}</span>
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="py-12 md:py-16 bg-gray-50">
          <div className="container-custom">
            {children}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default ServicesLayout;