import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaBolt, FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'About Us', href: 'about' },
    { name: 'Services', href: 'services' },
    { name: 'Blog', href: 'blog' },
    { name: 'FAQ', href: 'faq' },
    { name: 'Contact', href: 'contact' }
  ];
  
  const services = [
    { name: 'IT Solutions', href: '#' },
    { name: 'Marketing', href: '#' },
    { name: 'Printing & Packaging', href: '#' },
    { name: 'Employment Consultancy', href: '#' },
    { name: 'Real Estate', href: '#' }
  ];
  
  const contactInfo = [
    { icon: '📍', text: '123 Business Avenue, Karachi, Pakistan' },
    { icon: '📞', text: '+92 300 1234567' },
    { icon: '✉️', text: 'info@fastmarketing.com' }
  ];
  
  const socialIcons = [
    { icon: FaFacebook, href: 'https://facebook.com/fastmarketing', color: 'hover:bg-blue-600' },
    { icon: FaTwitter, href: 'https://twitter.com/fastmarketing', color: 'hover:bg-blue-400' },
    { icon: FaInstagram, href: 'https://instagram.com/fastmarketing', color: 'hover:bg-pink-600' },
    { icon: FaLinkedin, href: 'https://linkedin.com/comapny/fastmarketing', color: 'hover:bg-blue-700' },
    { icon: FaYoutube, href: 'https://youtube.com/@fastmarketing', color: 'hover:bg-red-600' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-red-600 rounded-full blur-xl opacity-50"></div>
                <FaBolt className="relative text-3xl text-red-500 animate-float" />
              </div>
              <div>
                <h3 className="text-xl font-bold gradient-text">Fast Marketing</h3>
                <p className="text-xs text-gray-400">PAKISTAN'S #1 AGENCY</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Delivering excellence across IT, Marketing, Printing, Education, 
              Employment, Real Estate, and Hospitality sectors since 2015.
            </p>
            <div className="flex gap-3 pt-2">
              {socialIcons.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 ${social.color}`}
                  >
                    <Icon className="text-sm" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-5 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-red-500 rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-red-500 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-5 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-red-500 rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {services.map((service, idx) => (
                <li key={idx}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-red-500 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-red-500 rounded-full group-hover:w-2 transition-all duration-300"></span>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-5 relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-red-500 rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {contactInfo.map((info, idx) => (
                <li key={idx} className="flex gap-3 text-gray-300 text-sm">
                  <span className="text-red-500 mt-0.5">{info.icon}</span>
                  <span>{info.text}</span>
                </li>
              ))}
            </ul>
            
            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-2">Subscribe to Newsletter</h5>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button className="bg-red-600 hover:bg-red-700 px-3 py-2 rounded-lg transition-all duration-300">
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Fast Marketing. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;