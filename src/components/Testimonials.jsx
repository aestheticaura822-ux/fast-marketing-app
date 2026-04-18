import React, { useState } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: "Sarah Chen",
    position: "Marketing Director",
    company: "GlobalTech",
    text: "Fast Marketing didn't just meet our KPIs; they redefined our entire digital presence. Their aggressive scaling strategy is unmatched in the industry.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    name: "Alex Rivera",
    position: "CEO",
    company: "Streamline Dynamics",
    text: "The ROI we've seen in just three months is staggering. Their data-driven approach takes the guesswork out of advertising completely.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Elena Rossi",
    position: "Founder",
    company: "VANTAGE Creative",
    text: "Precision engineering for brands. If you want to dominate your sector, this is the team you need in your corner.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/45.jpg"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920')" }}
      ></div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full mb-4">
            <span className="text-red-600">★</span>
            <span className="text-red-600 font-semibold">Client Verdicts</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            REAL
            <br />
            <span className="gradient-text">IMPACT. RESULTS.</span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming digital presence into quantifiable dominance. Our clients don't just grow; they redefine their entire market landscape.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-10 lg:p-12">
            <FaQuoteLeft className="text-4xl md:text-6xl text-red-500 opacity-20 mb-4" />
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-800 mb-6 md:mb-8 leading-relaxed font-medium">
              {testimonials[currentIndex].text}
            </p>
            
            <div className="flex items-center gap-4">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-14 h-14 md:w-20 md:h-20 rounded-full object-cover border-4 border-red-500"
              />
              <div>
                <div className="text-lg md:text-xl font-bold text-gray-900">{testimonials[currentIndex].name}</div>
                <div className="text-sm md:text-base text-gray-500">{testimonials[currentIndex].position}, {testimonials[currentIndex].company}</div>
                <div className="flex gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500 text-sm md:text-base" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-5 bg-white shadow-xl w-10 h-10 md:w-12 md:h-12 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center justify-center"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-5 bg-white shadow-xl w-10 h-10 md:w-12 md:h-12 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center justify-center"
          >
            <FaChevronRight />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 ${
                  idx === currentIndex ? 'w-6 md:w-8 bg-red-600' : 'w-2 bg-gray-300'
                } h-2 rounded-full`}
              ></button>
            ))}
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="mt-16 md:mt-20">
          <p className="text-center text-gray-500 mb-6 md:mb-8 tracking-wider text-sm md:text-base">
            TRUSTED BY 500+ MARKET LEADERS
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-60">
            {['Apple', 'Google', 'Microsoft', 'Amazon', 'Meta', 'Netflix', 'Spotify', 'Airbnb'].map((brand, idx) => (
              <div key={idx} className="text-base md:text-xl lg:text-2xl font-bold text-gray-400 hover:text-gray-600 transition">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;