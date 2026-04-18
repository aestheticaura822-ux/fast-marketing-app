import React, { useState, useEffect } from 'react';
import { FaPlus, FaEdit, FaTrash, FaEye, FaTimes, FaCheck, FaSpinner } from 'react-icons/fa';

const AdminDashboard = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    image: '',
    tags: '',
    featured: false
  });

  const token = localStorage.getItem('adminToken');

  const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/blog/posts');
      const data = await response.json();
      setPosts(data.posts || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    const tagsArray = formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag);
    
    const postData = {
      ...formData,
      tags: tagsArray,
      author: 'Admin',
      readTime: `${Math.ceil(formData.content.split(' ').length / 200)} min read`,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    };

    const url = editingPost 
      ? `http://localhost:5000/api/blog/posts/${editingPost.id}`
      : 'http://localhost:5000/api/blog/posts';
    
    const method = editingPost ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(postData)
      });

      if (response.ok) {
        await fetchPosts();
        setShowForm(false);
        setEditingPost(null);
        resetForm();
      } else {
        const error = await response.json();
        alert(error.message || 'Failed to save post');
      }
    } catch (error) {
      console.error('Error saving post:', error);
      alert('Network error. Please check if backend server is running.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        const response = await fetch(`http://localhost:5000/api/blog/posts/${id}`, {
          method: 'DELETE',
          headers: { 'Authorization': `Bearer ${token}` }
        });
        
        if (response.ok) {
          await fetchPosts();
        } else {
          alert('Failed to delete post');
        }
      } catch (error) {
        console.error('Error deleting post:', error);
        alert('Network error. Please check if backend server is running.');
      }
    }
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      category: post.category,
      image: post.image,
      tags: post.tags?.join(', ') || '',
      featured: post.featured || false
    });
    setShowForm(true);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      category: '',
      image: '',
      tags: '',
      featured: false
    });
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      localStorage.removeItem('adminToken');
      window.location.reload();
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="w-10 h-10 sm:w-12 sm:h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-3 sm:mb-4"></div>
          <p className="text-gray-600 text-sm sm:text-base">Loading posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-40">
        <div className="container-custom py-3 sm:py-4 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
            Blog Admin Dashboard
          </h1>
          <div className="flex gap-2 sm:gap-3">
            <button
              onClick={() => { 
                setShowForm(true); 
                setEditingPost(null); 
                resetForm();
              }}
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:shadow-lg transition flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base"
            >
              <FaPlus size={14} /> <span>New Post</span>
            </button>
            <button
              onClick={handleLogout}
              className="border border-red-600 text-red-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-red-600 hover:text-white transition text-sm sm:text-base"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="container-custom py-6 sm:py-8 px-4 sm:px-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="bg-white rounded-xl p-3 sm:p-4 shadow-md">
            <div className="text-red-600 text-xl sm:text-2xl mb-1">📝</div>
            <div className="text-xl sm:text-2xl font-bold">{posts.length}</div>
            <div className="text-xs sm:text-sm text-gray-500">Total Posts</div>
          </div>
          <div className="bg-white rounded-xl p-3 sm:p-4 shadow-md">
            <div className="text-blue-600 text-xl sm:text-2xl mb-1">👁️</div>
            <div className="text-xl sm:text-2xl font-bold">{posts.reduce((sum, p) => sum + (p.views || 0), 0)}</div>
            <div className="text-xs sm:text-sm text-gray-500">Total Views</div>
          </div>
          <div className="bg-white rounded-xl p-3 sm:p-4 shadow-md">
            <div className="text-green-600 text-xl sm:text-2xl mb-1">❤️</div>
            <div className="text-xl sm:text-2xl font-bold">{posts.reduce((sum, p) => sum + (p.likes || 0), 0)}</div>
            <div className="text-xs sm:text-sm text-gray-500">Total Likes</div>
          </div>
          <div className="bg-white rounded-xl p-3 sm:p-4 shadow-md">
            <div className="text-purple-600 text-xl sm:text-2xl mb-1">📅</div>
            <div className="text-xl sm:text-2xl font-bold">{new Date().getFullYear()}</div>
            <div className="text-xs sm:text-sm text-gray-500">Current Year</div>
          </div>
        </div>

        {/* Post List */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-4 sm:p-6 border-b border-gray-100">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">All Posts</h2>
          </div>
          
          {posts.length === 0 ? (
            <div className="text-center py-12 sm:py-16">
              <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">📭</div>
              <p className="text-gray-500 text-sm sm:text-base">No posts yet. Create your first post!</p>
              <button
                onClick={() => { setShowForm(true); setEditingPost(null); resetForm(); }}
                className="mt-4 bg-red-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-red-700 transition text-sm sm:text-base"
              >
                Create First Post
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px]">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-gray-600">Title</th>
                    <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-gray-600 hidden sm:table-cell">Category</th>
                    <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-gray-600 hidden md:table-cell">Date</th>
                    <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-gray-600">Views</th>
                    <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map(post => (
                    <tr key={post.id} className="border-t border-gray-100 hover:bg-gray-50 transition">
                      <td className="px-4 sm:px-6 py-3 sm:py-4">
                        <div className="font-medium text-gray-800 text-sm sm:text-base line-clamp-1">{post.title}</div>
                        <div className="text-xs text-gray-400 mt-1 sm:hidden">{post.category}</div>
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 hidden sm:table-cell">
                        <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                          {post.category}
                        </span>
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-gray-600 text-sm hidden md:table-cell">
                        {post.date || new Date(post.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-gray-600 text-sm">{post.views || 0}</td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4">
                        <div className="flex gap-2 sm:gap-3">
                          <button 
                            onClick={() => handleEdit(post)} 
                            className="text-blue-600 hover:text-blue-800 transition p-1"
                            title="Edit"
                          >
                            <FaEdit size={16} />
                          </button>
                          <button 
                            onClick={() => handleDelete(post.id)} 
                            className="text-red-600 hover:text-red-800 transition p-1"
                            title="Delete"
                          >
                            <FaTrash size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Post Form Modal - Responsive */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-3 sm:p-4" onClick={() => setShowForm(false)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-gray-100 px-5 sm:px-6 py-4 flex justify-between items-center">
              <h2 className="text-xl sm:text-2xl font-bold">{editingPost ? 'Edit Post' : 'Create New Post'}</h2>
              <button onClick={() => setShowForm(false)} className="text-gray-400 hover:text-red-600 transition">
                <FaTimes size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1 text-gray-700">Title *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition text-sm sm:text-base"
                  required
                  placeholder="Enter post title"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-1 text-gray-700">Excerpt *</label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                  rows="2"
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition text-sm sm:text-base"
                  required
                  placeholder="Short description of the post"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-1 text-gray-700">Content *</label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                  rows="8"
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition text-sm sm:text-base font-mono"
                  required
                  placeholder="Write your post content here... (HTML supported)"
                />
                <p className="text-xs text-gray-400 mt-1">HTML tags are supported for formatting</p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1 text-gray-700">Category *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition text-sm sm:text-base"
                    required
                  >
                    <option value="">Select Category</option>
                    <option>Trends</option>
                    <option>Social Media</option>
                    <option>SEO</option>
                    <option>Content</option>
                    <option>Email</option>
                    <option>Video</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1 text-gray-700">Image URL *</label>
                  <input
                    type="text"
                    value={formData.image}
                    onChange={(e) => setFormData({...formData, image: e.target.value})}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition text-sm sm:text-base"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-1 text-gray-700">Tags (comma separated)</label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData({...formData, tags: e.target.value})}
                  placeholder="Digital Marketing, Trends, AI"
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition text-sm sm:text-base"
                />
              </div>
              
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.featured}
                  onChange={(e) => setFormData({...formData, featured: e.target.checked})}
                  className="w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                />
                <label htmlFor="featured" className="text-sm text-gray-700">Mark as Featured Post</label>
              </div>
              
              <div className="flex gap-3 pt-4">
                <button 
                  type="submit" 
                  disabled={submitting}
                  className="flex-1 bg-gradient-to-r from-red-600 to-red-700 text-white py-2 sm:py-2.5 rounded-lg font-semibold hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  {submitting ? (
                    <><FaSpinner className="animate-spin" /> Saving...</>
                  ) : (
                    <><FaCheck /> {editingPost ? 'Update Post' : 'Create Post'}</>
                  )}
                </button>
                <button 
                  type="button" 
                  onClick={() => setShowForm(false)} 
                  className="flex-1 border border-gray-300 text-gray-700 py-2 sm:py-2.5 rounded-lg hover:bg-gray-50 transition text-sm sm:text-base"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;