import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaPlay, FaArrowRight, FaCheckCircle, FaTrophy, FaRocket, FaUsers, FaGlobe, FaLightbulb, FaChartLine, FaHeart, FaStar, FaAward, FaHandshake, FaVideo, FaImage } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
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
  }, []);

  const stats = [
    { value: 2018, label: "Year Established", suffix: "", icon: <FaStar className="text-2xl sm:text-3xl" /> },
    { value: 250, label: "Projects Done", suffix: "+", icon: <FaRocket className="text-2xl sm:text-3xl" /> },
    { value: 15, label: "Global Awards", suffix: "+", icon: <FaTrophy className="text-2xl sm:text-3xl" /> },
    { value: 98, label: "Client Retention", suffix: "%", icon: <FaHeart className="text-2xl sm:text-3xl" /> }
  ];

  const values = [
    { icon: <FaLightbulb className="text-2xl sm:text-3xl" />, title: "Innovation First", description: "We constantly push boundaries and embrace new technologies to keep our clients ahead of the curve." },
    { icon: <FaUsers className="text-2xl sm:text-3xl" />, title: "Client Centric", description: "Your success is our success. We build lasting partnerships based on trust and transparency." },
    { icon: <FaChartLine className="text-2xl sm:text-3xl" />, title: "Data Driven", description: "Every decision is backed by analytics and insights to ensure maximum ROI for our clients." },
    { icon: <FaHandshake className="text-2xl sm:text-3xl" />, title: "Integrity", description: "We believe in honest communication, ethical practices, and delivering on our promises." }
  ];

  const teamStats = [
    { value: 50, label: "Team Members", suffix: "+" },
    { value: 10, label: "Years Experience", suffix: "+" },
    { value: 500, label: "Happy Clients", suffix: "+" },
    { value: 100, label: "Brands Trust", suffix: "+" }
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section - Half Text Half Image - Responsive */}
      <div className="pt-20 sm:pt-24 md:pt-28">
        <div className="container-custom px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center min-h-[450px] sm:min-h-[500px] md:min-h-[600px]">
            {/* Left Side - Text Content */}
            <div className="flex-1 text-center lg:text-left animate-slide-left">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-red-100 rounded-full mb-4 sm:mb-6">
                <span className="text-red-600 text-sm sm:text-base">⭐</span>
                <span className="text-red-600 font-semibold text-xs sm:text-sm">Since 2018</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
                OUR
                <span className="gradient-text"> JOURNEY</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-5 sm:mb-6 leading-relaxed px-2 lg:px-0">
                We are a group of creative minds redefining digital excellence across Pakistan and beyond.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link to="/services">
  <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
    Visit Works <FaArrowRight size={12} className="sm:w-3.5 sm:h-3.5" />
  </button>
</Link>

<Link to="/services">
  <button className="border-2 border-red-600 text-red-600 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-red-600 hover:text-white transition-all duration-300">
    View Our Catalog
  </button>
