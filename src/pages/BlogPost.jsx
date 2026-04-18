import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaCalendar, FaUser, FaClock, FaEye, FaHeart, FaComments, FaArrowLeft, FaSpinner, FaShare, FaBookmark } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:5000/api/blog/posts/${id}`);
      const data = await response.json();
      
      if (data.success) {
        setPost(data.post);
        setLikesCount(data.post.likes || 0);
      } else {
        setError('Post not found');
      }
    } catch (error) {
      console.error('Error fetching post:', error);
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLike = () => {
    if (liked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
    setLiked(!liked);
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <FaSpinner className="text-4xl sm:text-5xl text-red-600 animate-spin" />
        </div>
        <Footer />
      </>
    );
  }

  if (error || !post) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center">
            <div className="text-5xl sm:text-6xl mb-4">😢</div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">{error || 'Post not found'}</h3>
            <Link to="/blog" className="text-red-600 hover:underline inline-flex items-center gap-2">
              <FaArrowLeft size={14} /> Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      
      <div className="pt-20 sm:pt-24 md:pt-28">
        <div className="container-custom py-6 sm:py-8 md:py-12">
          {/* Back Button */}
          <Link to="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-red-600 transition mb-4 sm:mb-6 text-sm sm:text-base">
            <FaArrowLeft size={14} /> Back to Blog
          </Link>
          
          <article className="max-w-4xl mx-auto px-0 sm:px-2">
            {/* Featured Image */}
            <div className="relative mb-6 sm:mb-8 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-48 sm:h-64 md:h-96 object-cover"
              />
              {post.featured && (
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-red-600 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold">
                  Featured
                </div>
              )}
            </div>
            
            {/* Post Meta Info */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
              <span className="flex items-center gap-1">
                <FaCalendar size={12} /> {post.date}
              </span>
              <span className="flex items-center gap-1">
                <FaUser size={12} /> {post.author}
              </span>
              <span className="flex items-center gap-1">
                <FaClock size={12} /> {post.readTime}
              </span>
              <span className="flex items-center gap-1">
                <FaEye size={12} /> {post.views} views
              </span>
            </div>
            
            {/* Post Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              {post.title}
            </h1>
            
            {/* Post Content */}
            <div 
              className="prose prose-sm sm:prose-base md:prose-lg max-w-none 
                         prose-headings:text-gray-800 prose-headings:font-bold 
                         prose-p:text-gray-600 prose-p:leading-relaxed 
                         prose-a:text-red-600 prose-a:no-underline hover:prose-a:underline
                         prose-img:rounded-xl prose-img:shadow-md
                         prose-ul:text-gray-600 prose-ol:text-gray-600
                         prose-li:my-1"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
            
            {/* Tags Section */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-100">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 sm:px-3 sm:py-1.5 bg-gray-100 rounded-full text-xs sm:text-sm text-gray-600">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {/* Interaction Buttons */}
            <div className="border-t border-gray-200 pt-5 sm:pt-6 mt-6 sm:mt-8">
              <div className="flex flex-wrap justify-between items-center gap-3">
                <div className="flex gap-2 sm:gap-3">
                  <button 
                    onClick={handleLike}
                    className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300 text-sm sm:text-base ${
                      liked 
                        ? 'bg-red-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-red-600 hover:text-white'
                    }`}
                  >
                    <FaHeart size={14} /> {likesCount}
                  </button>
                  <button className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 text-sm sm:text-base">
                    <FaComments size={14} /> {post.comments}
                  </button>
                </div>
                <div className="flex gap-2">
                  <button className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 text-sm sm:text-base">
                    <FaShare size={14} /> Share
                  </button>
                  <button className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 text-sm sm:text-base">
                    <FaBookmark size={14} /> Save
                  </button>
                </div>
              </div>
            </div>

            {/* Author Bio Section */}
            <div className="mt-8 sm:mt-10 p-4 sm:p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <img 
                  src={post.authorAvatar || "https://randomuser.me/api/portraits/men/32.jpg"} 
                  alt={post.author}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div className="text-center sm:text-left">
                  <h4 className="font-bold text-gray-800 text-lg sm:text-xl">{post.author}</h4>
                  <p className="text-gray-500 text-sm mt-1">Content Writer & Digital Marketing Expert</p>
                  <p className="text-gray-600 text-sm mt-2">
                    Passionate about digital marketing trends and helping businesses grow online.
                  </p>
                </div>
              </div>
            </div>

            {/* Related Posts Section */}
            <div className="mt-8 sm:mt-10">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Related Articles</h3>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition group">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400" 
                    alt="Related post"
                    className="w-full h-32 sm:h-40 object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="p-3 sm:p-4">
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base line-clamp-2">
                      Digital Marketing Trends 2025
                    </h4>
                    <Link to="/blog" className="text-red-600 text-xs sm:text-sm mt-2 inline-block hover:underline">
                      Read More →
                    </Link>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition group">
                  <img 
                    src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400" 
                    alt="Related post"
                    className="w-full h-32 sm:h-40 object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="p-3 sm:p-4">
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base line-clamp-2">
                      Social Media Advertising Guide
                    </h4>
                    <Link to="/blog" className="text-red-600 text-xs sm:text-sm mt-2 inline-block hover:underline">
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default BlogPost;