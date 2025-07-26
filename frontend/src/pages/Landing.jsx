// src/pages/Landing.js
import React from 'react';
import Navbar from '../components/LandingNav';
import LandingNavbar from '../components/LandingNav';
import HeroSection from '../components/Herosection';
import Features from '../components/Features';
import Upcoming from '../components/Upcoming';
import CTA from '../components/Cta';
import Footer from '../components/Footer';

const Landing = () => {
  return (
    <div>
      
      <HeroSection />
      <Features/>
      <Upcoming />
      <CTA/>
      <Footer/>
      </div>
  );
};

export default Landing;
