import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import BlogPost from './pages/BlogPost';  // ✅ Ye import add karo
import Blog from './pages/Blog';
import AdvertisingOptions from './pages/services/AdvertisingOptions';
import SocialMediaAds from './pages/services/SocialMediaAds';
import AdFormats from './pages/services/AdFormats';
import TargetingOptions from './pages/services/TargetingOptions';
import AdPlacement from './pages/services/AdPlacement';
import AllServices from './pages/services/AllServices';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogPost />} />  {/* ✅ Ye route add karo */}
      <Route path="/services/advertising-options" element={<AdvertisingOptions />} />
      <Route path="/services/social-media-ads" element={<SocialMediaAds />} />
      <Route path="/services/ad-formats" element={<AdFormats />} />
      <Route path="/services/targeting-options" element={<TargetingOptions />} />
      <Route path="/services/ad-placement" element={<AdPlacement />} />
      <Route path="/services/all" element={<AllServices />} />
    </Routes>
  );
}

export default App;