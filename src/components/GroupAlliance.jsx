import React, { useState } from 'react';

const alliances = [
  {
    id: 1,
    name: "Fast IT Solutions & Digital Tech",
    category: "Services",
    metric: "200+ Projects · Delivered",
    description: "Next-gen software engineering, digital infrastructure, and technology services for modern enterprises at global scale.",
    icon: "💻",
    color: "from-blue-600 to-cyan-600",
    image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=800"
  },
  {
    id: 2,
    name: "Fast Marketing & Advertising",
    category: "Services",
    metric: "50M+ Reach · Monthly",
    description: "Data-driven marketing campaigns, creative advertising, and brand growth strategies that deliver measurable results.",
    icon: "📢",
    color: "from-red-600 to-orange-600",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600"
  },
  {
    id: 3,
    name: "Fast Printing & Packaging",
    category: "Products",
    metric: "1M+ Units · Produced",
    description: "Premium printing solutions and custom packaging products for businesses of all sizes, delivered with precision.",
    icon: "🖨️",
    color: "from-purple-600 to-pink-600",
    image: "https://images.unsplash.com/photo-1562564055-71e051d33c19?w=600"
  },
  {
    id: 4,
    name: "Fast Soft Skills & Foreign Education",
    category: "Services",
    metric: "5000+ Students · Enrolled",
    description: "Empowering individuals with essential soft skills training and pathways to premier foreign education opportunities.",
    icon: "🎓",
    color: "from-green-600 to-emerald-600",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200"
  },
  {
    id: 5,
    name: "Fast Meal Delivery",
    category: "Services",
    metric: "10K+ Customers · Served",
    description: "Quick and reliable meal delivery services, bringing delicious food directly to your doorstep.",
    icon: "🍔",
    color: "from-yellow-600 to-amber-600",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600"
  },
  {
    id: 6,
    name: "Fast Employment Consultancy",
    category: "Services",
    metric: "3000+ Placements · Completed",
    description: "Connecting top talent with leading employers through expert recruitment, career counseling, and workforce solutions.",
    icon: "💼",
    color: "from-indigo-600 to-blue-600",
    image: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=600"
  },
  {
    id: 7,
    name: "Fast Online Stores Dacor Dice",
    category: "Products",
    metric: "500+ Products · Available",
    description: "Curated e-commerce destination offering premium décor and lifestyle products under the Dacor Dice brand.",
    icon: "🛍️",
    color: "from-pink-600 to-rose-600",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600"
  },
  {
    id: 8,
    name: "Fast Real Estate & Builders",
    category: "Services",
    metric: "100+ Properties · Developed",
    description: "Comprehensive real estate solutions, property development, and construction services for residential and commercial projects.",
    icon: "🏗️",
    color: "from-teal-600 to-cyan-600",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600"
  },
  {
    id: 9,
    name: "Fast Hospitality, Tourism & Booking App",
    category: "Services",
    metric: "50+ Destinations · Covered",
    description: "Elevating travel experiences through premium hospitality services, curated tourism packages, and smart booking technology.",
    icon: "✈️",
    color: "from-orange-600 to-red-600",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600"
  }
];

const GroupAlliance = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerPage = 3;
  const totalSlides = Math.ceil(alliances.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const visibleAlliances = alliances.slice(
    currentSlide * itemsPerPage,
    (currentSlide + 1) * itemsPerPage
  );

  return React.createElement(
    'section',
    { className: 'py-24 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden' },
    React.createElement('div', { className: 'absolute inset-0 opacity-5' },
      React.createElement('div', { className: 'absolute top-0 left-0 w-full h-full bg-[url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')]' })
    ),
    React.createElement('div', { className: 'relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
      React.createElement('div', { className: 'text-center mb-16' },
        React.createElement('div', { className: 'inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 rounded-full mb-4' },
          React.createElement('span', { className: 'text-red-400' }, '✦'),
          React.createElement('span', { className: 'text-red-400 font-semibold' }, 'Corporate Synergy')
        ),
        React.createElement('h2', { className: 'text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4' },
          'THE FAST',
          React.createElement('br'),
          React.createElement('span', { className: 'bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent' }, 'GROUP ALLIANCE.')
        ),
        React.createElement('p', { className: 'text-xl text-gray-300 max-w-3xl mx-auto' }, 'A diversified portfolio of high-performance ventures. Each company driven by the same relentless pursuit of excellence.')
      ),
      React.createElement('div', { className: 'relative' },
        React.createElement('div', { className: 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' },
          visibleAlliances.map((alliance, idx) =>
            React.createElement('div', { key: alliance.id, className: 'group bg-white rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2', style: { animationDelay: `${idx * 0.1}s` } },
              React.createElement('div', { className: 'relative h-56 overflow-hidden' },
                React.createElement('img', { src: alliance.image, alt: alliance.name, className: 'w-full h-full object-cover group-hover:scale-110 transition-transform duration-700' }),
                React.createElement('div', { className: `absolute inset-0 bg-gradient-to-r ${alliance.color} opacity-0 group-hover:opacity-40 transition-opacity duration-500` }),
                React.createElement('div', { className: 'absolute top-4 right-4 text-5xl' }, alliance.icon),
                React.createElement('div', { className: 'absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4' },
                  React.createElement('span', { className: 'text-white text-sm font-semibold' }, alliance.category)
                )
              ),
              React.createElement('div', { className: 'p-6' },
                React.createElement('div', { className: 'text-sm text-red-500 font-semibold mb-2' }, alliance.metric),
                React.createElement('h3', { className: 'text-xl font-bold mb-3 group-hover:text-red-600 transition-colors' }, alliance.name),
                React.createElement('p', { className: 'text-gray-600 mb-4 line-clamp-2' }, alliance.description),
                React.createElement('button', { className: 'text-red-600 font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all' }, 'Explore', React.createElement('span', null, '→'))
              )
            )
          )
        ),
        totalSlides > 1 && React.createElement('div', null,
          React.createElement('button', { onClick: prevSlide, className: 'absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white shadow-xl w-12 h-12 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center justify-center' },
            React.createElement('svg', { className: 'w-5 h-5', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
              React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M15 19l-7-7 7-7' })
            )
          ),
          React.createElement('button', { onClick: nextSlide, className: 'absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white shadow-xl w-12 h-12 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center justify-center' },
            React.createElement('svg', { className: 'w-5 h-5', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
              React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M9 5l7 7-7 7' })
            )
          )
        ),
        React.createElement('div', { className: 'flex justify-center gap-2 mt-8' },
          [...Array(totalSlides)].map((_, idx) =>
            React.createElement('button', {
              key: idx,
              onClick: () => setCurrentSlide(idx),
              className: `transition-all duration-300 ${idx === currentSlide ? 'w-12 bg-red-600' : 'w-3 bg-gray-400'} h-3 rounded-full`
            })
          )
        )
      ),
      React.createElement('div', { className: 'text-center mt-6 text-gray-400 font-mono' },
        `${String(currentSlide + 1).padStart(2, '0')} / ${String(totalSlides).padStart(2, '0')}`
      )
    )
  );
};

export default GroupAlliance;