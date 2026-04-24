import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaArrowDown, FaTrophy, FaClock, FaRocket, FaShieldAlt, FaGlobe, FaStar } from 'react-icons/fa';
import Link from 'react-router-dom';


const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const heroRef = useRef(null);
  
  const words = [
    'Results That Speak',
    'Unmatched Growth',
    'Digital Excellence',
    'Global Recognition'
  ];

  // Typing Animation Effect - Fixed to avoid cascading renders
  useEffect(() => {
    let currentIndex = 0;
    let currentWordIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const typeEffect = () => {
      const currentWord = words[currentWordIndex];
      
      if (isDeleting) {
        if (currentIndex > 0) {
          currentIndex--;
          setTypedText(currentWord.substring(0, currentIndex));
          timeoutId = setTimeout(typeEffect, 50);
        } else {
          isDeleting = false;
          currentWordIndex = (currentWordIndex + 1) % words.length;
          timeoutId = setTimeout(typeEffect, 500);
        }
      } else {
        if (currentIndex < currentWord.length) {
          currentIndex++;
          setTypedText(currentWord.substring(0, currentIndex));
          timeoutId = setTimeout(typeEffect, 100);
        } else {
          isDeleting = true;
          timeoutId = setTimeout(typeEffect, 2000);
        }
      }
    };

    timeoutId = setTimeout(typeEffect, 100);
    
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array - effect runs once on mount

  const stats = [
    { value: '500+', label: 'Projects Completed', icon: FaTrophy, color: 'from-yellow-500 to-orange-500' },
    { value: '50M+', label: 'Impressions', icon: FaGlobe, color: 'from-blue-500 to-cyan-500' },
    { value: '99%', label: 'Client Satisfaction', icon: FaStar, color: 'from-green-500 to-emerald-500' },
    { value: '24/7', label: 'Priority Support', icon: FaClock, color: 'from-purple-500 to-pink-500' }
  ];

  const achievements = [
    'Best Digital Agency Pakistan 2024',
    '4.9/5 Client Rating',
    '300% Avg Growth Rate',
    'Global Presence'
  ];

  return (
    <section ref={heroRef} className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1551434678-e076c2235b2f?w=1920"
        >
          <source src="https://cdn.pixabay.com/video/2025/10/07/308559_medium.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/90"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-orange-600/10"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-gradient-to-r from-red-600 to-orange-600 rounded-full blur-3xl opacity-20 animate-float pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-3xl opacity-20 animate-float-delayed pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-3xl opacity-10 animate-pulse-slow pointer-events-none"></div>

      {/* Animated Border Lines */}
      <div className="absolute left-0 top-1/2 w-32 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent animate-slide-left pointer-events-none"></div>
      <div className="absolute right-0 top-1/3 w-48 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-slide-right pointer-events-none"></div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-6xl mx-auto">
          {/* Premium Badge */}
          <div className="flex justify-center mb-8 animate-slide-left">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:border-red-500/50 transition-all duration-500 group">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-400 rounded-full blur-md animate-pulse"></div>
                <span className="relative text-2xl group-hover:scale-110 transition-transform inline-block">🏆</span>
              </div>
              <span className="font-bold text-white tracking-wide">Pakistan's Number 1 Digital Marketing Agency 2024</span>
              <div className="w-1 h-1 bg-white/50 rounded-full"></div>
              <span className="text-sm text-red-400 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-8">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
              <span className="inline-block text-white">Think Fast.</span>
              <br />
              <div className="relative inline-block mt-4">
                <span className="relative gradient-text text-6xl md:text-7xl lg:text-8xl">
                  Move Faster.
                </span>
              </div>
            </h1>
          </div>

          {/* Typing Animation */}
          <div className="text-center mb-6 animate-fade-in">
            <div className="inline-flex items-center gap-3 bg-black/30 backdrop-blur-sm px-6 py-2 rounded-full">
              <FaRocket className="text-red-500 animate-bounce" />
              <p className="text-lg md:text-xl text-gray-200">
                Delivering <span className="text-red-500 font-bold border-r-2 border-red-500 pr-1 min-w-[180px] inline-block">{typedText}</span>
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-200 mb-10 max-w-3xl mx-auto text-center leading-relaxed backdrop-blur-sm bg-black/20 rounded-xl p-6 animate-fade-in">
            From Meta Ads and Google Ads to TikTok Growth and Brand Identity — 
            we deliver measurable results that put your brand ahead of the competition.
          </p>

          {/* Achievements Bar */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 animate-fade-in">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20 text-xs md:text-sm text-white">
                {idx === 0 && "🏆"} {idx === 1 && "⭐"} {idx === 2 && "🚀"} {idx === 3 && "🌍"} {achievement}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center flex-wrap animate-fade-in">
            <Link href="/contact">
  <button className="group bg-gradient-to-r from-red-600 to-red-700 text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-2">
    <FaRocket className="group-hover:translate-x-1 transition-transform" />
    Deploy Strategy
  </button>
</Link>

<Link href="/contact">
  <button className="group bg-white/10 backdrop-blur-md text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-white/20 transition-all duration-300 border border-white/30 flex items-center gap-2 hover:gap-3 hover:scale-105">
    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-600 to-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform">
      <FaPlay size={10} className="ml-0.5" />
    </div>
    Consult Free →
  </button>
</Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 mt-16 pt-8 border-t border-white/20">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={idx} 
                  className="group text-center hover:transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} bg-white/10 backdrop-blur-sm mb-3 group-hover:scale-110 transition-all duration-300`}>
                    <Icon className="text-2xl text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-black text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-300 mt-1 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Trust Badges */}
          <div className="flex justify-center gap-4 mt-8 pt-6">
            <div className="flex items-center gap-2 text-gray-400 text-xs">
              <FaShieldAlt className="text-green-500 text-sm" />
              <span>SSL Secure</span>
            </div>
            <div className="w-px h-3 bg-white/20"></div>
            <div className="flex items-center gap-2 text-gray-400 text-xs">
              <FaStar className="text-yellow-500 text-sm" />
              <span>100+ Reviews</span>
            </div>
            <div className="w-px h-3 bg-white/20"></div>
            <div className="flex items-center gap-2 text-gray-400 text-xs">
              <FaGlobe className="text-blue-500 text-sm" />
              <span>Global Reach</span>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group cursor-pointer">
            <div className="relative">
              <div className="relative w-7 h-12 border-2 border-white rounded-full flex justify-center hover:border-red-500 transition-all duration-300">
                <div className="absolute w-1.5 h-3 bg-white rounded-full mt-2 animate-bounce group-hover:bg-red-500"></div>
              </div>
            </div>
            <div className="text-center mt-2">
              <FaArrowDown className="text-white text-xs opacity-50 group-hover:opacity-100 group-hover:translate-y-1 transition-all" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;