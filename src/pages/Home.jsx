import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import GroupAlliance from '../components/GroupAlliance';
import WhyFastMarketing from '../components/WhyFastMarketing';
import Testimonials from '../components/Testimonials';
import CPIAnalytics from '../components/CPIAnalytics';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Home = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.hash && target.hash.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <GroupAlliance />
      <WhyFastMarketing />
      <Testimonials />
      <CPIAnalytics />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;