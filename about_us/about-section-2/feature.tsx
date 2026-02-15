
"use client";

import React from "react";
import { Image } from "../../lib/next-compat";
import { motion } from "framer-motion";
import { Quote, Sparkles, Target, Award } from "lucide-react";
import { Button } from "./button";

interface Feature1Props {
  titles?: string;
  descriptions1?: string;
  descriptions2?: string;
  descriptions3?: string;
  imageSrc1?: string;
  imageAlt1?: string;
  imageSrc2?: string;
  imageAlt2?: string;
  buttonPrimary?: {
    label: string;
    href: string;
  };
  buttonSecondary?: {
    label: string;
    href: string;
  };
}

export const Feature1 = ({
  titles = "Why Choose Intellicore",
  descriptions1 = "Intellicore is a premier real estate company dedicated to delivering refined property experiences defined by elegance, trust, and exceptional service. Since our inception, our mission has been to guide every client toward the right home with confidence and clarity. We combine deep market expertise with personalized guidance and transparent practices.",
  descriptions2 = "At Intellicore, we do more than help you buy, sell, or invest – we build lasting relationships grounded in results. Whether you’re a first-time buyer or a seasoned institutional investor, our dedicated team provides personalized guidance tailored specifically to your financial and lifestyle goals.",
  descriptions3 = "My name is Israel Dedesa, Founder and CEO of Intellicore. Our company was built on a simple yet powerful philosophy: exceptional customer service — 'Let the service begin.' From the start, my journey has been guided by a clear vision: to create a platform that people can truly trust with their most significant life decisions.",
  imageSrc1 = "https://images.unsplash.com/photo-1573496130141-2097202104bb?q=80&w=1200&auto=format&fit=crop",
  imageAlt1 = "Our Strategy Meeting",
  imageSrc2 = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop",
  imageAlt2 = "CEO Israel Dedesa",
  buttonPrimary,
  buttonSecondary,
}: Feature1Props) => {

  return (
    <section className="py-24 relative overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">

        {/* Brand Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-center">
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8 transition-colors duration-500"
            >
              <Sparkles size={14} /> The Intellicore Legacy
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-6xl font-black text-slate-950 dark:text-white mb-8 tracking-tight leading-[1.1] transition-colors duration-500"
            >
              Elevating the Standard of <span className="text-green-600">Luxury Living</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed transition-colors duration-500"
            >
              {descriptions1}
            </motion.p>
            {(buttonPrimary || buttonSecondary) && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                {buttonPrimary && (
                  <Button asChild size="lg" className="rounded-full px-8 font-bold bg-green-600 hover:bg-green-700 text-white border-none transition-all">
                    <a href={buttonPrimary.href}>{buttonPrimary.label}</a>
                  </Button>
                )}
                {buttonSecondary && (
                  <Button variant="outline" asChild size="lg" className="rounded-full px-8 font-bold border-green-600 dark:border-green-500 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/10 transition-all">
                    <a href={buttonSecondary.href}>{buttonSecondary.label}</a>
                  </Button>
                )}
              </motion.div>
            )}
          </div>
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 bg-green-200/30 dark:bg-green-900/10 rounded-[3rem] blur-2xl -z-10 transition-colors duration-500" />
            <div className="aspect-square relative rounded-[3rem] overflow-hidden shadow-2xl rotate-3 border-4 border-white dark:border-slate-800 transition-colors duration-500">
              <Image src={imageSrc1} alt={imageAlt1} fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-center">
          <div className="relative h-[500px] lg:h-[600px] order-2 lg:order-1">
             <div className="absolute inset-0 bg-slate-900 rounded-[3rem] overflow-hidden">
               <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop" alt="Premium Property" fill className="object-cover opacity-80" />
             </div>
             <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-2xl border border-slate-50 dark:border-slate-700 flex flex-col justify-center transition-colors duration-500">
                <Target className="text-green-600 dark:text-green-500 mb-4 transition-colors duration-500" size={32} />
                <h4 className="font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-500">Market Precision</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium transition-colors duration-500">Data-driven insights guiding every property acquisition.</p>
             </div>
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-4xl font-black text-slate-950 dark:text-white mb-8 tracking-tight transition-colors duration-500">{titles}</h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium mb-12 transition-colors duration-500">{descriptions2}</p>
            
            <div className="space-y-6">
              {[
                { title: "Personalized Strategies", desc: "Tailored to your unique investment goals." },
                { title: "Expert Negotiation", desc: "Securing the best value in competitive markets." },
                { title: "End-to-End Support", desc: "Seamless guidance from search to final closing." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm transition-colors duration-500 hover:border-green-600 dark:hover:border-green-500 group">
                  <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 p-2 rounded-lg transition-colors duration-500 group-hover:bg-green-600 group-hover:text-white"><Award size={20} /></div>
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-white text-sm transition-colors duration-500">{item.title}</h5>
                    <p className="text-xs text-slate-500 dark:text-slate-400 transition-colors duration-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CEO Quote Section */}
        <div className="bg-slate-950 dark:bg-black rounded-[4rem] p-12 lg:p-24 relative overflow-hidden group transition-colors duration-500">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-900/10 to-transparent -z-10" />
          <div className="absolute bottom-0 left-0 p-12 opacity-5 text-white">
            <Quote size={200} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-4 relative group">
               <div className="aspect-[4/5] relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10 transition-transform group-hover:scale-[1.02] duration-500">
                 <Image src={imageSrc2} alt={imageAlt2} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
               </div>
               <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[80%] bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl text-center transition-colors duration-500">
                 <h4 className="font-black text-slate-900 dark:text-white transition-colors duration-500">Israel Dedesa</h4>
                 <p className="text-[10px] font-black text-green-600 dark:text-green-500 uppercase tracking-widest transition-colors duration-500">Founder & CEO</p>
               </div>
            </div>
            <div className="lg:col-span-8">
              <Quote className="text-green-500 mb-8" size={48} />
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-8 leading-snug tracking-tight">
                "We are not just building properties — we are building trust, communities, and long-term relationships."
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                {descriptions3}
              </p>
              <div className="flex items-center gap-4 text-white group cursor-pointer hover:text-green-500 transition-colors">
                 <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center font-bold text-green-500 group-hover:border-green-500 transition-colors">ID</div>
                 <div className="flex flex-col">
                   <span className="font-bold tracking-widest uppercase text-xs">Israel Dedesa</span>
                   <span className="text-[10px] text-slate-500">Visionary Leadership</span>
                 </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
