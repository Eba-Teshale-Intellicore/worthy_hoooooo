
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { tiktokPosts } from '../lib/data';
import { Instagram, Music2, Share2, Heart, MessageCircle } from 'lucide-react';

type ColumnProps = {
  posts: string[];
  duration?: number;
  reverse?: boolean;
};

function getEmbedUrl(url: string) {
  const parts = url.split('/video/');
  const id = parts[1];
  return `https://www.tiktok.com/embed/v2/${id}`;
}

const TikTokCard = ({ url }: { url: string }) => {
  return (
    <div className="group relative w-[280px] sm:w-[300px] md:w-[320px] rounded-[3rem] p-2 bg-white dark:bg-slate-900 shadow-2xl transition-all duration-500 hover:scale-[1.02] active:scale-95 border-2 border-transparent hover:border-green-600/30">
      {/* Phone Frame Appearance */}
      <div className="relative h-[500px] sm:h-[560px] rounded-[2.5rem] overflow-hidden bg-slate-900 border-[8px] border-slate-950 dark:border-slate-800 shadow-inner transition-colors duration-500">
        <iframe
          src={getEmbedUrl(url)}
          className="w-full h-full pointer-events-none border-0 opacity-90 group-hover:opacity-100 transition-opacity"
          allow="autoplay; encrypted-media"
          allowFullScreen
          scrolling="no"
        />
        
        {/* Overlay Interactions (Visual only for the wall effect) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
        
        <div className="absolute bottom-6 right-5 flex flex-col gap-5 items-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-6 group-hover:translate-y-0">
          <div className="bg-green-600 p-2.5 rounded-full border border-green-500 text-white shadow-lg shadow-green-600/20 hover:bg-green-500 transition-colors">
            <Heart size={20} fill="currentColor" />
          </div>
          <div className="bg-white/20 backdrop-blur-md p-2.5 rounded-full border border-white/30 text-white hover:bg-green-600 hover:border-green-500 transition-all">
            <MessageCircle size={20} fill="currentColor" />
          </div>
          <div className="bg-white/20 backdrop-blur-md p-2.5 rounded-full border border-white/30 text-white hover:bg-green-600 hover:border-green-500 transition-all">
            <Share2 size={20} />
          </div>
        </div>

        {/* Brand Badge inside card */}
        <div className="absolute bottom-8 left-8 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white text-xs font-black shadow-lg shadow-green-600/20">WH</div>
          <span className="text-white text-sm font-black tracking-tight drop-shadow-md">@worthy_homes</span>
        </div>
        
        {/* Direct Link Overlay */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10 cursor-pointer"
        />
      </div>
    </div>
  );
};

const TikTokColumn = ({ posts, duration = 20, reverse }: ColumnProps) => {
  const loopPosts = [...posts, ...posts];

  return (
    <div className="overflow-hidden h-[600px] sm:h-[700px] lg:h-[800px] px-2">
      <motion.div
        animate={{
          translateY: reverse ? '-50%' : '0%',
        }}
        initial={{
          translateY: reverse ? '0%' : '-50%',
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        className="flex flex-col gap-10 py-6"
      >
        {loopPosts.map((url, i) => (
          <TikTokCard key={i} url={url} />
        ))}
      </motion.div>
    </div>
  );
};

export default function SocialMediaExplorer() {
  const third = Math.ceil(tiktokPosts.length / 3);
  const col1 = tiktokPosts.slice(0, third);
  const col2 = tiktokPosts.slice(third, third * 2);
  const col3 = tiktokPosts.slice(third * 2);

  return (
    <section className="relative py-32 bg-green-100 dark:bg-slate-950 transition-colors duration-500 overflow-hidden border-y border-green-200 dark:border-slate-800">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(34,197,94,0.1)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_100%_0%,rgba(34,197,94,0.03)_0%,transparent_50%)] transition-colors duration-500" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_100%,rgba(34,197,94,0.1)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_0%_100%,rgba(34,197,94,0.03)_0%,transparent_50%)] transition-colors duration-500" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 px-5 py-2 rounded-full bg-white dark:bg-slate-900 shadow-xl shadow-green-900/5 dark:shadow-black/20 border border-green-200 dark:border-slate-800 text-green-700 dark:text-green-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8 transition-colors duration-500"
          >
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-ping" />
            Live Community Hub
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-950 dark:text-white mb-8 tracking-tighter leading-none transition-colors duration-500"
          >
            See Our Homes <span className="text-green-600">In Action</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-700 dark:text-slate-300 font-bold max-w-2xl leading-relaxed mb-12 opacity-80 transition-colors duration-500"
          >
            Explore exclusive tours, market insights, and happy homeowner stories direct from our TikTok community.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <a
              href="https://www.tiktok.com/@worthy_homes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-10 py-5 rounded-full bg-slate-950 dark:bg-white dark:text-slate-950 text-white font-black uppercase tracking-widest text-xs hover:bg-green-600 hover:text-white dark:hover:bg-green-500 dark:hover:text-slate-900 transition-all shadow-2xl hover:shadow-slate-950/40 active:scale-95 group"
            >
              <Music2 size={20} className="group-hover:rotate-12 transition-transform" />
              Follow @worthy_homes
            </a>
            <a
              href="https://instagram.com/worthy_homes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-10 py-5 rounded-full bg-white dark:bg-slate-900 text-slate-950 dark:text-white border-2 border-slate-100 dark:border-slate-800 font-black uppercase tracking-widest text-xs hover:border-green-600 hover:text-green-700 dark:hover:border-green-500 transition-all shadow-xl active:scale-95 group"
            >
              <Instagram size={20} className="text-pink-600 group-hover:scale-110 transition-transform" />
              Follow on Instagram
            </a>
          </motion.div>
        </div>

        {/* Scrolling Wall Grid */}
        <div className="relative">
          {/* Glass Gradient Fades */}
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-green-100 dark:from-slate-950 via-green-100/40 dark:via-slate-950/40 to-transparent z-20 pointer-events-none transition-colors duration-500" />
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-green-100 dark:from-slate-950 via-green-100/40 dark:via-slate-950/40 to-transparent z-20 pointer-events-none transition-colors duration-500" />
          
          <div className="flex justify-center gap-10 md:gap-14 lg:gap-20">
            <div className="hidden lg:block">
              <TikTokColumn posts={col1} duration={45} />
            </div>

            <div className="block">
              <TikTokColumn posts={col2} duration={60} reverse />
            </div>

            <div className="hidden md:block">
              <TikTokColumn posts={col3} duration={50} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
