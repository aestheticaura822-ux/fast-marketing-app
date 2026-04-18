import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes, FaChevronDown, FaArrowRight, FaChartLine, FaUsers, FaAd, FaBullseye, FaMapMarkerAlt, FaListAlt, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaTiktok } from 'react-icons/fa';
import logo from '../assets/logo-rm.png'; // ✅ Logo import karo

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const serviceLinks = [
    { name: "Advertising Options", path: "/services/advertising-options", icon: FaAd, description: "Multi-platform ad solutions", color: "from-blue-500 to-cyan-500" },
    { name: "Social Media Ads", path: "/services/social-media-ads", icon: FaUsers, description: "Meta, TikTok, LinkedIn, Twitter", color: "from-purple-500 to-pink-500" },
    { name: "Ad Formats", path: "/services/ad-formats", icon: FaChartLine, description: "Video, Display, Native, Carousel", color: "from-green-500 to-emerald-500" },
    { name: "Targeting Options", path: "/services/targeting-options", icon: FaBullseye, description: "Precise audience targeting", color: "from-orange-500 to-red-500" },
    { name: "Ad Placement", path: "/services/ad-placement", icon: FaMapMarkerAlt, description: "Strategic ad positioning", color: "from-indigo-500 to-purple-500" },
    { name: "All Services", path: "/services/all", icon: FaListAlt, description: "View complete offerings", color: "from-gray-600 to-gray-800" }
  ];

  const socialPlatforms = [
    { name: "Facebook Ads", icon: FaFacebook, color: "hover:bg-blue-600" },
    { name: "Instagram Ads", icon: FaInstagram, color: "hover:bg-pink-600" },
    { name: "Twitter Ads", icon: FaTwitter, color: "hover:bg-blue-400" },
    { name: "LinkedIn Ads", icon: FaLinkedin, color: "hover:bg-blue-700" },
    { name: "YouTube Ads", icon: FaYoutube, color: "hover:bg-red-600" },
    { name: "TikTok Ads", icon: FaTiktok, color: "hover:bg-black" }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-2xl py-3' : 'bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-sm py-5'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo - Image Logo */}
          <a href="/" className="flex items-center gap-3 cursor-pointer group">
  <div className="relative">
    <div className="absolute inset-0 bg-red-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
    <img 
      src={logo} 
      alt="Fast Marketing Logo" 
      className="relative w-14 h-12 md:w-16 md:h-16 lg:w-20 lg:h-12 object-contain group-hover:scale-110 transition-transform duration-300"
    />
  </div>
  <div>
    <div className="text-lg md:text-xl lg:text-2xl font-extrabold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
      Fast Marketing
    </div>
    <div className="text-xs text-gray-500 tracking-wider hidden sm:block font-medium">PAKISTAN'S #1 AGENCY</div>
  </div>
</a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 lg:gap-8 items-center">
            {/* Services Dropdown */}
            <div 
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button className="text-gray-700 hover:text-red-600 transition-all duration-300 font-medium relative group flex items-center gap-1.5 py-2">
                Services
                <FaChevronDown className={`text-xs transition-all duration-300 ${servicesDropdownOpen ? 'rotate-180 text-red-600' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-800 group-hover:w-full transition-all duration-300"></span>
              </button>
              
              {/* Premium Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-[700px] bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in border border-gray-100">
                  <div className="grid grid-cols-2 gap-1 p-3">
                    {/* Main Services */}
                    <div className="space-y-1">
                      <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Core Services</div>
                      {serviceLinks.map((service, idx) => {
                        const Icon = service.icon;
                        return (
                          <a
                            key={idx}
                            href={service.path}
                            className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-red-50 hover:to-transparent transition-all duration-300 group"
                          >
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                              <Icon className="text-white text-lg" />
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-gray-800 group-hover:text-red-600 transition-colors">
                                {service.name}
                              </div>
                              <div className="text-xs text-gray-500">{service.description}</div>
                            </div>
                            <FaArrowRight className="text-gray-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-sm" />
                          </a>
                        );
                      })}
                    </div>

                    {/* Social Media Platforms */}
                    <div className="border-l border-gray-100 pl-3">
                      <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Ad Platforms</div>
                      <div className="space-y-1">
                        {socialPlatforms.map((platform, idx) => {
                          const Icon = platform.icon;
                          return (
                            <a
                              key={idx}
                              href="#"
                              className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-gradient-to-r hover:from-red-50 hover:to-transparent transition-all duration-300 group"
                            >
                              <div className={`w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center group-hover:${platform.color} transition-all duration-300`}>
                                <Icon className="text-gray-600 group-hover:text-white text-sm" />
                              </div>
                              <span className="text-gray-700 group-hover:text-red-600 transition-colors flex-1">
                                {platform.name}
                              </span>
                              <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">Learn more →</span>
                            </a>
                          );
                        })}
                      </div>

                      {/* Special Offer */}
                      <div className="mt-4 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl mx-2">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-2xl">🎯</span>
                          <span className="font-bold text-gray-800">Free Consultation</span>
                        </div>
                        <p className="text-xs text-gray-600 mb-2">Get personalized ad strategy for your business</p>
                        <button className="text-red-600 text-xs font-semibold hover:gap-2 transition-all inline-flex items-center gap-1">
                          Claim Offer <FaArrowRight size={10} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Bar */}
                  <div className="border-t border-gray-100 bg-gray-50 px-4 py-3 flex justify-between items-center">
                    <div className="text-xs text-gray-500">
                      ⚡ Trusted by 500+ businesses in Pakistan
                    </div>
                    <a href="/services/all" className="text-red-600 text-xs font-semibold hover:underline flex items-center gap-1">
                      View All Services <FaArrowRight size={10} />
                    </a>
                  </div>
                </div>
              )}
            </div>
            
            <a href="/faq" className="text-gray-700 hover:text-red-600 transition-all duration-300 font-medium relative group py-2">
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-800 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="/blog" className="text-gray-700 hover:text-red-600 transition-all duration-300 font-medium relative group py-2">
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-800 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="/about" className="text-gray-700 hover:text-red-600 transition-all duration-300 font-medium relative group py-2">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-800 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="/contact" className="text-gray-700 hover:text-red-600 transition-all duration-300 font-medium relative group py-2">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-800 group-hover:w-full transition-all duration-300"></span>
            </a>
            
            {/* CTA Button */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-800 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
              <button className="relative bg-gradient-to-r from-red-600 to-red-700 text-white px-7 py-2.5 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                Get Started
                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-red-50 transition-all duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <FaTimes className="text-xl text-red-600" />
            ) : (
              <FaBars className="text-xl text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden animate-fade-in" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Enhanced Mobile Menu */}
      <div className={`md:hidden fixed top-[73px] left-0 right-0 bg-white shadow-2xl z-50 transition-all duration-500 ${
        mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}>
        <div className="max-h-[calc(100vh-73px)] overflow-y-auto">
          {/* Services Section */}
          <div className="border-b border-gray-100">
            <div className="px-6 py-4 bg-gradient-to-r from-red-50 to-orange-50">
              <div className="font-extrabold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                Our Services
              </div>
              <div className="grid grid-cols-1 gap-2">
                {serviceLinks.map((service, idx) => {
                  const Icon = service.icon;
                  return (
                    <a
                      key={idx}
                      href={service.path}
                      className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl hover:shadow-md transition-all"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                        <Icon className="text-white text-lg" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-800">{service.name}</div>
                        <div className="text-xs text-gray-500">{service.description}</div>
                      </div>
                      <FaArrowRight className="text-gray-300 text-sm" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="py-2">
            <a href="/faq" className="block px-6 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition font-medium" onClick={() => setMobileMenuOpen(false)}>
              FAQ
            </a>
            <a href="/blog" className="block px-6 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition font-medium" onClick={() => setMobileMenuOpen(false)}>
              Blog
            </a>
            <a href="/about" className="block px-6 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition font-medium" onClick={() => setMobileMenuOpen(false)}>
              About
            </a>
            <a href="/contact" className="block px-6 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition font-medium" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="p-6 pt-2">
            <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full font-semibold w-full hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group">
              Get Started
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Trust Badge */}
          <div className="px-6 pb-6 text-center">
            <p className="text-xs text-gray-400">⚡ Trusted by 500+ businesses in Pakistan</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;