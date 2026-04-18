import React, { useState, useEffect } from 'react';
import AdminLogin from '../components/AdminLogin';
import AdminDashboard from '../components/AdminDashboard';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [tokenValid, setTokenValid] = useState(true);

  useEffect(() => {
    // Check for existing token on mount
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        
        if (token) {
          // Verify token with backend
          const response = await fetch('https://fast-marketing-backend.vercel.app/api/admin/verify', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          
          if (response.ok) {
            setIsAuthenticated(true);
            setTokenValid(true);
          } else {
            // Token invalid, remove it
            localStorage.removeItem('adminToken');
            setIsAuthenticated(false);
            setTokenValid(false);
          }
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
        // If network error, still allow if token exists (offline mode)
        const token = localStorage.getItem('adminToken');
        if (token) {
          setIsAuthenticated(true);
        }
      } finally {
        setIsLoading(false);
      }
    };
    
    checkAuth();
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setTokenValid(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminExpiry');
    setIsAuthenticated(false);
    // Optional: Call logout API
    fetch('https://fast-marketing-backend.vercel.app/api/admin/logout', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
      }
    }).catch(err => console.error('Logout error:', err));
  };

  // Auto logout after 7 days (token expiry)
  useEffect(() => {
    if (isAuthenticated) {
      const expiry = localStorage.getItem('adminExpiry');
      if (expiry && new Date().getTime() > parseInt(expiry)) {
        handleLogout();
      } else if (!expiry) {
        // Set expiry for 7 days from now
        const expiryTime = new Date().getTime() + (7 * 24 * 60 * 60 * 1000);
        localStorage.setItem('adminExpiry', expiryTime.toString());
      }
    }
  }, [isAuthenticated]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="text-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-sm sm:text-base">Loading admin panel...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} tokenInvalid={!tokenValid} />;
  }

  return <AdminDashboard onLogout={handleLogout} />;
};

export default Admin;