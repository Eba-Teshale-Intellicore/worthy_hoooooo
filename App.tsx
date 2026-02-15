
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection1 from './components/AboutSection1';
import PropertyMap from './components/PropertyMap';
import SocialMediaExplorer from './components/SocialMediaExplorer';
import Testimonials from './components/Testimonials';
import Footer4Col from './components/Footer4Col';
import ContactPage from './contact/ContactPage';
import AboutPage from './about_us/AboutPage';
import TestimonialsPage from './testimonials/TestimonialsPage';

const Home = () => (
  <main className="transition-colors duration-500">
    <Navbar />
    <HeroSection />
    <AboutSection1 />
    <PropertyMap />
    <SocialMediaExplorer />
    <Testimonials />
    <Footer4Col />
  </main>
);

const NotFound = () => (
  <div className="h-screen flex items-center justify-center flex-col bg-white dark:bg-slate-950 transition-colors duration-500">
    <h1 className="text-8xl font-black text-green-600">404</h1>
    <p className="text-gray-500 dark:text-slate-400 mt-4 text-xl">Page under construction</p>
    <a href="/" className="mt-8 px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-bold shadow-lg transition-all">Go back home</a>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 flex flex-col transition-colors duration-500">
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_us" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;