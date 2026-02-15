
"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer4Col';
import HeroSection from '../components/HeroSection';
import { TestimonialsColumn2 } from "./TestimonialsColumns2";

export default function TestimonialsPage() {
  const testimonialBackgrounds = [
    "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1920&auto=format&fit=crop",
  ];

  return (
    <main className="bg-white">
      <Navbar />
      <HeroSection 
        title="Real Stories of Home"
        subtitle="Hear from our satisfied homeowners and investors who found their dream sanctuaries with us."
        showSearch={false}
        backgrounds={testimonialBackgrounds}
      />
      <TestimonialsColumn2 />
      <Footer />
    </main>
  );
}
