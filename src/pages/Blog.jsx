import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaCalendar, FaUser, FaArrowRight, FaClock, FaEye, FaHeart, FaComments, FaChartLine, FaBullhorn, FaLightbulb, FaRocket, FaSpinner } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch posts from API
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/blog/posts');
      const data = await response.json();
      
      if (data.success) {
        setBlogPosts(data.posts);
      } else {
        setError('Failed to load posts');
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
      setError('Network error. Please check if backend server is running.');
    } finally {
      setLoading(false);
    }
  };

  // Category icons mapping
  const getCategoryIcon = (category) => {
    const icons = {
      'Trends': <FaChartLine />,
      'Social Media': <FaBullhorn />,
      'SEO': <FaChartLine />,
      'Content': <FaLightbulb />,
      'Email': <FaRocket />,
      'Video': <FaChartLine />
    };
    return icons[category] || <FaChartLine />;
  };

  // Get unique categories from posts
  const categories = [
    { name: "All", icon: "📚", id: "all", count: blogPosts.length },
    ...blogPosts.reduce((acc, post) => {
      const existing = acc.find(c => c.name === post.category);
      if (!existing && post.category) {
        acc.push({ 
          name: post.category, 
          icon: post.category === 'Trends' ? '📈' : post.category === 'Social Media' ? '📱' : post.category === 'SEO' ? '🔍' : post.category === 'Content' ? '✍️' : post.category === 'Email' ? '📧' : '🎬', 
          id: post.category.toLowerCase().replace(' ', ''),
          count: blogPosts.filter(p => p.category === post.category).length
        });
      } else if (existing) {
        existing.count = blogPosts.filter(p => p.category === existing.name).length;
      }
      return acc;
    }, [])
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (post.tags && post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
    const matchesCategory = selectedCategory === 'all' || post.category?.toLowerCase() === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <FaSpinner className="text-4xl sm:text-5xl text-red-600 animate-spin mx-auto mb-4" />
            <p className="text-gray-600 text-sm sm:text-base">Loading articles...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="text-center">
            <div className="text-5xl sm:text-6xl mb-4">⚠️</div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Unable to load posts</h3>
            <p className="text-sm sm:text-base text-gray-500 max-w-md mx-auto">{error}</p>
            <button 
              onClick={fetchPosts}
              className="mt-4 bg-red-600 text-white px-5 sm:px-6 py-2 rounded-lg hover:bg-red-700 transition text-sm sm:text-base"
            >
              Try Again
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* Hero Section - Fully Responsive */}
      <section className="relative overflow-hidden pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 sm:pb-20 md:pb-24">
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
        
        <div className="container-custom relative z-10 text-center text-white px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-red-600/80 rounded-full mb-4 sm:mb-6 backdrop-blur-sm">
            <span className="text-yellow-400 text-sm sm:text-base">📝</span>
            <span className="text-xs sm:text-sm font-semibold">Our Blog</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
            CATCH UP WITH
            <span className="block sm:inline bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"> OUR LATEST ARTICLES</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            Stay in the loop with recent updates, insightful marketing stories, and exciting announcements 
            shaping the digital landscape of Pakistan.
          </p>
        </div>
      </section>

      <div className="container-custom py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        {/* Search and Filter Bar - Responsive */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8 sm:mb-10">
          <div className="relative w-full md:w-80 lg:w-96">
            <FaSearch className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm sm:text-base" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all outline-none text-sm sm:text-base"
            />
          </div>
          
          {/* Categories - Horizontal scroll on mobile */}
          <div className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-2 overflow-x-auto pb-3 sm:pb-0 w-full md:w-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300 flex items-center gap-1.5 sm:gap-2 whitespace-nowrap text-xs sm:text-sm ${
                  selectedCategory === category.id
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-sm sm:text-base">{category.icon}</span>
                <span>{category.name}</span>
                <span className={`text-xs px-1.5 sm:px-2 py-0.5 rounded-full ${
                  selectedCategory === category.id ? 'bg-white/20' : 'bg-gray-200'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post - Responsive */}
        {featuredPost && searchTerm === '' && selectedCategory === 'all' && (
          <div className="mb-8 sm:mb-12">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
              <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
                <div className="relative h-56 sm:h-64 lg:h-auto lg:w-1/2">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-red-600 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-semibold">
                    Featured
                  </div>
                </div>
                <div className="p-5 sm:p-6 md:p-8 lg:w-1/2">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1"><FaCalendar size={12} className="sm:w-3 sm:h-3" /> {featuredPost.date}</span>
                    <span className="flex items-center gap-1"><FaUser size={12} className="sm:w-3 sm:h-3" /> {featuredPost.author}</span>
                    <span className="flex items-center gap-1"><FaClock size={12} className="sm:w-3 sm:h-3" /> {featuredPost.readTime}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 hover:text-red-600 transition line-clamp-2">
                    <Link to={`/blog/${featuredPost.id}`}>{featuredPost.title}</Link>
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4 line-clamp-3">{featuredPost.excerpt}</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    {featuredPost.tags?.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="px-1.5 sm:px-2 py-0.5 bg-gray-100 rounded-full text-xs">#{tag}</span>
                    ))}
                  </div>
                  <Link 
                    to={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center gap-2 text-red-600 font-semibold hover:gap-3 transition-all text-sm sm:text-base"
                  >
                    Read More <FaArrowRight size={12} className="sm:w-3.5 sm:h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid - Responsive */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-10 sm:py-12">
            <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">🔍</div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">No posts found</h3>
            <p className="text-sm sm:text-base text-gray-500">Try searching with different keywords or category</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-8 sm:mb-10">
            {filteredPosts.map((post) => (
              <article key={post.id} className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-48 sm:h-52 md:h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-black/60 backdrop-blur-sm rounded-full px-2 sm:px-3 py-0.5 sm:py-1 text-xs text-white flex items-center gap-1">
                    {getCategoryIcon(post.category)}
                    <span className="text-xs">{post.category}</span>
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-gray-500 mb-2 sm:mb-3">
                    <span className="flex items-center gap-1"><FaCalendar size={10} className="sm:w-3 sm:h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><FaClock size={10} className="sm:w-3 sm:h-3" /> {post.readTime}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1"><FaEye size={10} /> {post.views || 0}</span>
                      <span className="flex items-center gap-1"><FaHeart size={10} /> {post.likes || 0}</span>
                      <span className="flex items-center gap-1"><FaComments size={10} /> {post.comments || 0}</span>
                    </div>
                    <Link 
                      to={`/blog/${post.id}`}
                      className="text-red-600 text-xs sm:text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                    >
                      Read <FaArrowRight size={10} className="sm:w-3 sm:h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Newsletter Section - Responsive */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-center text-white">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">STAY IN THE LOOP</h3>
          <p className="text-sm sm:text-base text-gray-300 mb-5 sm:mb-6 max-w-md mx-auto px-2">
            Sign up to our newsletter for the latest marketing insights, case studies, and digital trends in Pakistan.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto px-3 sm:px-0">
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

      <Footer />
    </>
  );
};

export default Blog;