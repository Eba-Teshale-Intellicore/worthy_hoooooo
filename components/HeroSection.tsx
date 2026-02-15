
"use client";

import { useState, useEffect } from "react";
import { Image } from "../lib/next-compat";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, Building2, Wallet, ChevronDown } from "lucide-react";
import { VerticalCutReveal } from "./vertical-cut-reveal";

interface HeroProps {
  title?: string;
  subtitle?: string;
  showSearch?: boolean;
  backgrounds?: string[];
}

const defaultBackgrounds = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687940-477a63bd39d8?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1920&auto=format&fit=crop",
];

const HeroSection = ({ 
  title = "Find Your Legacy", 
  subtitle = "Bespoke property solutions for the world's most discerning families. Experience luxury through transparency and architectural excellence.",
  showSearch = true,
  backgrounds = defaultBackgrounds
}: HeroProps) => {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-slate-950 flex items-center justify-center">
      
      {/* Immersive Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBg}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={backgrounds[currentBg]}
              alt="Luxury Real Estate"
              fill
              className="object-cover"
              priority
            />
            {/* Elegant Dark Gradient Overlays */}
            <div className="absolute inset-0 bg-slate-950/30" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/80" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.1)_0%,transparent_70%)]" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl px-6 text-center">
        
        {/* Massive Impact Typography */}
        <div className="mb-6">
          <h1 className="text-6xl sm:text-8xl lg:text-[120px] font-black text-white leading-[0.85] tracking-tighter mb-8 drop-shadow-2xl">
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.1}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              containerClassName="justify-center"
            >
              {title}
            </VerticalCutReveal>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-200/80 max-w-2xl mx-auto font-medium leading-relaxed tracking-wide"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Minimalist Unified Search Pill */}
        {showSearch && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-12 max-w-3xl mx-auto"
          >
            <div className="flex items-center p-2 bg-white/10 backdrop-blur-3xl rounded-full border border-white/20 shadow-2xl transition-all hover:bg-white/15">
              
              <div className="hidden sm:flex flex-1 items-center px-6 gap-3 border-r border-white/10 group cursor-pointer">
                <MapPin size={18} className="text-green-500 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Location</p>
                  <input className="bg-transparent text-white font-bold text-sm outline-none w-28 placeholder:text-white/30" placeholder="Where to?" />
                </div>
              </div>

              <div className="hidden sm:flex flex-1 items-center px-6 gap-3 group cursor-pointer">
                <Building2 size={18} className="text-green-500 group-hover:scale-110 transition-transform" />
                <div className="text-left flex items-center gap-1">
                  <div>
                    <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Type</p>
                    <p className="text-white font-bold text-sm">Villa Estate</p>
                  </div>
                  <ChevronDown size={14} className="text-white/40" />
                </div>
              </div>

              <button className="flex items-center justify-center w-14 h-14 sm:w-auto sm:h-auto sm:px-10 sm:py-5 bg-green-600 hover:bg-green-500 text-white rounded-full transition-all shadow-xl active:scale-95 group">
                <Search size={20} className="sm:mr-3 group-hover:rotate-12 transition-transform" />
                <span className="hidden sm:inline font-black text-xs uppercase tracking-widest">Search</span>
              </button>
            </div>
          </motion.div>
        )}

      </div>

      {/* Modern Scrolling Indicator */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center opacity-40 hover:opacity-100 transition-opacity cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-[9px] font-black text-white uppercase tracking-[0.4em] mb-3">Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-green-500 to-transparent" />
      </motion.div>

    </section>
  );
};

export default HeroSection;