</Link>
              </div>
              
              {/* Stats in Hero - Responsive Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8 pt-3 sm:pt-4">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-red-600 flex justify-center mb-1 sm:mb-2">{stat.icon}</div>
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">{stat.value}{stat.suffix}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 relative animate-slide-right w-full">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                  alt="Fast Marketing Team"
                  className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-3 sm:-top-5 -right-3 sm:-right-5 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-red-500 rounded-full blur-xl sm:blur-2xl opacity-30 animate-float"></div>
              <div className="absolute -bottom-3 sm:-bottom-5 -left-3 sm:-left-5 w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 bg-orange-500 rounded-full blur-xl sm:blur-2xl opacity-30 animate-float-delayed"></div>
              
              {/* Video Badge */}
              <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 right-2 sm:right-3 md:right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3 shadow-lg">
                <FaVideo className="text-red-600 text-base sm:text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Digital Workspace Section - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-marketing-animation-1201-large.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="container-custom relative z-10 px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
            <div className="flex-1 text-center lg:text-left">
              <div className="text-red-400 font-semibold mb-2 text-sm sm:text-base">Modern Digital Workspace</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                A TRADITION OF
                <span className="text-red-400"> EXCELLENCE</span>
              </h2>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-4 sm:mb-6">
                Fast Marketing & Advertising started as a small team with a big vision: to transform how Pakistani brands 
                communicate in the digital age. Today, we are a full-service agency working with industry leaders to 
                create meaningful digital experiences.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                We don't just "do" marketing. We build ecosystems for growth, combining cutting-edge technology with 
                world-class design to ensure our clients are always one step ahead.
              </p>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-3 sm:gap-4 w-full">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400"
                alt="Office"
                className="rounded-lg sm:rounded-xl shadow-xl hover:scale-105 transition-transform duration-500 w-full h-32 sm:h-40 md:h-48 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400"
                alt="Team Meeting"
                className="rounded-lg sm:rounded-xl shadow-xl hover:scale-105 transition-transform duration-500 mt-4 sm:mt-6 md:mt-8 w-full h-32 sm:h-40 md:h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container-custom px-4 sm:px-6">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12">
            {/* Vision */}
            <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                <FaGlobe className="text-xl sm:text-2xl text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                To be the most trusted and innovative digital growth partner in Pakistan, empowering brands to achieve 
                global excellence through the perfect fusion of creativity and technology.
              </p>
            </div>

            {/* Mission */}
            <div className="flex-1 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                <FaRocket className="text-xl sm:text-2xl text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                We combine strategic marketing data with high-end creative execution to bridge the gap between brands 
                and their audiences, delivering measurable results that drive business success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container-custom px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-red-100 rounded-full mb-3 sm:mb-4">
              <span className="text-red-600 text-sm sm:text-base">💎</span>
              <span className="text-red-600 font-semibold text-xs sm:text-sm">Core Values</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
              What Drives <span className="gradient-text">Us Forward</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-4">
              Our values shape everything we do, from how we work with clients to how we grow as a team.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 sm:p-6 text-center shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-red-600 transition-colors duration-300">
                  <div className="text-red-600 group-hover:text-white transition-colors">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">{value.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Responsive */}
      <section ref={statsRef} className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container-custom px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
            {teamStats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold stat-counter" data-target={stat.value} data-suffix={stat.suffix}>
                  0{stat.suffix}
                </div>
                <div className="text-xs sm:text-sm md:text-base mt-1 sm:mt-2 opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client First Section - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container-custom px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
            <div className="flex-1 relative w-full">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600"
                alt="Client Meeting"
                className="rounded-xl sm:rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-3 sm:-bottom-4 md:-bottom-6 -right-3 sm:-right-4 md:-right-6 bg-gradient-to-r from-red-600 to-red-700 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 shadow-xl">
                <FaHandshake className="text-2xl sm:text-3xl md:text-4xl text-white" />
              </div>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-red-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 mx-auto lg:mx-0">
                <FaHeart className="text-xl sm:text-2xl text-red-600" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
                Client <span className="gradient-text">First</span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-5 sm:mb-6">
                Your growth is our benchmark. We build lasting partnerships based on transparency, excellence, 
                and a constant drive to push the boundaries of what's possible in digital marketing.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500 text-sm sm:text-base" />
                  <span className="text-gray-700 text-xs sm:text-sm">100% Transparency</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500 text-sm sm:text-base" />
                  <span className="text-gray-700 text-xs sm:text-sm">Dedicated Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500 text-sm sm:text-base" />
                  <span className="text-gray-700 text-xs sm:text-sm">Results Driven</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container-custom px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">STAY IN THE LOOP</h3>
            <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 px-4">
              Sign up to our newsletter for the latest marketing insights, case studies, and digital trends in Pakistan.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto px-4 sm:px-0">
              <input 
                type="email" 
                placeholder="Your Email Address"
                className="flex-1 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-gray-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button className="bg-red-600 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-red-700 transition whitespace-nowrap">
                Join Now →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container-custom px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Ready to Work With Us?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-5 sm:mb-6 md:mb-8 opacity-90 px-4">
            Let's create something amazing together. Get in touch with our team today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-red-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Get Started <FaArrowRight size={12} className="sm:w-3.5 sm:h-3.5" />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;