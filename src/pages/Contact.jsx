import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaWhatsapp, FaPhone, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaTiktok, FaPaperPlane, FaCheckCircle, FaArrowRight, FaSpinner } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://fast-marketing-backend.vercel.app', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setErrorMessage(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Network error. Please check if backend server is running.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    { icon: <FaEnvelope className="text-xl sm:text-2xl" />, title: "Email Enquiries", value: "xfastgroup001@gmail.com", link: "mailto:xfastgroup001@gmail.com", color: "from-blue-500 to-cyan-500" },
    { icon: <FaWhatsapp className="text-xl sm:text-2xl" />, title: "WhatsApp Us", value: "+92 325 2467463", link: "https://wa.me/923252467463", color: "from-green-500 to-emerald-500" },
    { icon: <FaPhone className="text-xl sm:text-2xl" />, title: "Direct Call", value: "+92 321 0846667", link: "tel:+923210846667", color: "from-purple-500 to-pink-500" },
    { icon: <FaMapMarkerAlt className="text-xl sm:text-2xl" />, title: "Regional Hub", value: "101A, J1 Block, Valencia Town, Lahore, Pakistan", link: "#", color: "from-red-500 to-orange-500" },
    { icon: <FaClock className="text-xl sm:text-2xl" />, title: "Operational Hours", value: "Mon - Sat: 9AM to 6PM", link: "#", color: "from-indigo-500 to-purple-500" }
  ];

  const socialLinks = [
    { icon: <FaFacebook className="text-xl sm:text-2xl" />, name: "Facebook", link: "https://facebook.com", color: "hover:bg-blue-600" },
    { icon: <FaInstagram className="text-xl sm:text-2xl" />, name: "Instagram", link: "https://instagram.com", color: "hover:bg-pink-600" },
    { icon: <FaTwitter className="text-xl sm:text-2xl" />, name: "Twitter", link: "https://twitter.com", color: "hover:bg-blue-400" },
    { icon: <FaLinkedin className="text-xl sm:text-2xl" />, name: "LinkedIn", link: "https://linkedin.com", color: "hover:bg-blue-700" },
    { icon: <FaYoutube className="text-xl sm:text-2xl" />, name: "YouTube", link: "https://youtube.com", color: "hover:bg-red-600" },
    { icon: <FaTiktok className="text-xl sm:text-2xl" />, name: "TikTok", link: "https://tiktok.com", color: "hover:bg-black" }
  ];

  const services = [
    "Digital Transformation",
    "Performance Marketing",
    "Social Media Management",
    "SEO Optimization",
    "Brand Strategy",
    "Content Creation"
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section - Responsive */}
      <section className="relative overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-20 md:pt-36 md:pb-24">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-marketing-animation-1201-large.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        
        <div className="container-custom relative z-10 text-center text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-red-600/80 rounded-full mb-4 sm:mb-6 backdrop-blur-sm">
            <span className="text-yellow-400 text-sm sm:text-base">📞</span>
            <span className="text-xs sm:text-sm font-semibold">Get In Touch</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 px-4">
            LET'S
            <span className="block sm:inline bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"> SCALE YOUR BRAND</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Ready to transform your digital presence? Our team of strategists and creatives is standing by to help you lead your industry.
          </p>
        </div>
      </section>

      <div className="container-custom py-8 sm:py-12 md:py-16">
        {/* Contact Info Cards - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12">
          {contactInfo.map((info, idx) => (
            <a
              key={idx}
              href={info.link}
              className={`group bg-gradient-to-r ${info.color} rounded-xl p-3 sm:p-4 md:p-5 text-center text-white shadow-lg hover:scale-105 transition-all duration-300`}
            >
              <div className="flex justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                {info.icon}
              </div>
              <div className="text-xs sm:text-sm font-semibold mb-0.5 sm:mb-1">{info.title}</div>
              <div className="text-[10px] sm:text-xs break-words px-1">{info.value}</div>
            </a>
          ))}
        </div>

        {/* Main Contact Section - Responsive Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 order-2 lg:order-1">
            <div className="mb-5 sm:mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Send an Enquiry</h2>
              <p className="text-gray-500 text-xs sm:text-sm">Expect a detailed proposal within 24 hours of submission.</p>
            </div>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center animate-fade-in">
                <FaCheckCircle className="text-4xl sm:text-5xl text-green-500 mx-auto mb-3" />
                <h3 className="text-lg sm:text-xl font-semibold text-green-700 mb-2">Message Sent!</h3>
                <p className="text-green-600 text-sm sm:text-base">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                {errorMessage && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-center">
                    <p className="text-red-600 text-xs sm:text-sm">{errorMessage}</p>
                  </div>
                )}
                
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Abdullah Khan"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all outline-none text-sm sm:text-base"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Enquiry@company.pk"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all outline-none text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="e.g. +92 3XX XXXXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all outline-none text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                    Service Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all outline-none bg-white text-sm sm:text-base"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, idx) => (
                      <option key={idx} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Outline your goals and what you aim to achieve with Fast Marketing..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all outline-none resize-none text-sm sm:text-base"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-2.5 sm:py-3 rounded-xl font-semibold hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {isLoading ? (
                    <>Sending... <FaSpinner className="animate-spin" /></>
                  ) : (
                    <>DISPATCH MESSAGE <FaPaperPlane className="text-sm sm:text-base" /></>
                  )}
                </button>

                <p className="text-[10px] sm:text-xs text-gray-400 text-center mt-4">
                  By submitting, you agree to our Privacy Policy and Terms of Service.
                </p>
              </form>
            )}
          </div>

          {/* Right Side - Info & Map */}
          <div className="space-y-5 sm:space-y-6 order-1 lg:order-2">
            {/* Digital Footprint */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-5 sm:p-6 text-white">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
                <span className="text-xl sm:text-2xl">🌐</span> Digital Footprint
              </h3>
              <p className="text-gray-300 text-sm sm:text-base mb-4">
                Connect with us on social media for the latest updates, insights, and success stories.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 ${social.color} hover:text-white transition-all duration-300 hover:scale-110`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Map Location */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-3 sm:p-4 bg-gray-50 border-b border-gray-100">
                <h3 className="font-semibold text-sm sm:text-base flex items-center gap-2">
                  <FaMapMarkerAlt className="text-red-500" /> Find Us Here
                </h3>
              </div>
              <div className="h-48 sm:h-56 md:h-64 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217196.28735828326!2d74.18442742167966!3d31.482777399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903ec2a1b8cbd%3A0xc8b11e5b6b15d27!2sValencia%20Town%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </div>
              <div className="p-3 sm:p-4 bg-gray-50">
                <p className="text-xs sm:text-sm text-gray-600 break-words">
                  📍 101A, J1 Block, Valencia Town Main Defence Road, Lahore, Pakistan
                </p>
              </div>
            </div>

            {/* Quick Response */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-4 sm:p-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-base sm:text-lg">⚡</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm sm:text-base mb-1">Quick Response Guarantee</h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    We respond to all enquiries within 24 hours. For urgent matters, please call us directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section - Responsive */}
        <div className="mt-8 sm:mt-12 text-center">
          <Link to="/faq" className="inline-flex items-center gap-2 text-red-600 hover:gap-3 transition-all text-sm sm:text-base">
            Have questions? Check our FAQ <FaArrowRight size={12} />
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;