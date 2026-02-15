
"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, CheckCircle2, Filter, Users, Building, TrendingUp } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Stories', icon: Users },
  { id: 'homeowner', label: 'Homeowners', icon: Building },
  { id: 'investor', label: 'Investors', icon: TrendingUp },
];

const testimonials = [
  {
    id: 1,
    category: 'homeowner',
    name: "Abebe Selassie",
    role: "Bole Villa Owner",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Finding a home in Addis can be daunting, but Worthy Homes made it a breeze. Their transparency about the legal paperwork was what really won my trust.",
    rating: 5,
    tag: "Luxury Living"
  },
  {
    id: 2,
    category: 'investor',
    name: "Sara Tadesse",
    role: "Portfolio Manager",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "As an investor, I look for ROI and reliability. The team at Worthy Homes provided detailed market analytics that helped me secure three high-yield apartments in Kazanchis.",
    rating: 5,
    tag: "High ROI"
  },
  {
    id: 3,
    category: 'homeowner',
    name: "Samuel Kebede",
    role: "First-time Buyer",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    text: "I was nervous about my first purchase. They didn't just sell me a house; they educated me on the entire process. I'm now a proud owner in Sarbet.",
    rating: 5,
    tag: "Trusted Guidance"
  },
  {
    id: 4,
    category: 'investor',
    name: "Elena Rossi",
    role: "International Investor",
    image: "https://randomuser.me/api/portraits/women/67.jpg",
    text: "Managing properties from abroad is difficult. Worthy Homes' facility management services are world-class. My tenants are happy and my investment is safe.",
    rating: 5,
    tag: "Seamless Management"
  },
  {
    id: 5,
    category: 'homeowner',
    name: "Dawit Isaac",
    role: "Family Man",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    text: "We wanted a safe neighborhood for our kids. They found us a beautiful villa in a gated community that checked every single box.",
    rating: 5,
    tag: "Family Perfect"
  },
  {
    id: 6,
    category: 'investor',
    name: "Marta Wolde",
    role: "Real Estate Enthusiast",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
    text: "Their attention to detail in interior design services added immediate value to my property. They truly understand the luxury market in Ethiopia.",
    rating: 5,
    tag: "Value Added"
  }
];

export function TestimonialsColumn2() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredTestimonials = useMemo(() => {
    return activeCategory === 'all' 
      ? testimonials 
      : testimonials.filter(t => t.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="py-24 bg-green-50 dark:bg-slate-900 transition-colors duration-500 relative overflow-hidden">
      {/* Decorative Brand Elements */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(34,197,94,0.08)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_100%_0%,rgba(34,197,94,0.03)_0%,transparent_50%)] pointer-events-none transition-colors duration-500" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-5 mb-20">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-3 px-8 py-4 rounded-full font-black uppercase tracking-widest text-[10px] transition-all duration-500 active:scale-95 ${
                  isActive 
                    ? 'bg-green-600 text-white shadow-2xl shadow-green-600/30 scale-110' 
                    : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-500 border-2 border-green-100 dark:border-slate-700 hover:border-green-300 dark:hover:border-green-600'
                }`}
              >
                <Icon size={16} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Masonry-style Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode='popLayout'>
            {filteredTestimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.215, 0.61, 0.355, 1] }}
                className="group relative"
              >
                <div className="h-full bg-white dark:bg-slate-800 rounded-[3.5rem] p-10 border-2 border-transparent hover:border-green-200 dark:hover:border-green-700 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)] dark:shadow-black/20 hover:shadow-[0_40px_80px_-20px_rgba(34,197,94,0.15)] transition-all duration-500 flex flex-col">
                  
                  {/* Card Header */}
                  <div className="flex justify-between items-start mb-8">
                    <div className="bg-green-100 dark:bg-slate-900 text-green-700 dark:text-green-500 text-[9px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border border-green-200 dark:border-slate-700 transition-colors duration-500">
                      {testimonial.tag}
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Quote Icon Background */}
                  <div className="absolute top-12 right-12 text-green-600 dark:text-green-500 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none transition-colors duration-500">
                    <Quote size={100} />
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="relative z-10 text-slate-700 dark:text-slate-200 leading-relaxed font-bold mb-10 text-xl italic opacity-90 group-hover:opacity-100 transition-all duration-500">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Footer Profile */}
                  <div className="mt-auto flex items-center gap-5 border-t border-green-50 dark:border-slate-700 pt-8 transition-colors duration-500">
                    <div className="relative">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-[1.5rem] object-cover border-2 border-green-100 dark:border-slate-600 shadow-md transition-transform group-hover:scale-110 duration-500"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-green-600 dark:bg-green-700 rounded-full p-1.5 border-2 border-white dark:border-slate-800 shadow-lg transition-colors duration-500">
                        <CheckCircle2 size={12} className="text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-black text-slate-950 dark:text-white text-base leading-none mb-1.5 tracking-tight transition-colors duration-500">{testimonial.name}</h4>
                      <p className="text-[10px] font-black text-green-600 dark:text-green-500 uppercase tracking-[0.2em] transition-colors duration-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Global Stats Overlay */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-12 bg-slate-950 dark:bg-black rounded-[4rem] p-12 md:p-20 text-center text-white shadow-2xl shadow-green-950/20 relative overflow-hidden transition-colors duration-500"
        >
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_100%_0%,rgba(34,197,94,0.1)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_100%_0%,rgba(34,197,94,0.05)_0%,transparent_50%)] pointer-events-none transition-colors duration-500" />
          
          {[
            { value: "4.9/5", label: "Average Rating", sub: "Based on 500+ reviews" },
            { value: "98%", label: "Satisfaction", sub: "Client referral rate" },
            { value: "100%", label: "Transparency", sub: "Verified legal status" },
            { value: "24/7", label: "Support", sub: "Dedicated assistance" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-3 group">
              <span className="text-4xl md:text-6xl font-black text-green-500 tracking-tighter group-hover:scale-110 transition-transform duration-500">{stat.value}</span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 mb-1 transition-colors duration-500">{stat.label}</span>
              <div className="h-0.5 w-8 bg-green-600/30 mx-auto mb-2 transition-colors duration-500" />
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest transition-colors duration-500">{stat.sub}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
