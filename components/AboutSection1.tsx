
"use client";

import React, { useRef } from "react";
import { TimelineContent } from "./timeline-animation";
import { VerticalCutReveal } from "./vertical-cut-reveal";
import { ArrowRight, ShieldCheck, Gem, Landmark } from "lucide-react";
import { useRouter, Image } from "../lib/next-compat";
import { motion } from "framer-motion";

export default function AboutSection1() {
  const heroRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1]
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: 30,
      opacity: 0,
    },
  };

  const featureItems = [
    {
      icon: ShieldCheck,
      title: "Uwavering Trust",
      desc: "Verified listings and secure transactions."
    },
    {
      icon: Landmark,
      title: "Transparent Process",
      desc: "Clear communication at every single step."
    },
    {
      icon: Gem,
      title: "Expert Curation",
      desc: "Hand-picked luxury properties only."
    }
  ];

  return (
    <section
      className="relative py-24 lg:py-32 px-6 bg-green-100 dark:bg-slate-900/40 transition-colors duration-500 overflow-hidden"
      ref={heroRef}
    >
      {/* Subtle Background Textures */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-green-200/40 dark:bg-green-900/10 skew-x-[-12deg] translate-x-1/4 -z-10 transition-colors duration-500" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Content Column */}
        <div className="relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-green-700 dark:text-green-500 font-black uppercase tracking-[0.2em] text-[10px] mb-6 transition-colors duration-500"
          >
            <div className="w-10 h-[2px] bg-green-600" />
            Our Legacy
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 leading-[1.1] tracking-tight transition-colors duration-500">
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.1}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25,
                delay: 0.1,
              }}
              containerClassName="text-slate-900 dark:text-white justify-start"
            >
              {"Defining The Standard of Luxury Living"}
            </VerticalCutReveal>
          </h2>

          <TimelineContent
            as="p"
            animationNum={1}
            customVariants={revealVariants}
            timelineRef={heroRef}
            className="text-slate-700 dark:text-slate-300 text-lg mb-10 leading-relaxed max-w-xl font-medium transition-colors duration-500"
          >
            Since 2020, Worthy Homes has been the bridge between visionary architecture and those seeking a sanctuary of their own. We believe that true luxury lies in the details—and in the absolute confidence of a secure investment.
          </TimelineContent>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {featureItems.map((item, idx) => (
              <TimelineContent
                key={idx}
                animationNum={idx + 2}
                customVariants={revealVariants}
                timelineRef={heroRef}
                className="group"
              >
                <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-6 rounded-[2rem] border border-green-200 dark:border-slate-700 group-hover:bg-white dark:group-hover:bg-slate-800 group-hover:border-green-600 group-hover:shadow-2xl group-hover:shadow-green-600/10 transition-all duration-500">
                  <item.icon className="text-green-600 dark:text-green-500 mb-3 transition-colors duration-500" size={28} />
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1 transition-colors duration-500">{item.title}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-[11px] leading-snug font-medium uppercase tracking-wider transition-colors duration-500">{item.desc}</p>
                </div>
              </TimelineContent>
            ))}
          </div>

          <TimelineContent
            as="div"
            animationNum={6}
            customVariants={revealVariants}
            timelineRef={heroRef}
          >
            <button
              onClick={() => router.push("/about_us")}
              className="group relative inline-flex items-center gap-4 bg-green-600 hover:bg-green-500 text-white px-10 py-5 rounded-full overflow-hidden transition-all duration-300 hover:pr-12 active:scale-95 shadow-xl shadow-green-600/20"
            >
              <span className="relative z-10 font-black text-sm uppercase tracking-widest">Discover Our Story</span>
              <div className="absolute inset-0 bg-green-700 dark:bg-green-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </TimelineContent>
        </div>

        {/* Right Image Collage Column */}
        <div className="relative h-[500px] sm:h-[600px] lg:h-[700px]">
          {/* Main Large Image */}
          <TimelineContent
            animationNum={2}
            customVariants={revealVariants}
            timelineRef={heroRef}
            className="absolute top-10 right-0 w-[85%] h-[80%] rounded-[4rem] overflow-hidden shadow-2xl z-20 border-[8px] border-white dark:border-slate-800 transition-colors duration-500"
          >
            <Image 
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop"
              alt="Luxury Interior"
              fill
              className="object-cover transition-transform duration-1000 hover:scale-110"
            />
          </TimelineContent>

          {/* Secondary Floating Image */}
          <TimelineContent
            animationNum={4}
            customVariants={revealVariants}
            timelineRef={heroRef}
            className="absolute bottom-0 left-0 w-[55%] h-[45%] rounded-[3rem] overflow-hidden shadow-2xl z-30 border-[12px] border-white dark:border-slate-800 transition-colors duration-500"
          >
            <Image 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
              alt="Property Facade"
              fill
              className="object-cover transition-transform duration-1000 hover:scale-110"
            />
          </TimelineContent>

          {/* Decorative Elements */}
          <motion.div 
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-10 -left-10 w-48 h-48 border-2 border-green-300 dark:border-green-800 rounded-full border-dashed -z-10 transition-colors duration-500"
          />
          
          {/* Experience Badge */}
          <TimelineContent
            animationNum={7}
            customVariants={revealVariants}
            timelineRef={heroRef}
            className="absolute top-1/2 -left-8 lg:-left-12 z-40 bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-2xl shadow-green-900/10 border border-green-100 dark:border-slate-700 transition-colors duration-500"
          >
            <div className="flex flex-col items-center">
              <span className="text-5xl font-black text-green-600 leading-none tracking-tighter">05+</span>
              <span className="text-[10px] uppercase font-black text-slate-400 dark:text-slate-500 tracking-[0.2em] mt-3 transition-colors duration-500">Years of Service</span>
            </div>
          </TimelineContent>
        </div>

      </div>
    </section>
  );
}
