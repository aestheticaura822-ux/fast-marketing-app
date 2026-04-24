import React from 'react';
import { FaChartLine, FaPalette, FaGlobe, FaRocket, FaShieldAlt, FaMicrochip } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: <FaChartLine className="text-3xl" />,
    title: "Data-Driven Strategy",
    description: "Every campaign is backed by deep analytics and consumer insights.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <FaPalette className="text-3xl" />,
    title: "Creative Innovation",
    description: "We don't just follow trends; we create high-impact visual stories.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <FaGlobe className="text-3xl" />,
    title: "Omni-Channel Mastery",
    description: "From digital landscapes to offline impact, we cover every touchpoint.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: <FaRocket className="text-3xl" />,
    title: "ROI-Centered Growth",
    description: "Our success is measured by your business's quantifiable growth.",
    color: "from-green-500 to-emerald-500"
  }
];

const WhyFastMarketing = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Video (Light) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-5"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-statistics-animation-114-large.mp4" type="video/mp4" />
      </video>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text */}
          <div className="animate-slide-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full mb-4">
              <span className="text-red-600">✦</span>
              <span className="text-red-600 font-semibold">Why Fast Marketing</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              BEYOND
              <br />
              <span className="gradient-text">ADVERTISING.</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              We don't just create ads; we engineer brand experiences that resonate, convert, and endure.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="group p-4 md:p-5 bg-gray-50 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className={`text-red-600 mb-3 group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-base md:text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-500 text-xs md:text-sm">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Join Button */}
            <div className="mt-8">
              <Link to="/contact">
  <button className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 md:px-8 py-3 rounded-full font-semibold hover:shadow-xl transition">
    Join our roster →
  </button>
</Link>
            </div>
          </div>

          {/* Right Content - Stats Card with Image */}
          <div className="relative animate-slide-right">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl">
              {/* Image inside card */}
              <div className="rounded-xl overflow-hidden mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600" 
                  alt="Marketing Analytics"
                  className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="text-center">
                <div className="text-5xl md:text-7xl mb-4 animate-float">⚡</div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">99.98%</div>
                <div className="text-base md:text-xl text-gray-300 mb-2">Marketing Dominance</div>
                <div className="text-sm text-gray-400 mb-4">Efficiency Rating</div>
                <div className="w-full bg-white/20 rounded-full h-2 md:h-3 mb-6 md:mb-8">
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 h-2 md:h-3 rounded-full w-[99.98%]"></div>
                </div>

                {/* Stats Grid - 6 items */}
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {[
                    { number: "01", title: "Global Reach", desc: "Multi-channel ecosystem" },
                    { number: "02", title: "Precision Targeting", desc: "99.9% Accuracy" },
                    { number: "03", title: "Creative Dominance", desc: "Award-Winning UI" },
                    { number: "04", title: "Advanced Analytics", desc: "Live Data Stream" },
                    { number: "05", title: "Quantum Strategy", desc: "Powered by AI" },
                    { number: "06", title: "Shield Protection", desc: "Ironclad Security" }
                  ].map((item, idx) => (
                    <div key={idx} className="text-left p-2 md:p-3 bg-white/5 rounded-lg hover:bg-white/10 transition">
                      <div className="text-lg md:text-2xl font-bold text-red-500">{item.number}</div>
                      <div className="text-white font-semibold text-xs md:text-sm">{item.title}</div>
                      <div className="text-gray-400 text-xs hidden sm:block">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-3 -right-3 w-16 h-16 md:w-24 md:h-24 bg-red-500 rounded-full blur-2xl opacity-40 animate-float"></div>
            <div className="absolute -bottom-3 -left-3 w-12 h-12 md:w-20 md:h-20 bg-orange-500 rounded-full blur-2xl opacity-40 animate-float-delayed"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFastMarketing;