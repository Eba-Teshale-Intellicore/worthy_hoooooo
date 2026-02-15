
"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection2 from './about-section-2/AboutSection2';
import Footer4Col from '../components/Footer4Col';

export default function AboutPage() {
  const aboutBackgrounds = [
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600585154526-990dcea464f9?q=80&w=1920&auto=format&fit=crop",
  ];

  return (
    <main className="bg-white dark:bg-slate-950 transition-colors duration-500">
      <Navbar />
      <HeroSection 
        title="Our Story & Vision"
        subtitle="Worthy Homes is a premier real estate company dedicated to delivering refined property experiences defined by elegance, trust, and exceptional service."
        showSearch={false}
        backgrounds={aboutBackgrounds}
      />
      <AboutSection2 />
      <Footer4Col />
    </main>
  );
}
