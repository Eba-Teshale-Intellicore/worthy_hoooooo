
'use client';

import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { motion } from 'framer-motion';
import { MapPin, TrendingUp, Home, ShieldCheck, Star } from 'lucide-react';

type Property = {
  id: number;
  title: string;
  price: string;
  lat: number;
  lng: number;
};

const properties: Property[] = [
  { id: 1, title: 'Luxury Villa in Bole', price: '$450,000', lat: 9.0241, lng: 38.7679 },
  { id: 2, title: 'Modern Apartment in Kazanchis', price: '$320,000', lat: 9.0225, lng: 38.7535 },
  { id: 3, title: 'Family Home in Sarbet', price: '$280,000', lat: 9.0080, lng: 38.7550 },
  { id: 4, title: 'Villa in Old Airport', price: '$500,000', lat: 9.0180, lng: 38.7915 },
  { id: 5, title: 'Apartment in CMC', price: '$250,000', lat: 9.0350, lng: 38.7590 },
];

const features = [
  {
    icon: MapPin,
    title: "Strategic Locations",
    description: "Our properties are situated in the most sought-after growth corridors."
  },
  {
    icon: TrendingUp,
    title: "Exceptional ROI",
    description: "Benefit from high appreciation rates in premium districts."
  },
  {
    icon: ShieldCheck,
    title: "Legal Peace",
    description: "100% verified documentation and transparent processing."
  },
  {
    icon: Home,
    title: "Modern Design",
    description: "Architectural excellence that prioritizes aesthetic elegance."
  }
];

export default function PropertyMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || leafletMapRef.current) return;

    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    });

    const map = L.map(mapRef.current, {
      center: [9.0241, 38.7679],
      zoom: 13,
      scrollWheelZoom: false,
    });
    leafletMapRef.current = map;

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    properties.forEach((p) => {
      const customPopup = `
        <div style="font-family: 'Plus Jakarta Sans', sans-serif; padding: 4px; color: #0f172a;">
          <h3 style="font-weight: 800; margin: 0 0 4px 0;">${p.title}</h3>
          <p style="font-weight: 600; color: #16a34a; margin: 0;">${p.price}</p>
        </div>
      `;
      L.marker([p.lat, p.lng])
        .addTo(map)
        .bindPopup(customPopup);
    });

    return () => {
      map.remove();
      leafletMapRef.current = null;
    };
  }, []);

  return (
    <section className="bg-green-200 dark:bg-slate-900 transition-colors duration-500 py-32 relative overflow-hidden border-y border-green-300 dark:border-slate-800">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(34,197,94,0.15)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_100%_0%,rgba(34,197,94,0.05)_0%,transparent_50%)] pointer-events-none transition-colors duration-500" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          <div className="lg:col-span-5 flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-white/40 dark:border-slate-700 text-green-800 dark:text-green-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8 w-fit transition-colors duration-500"
            >
              <Star size={14} className="fill-green-600 transition-colors duration-500" /> Our Footprint
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-black text-slate-950 dark:text-white leading-[1.1] tracking-tight mb-8 transition-colors duration-500"
            >
              Strategic Locations for <span className="text-green-700 dark:text-green-500">Secure Investment</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-bold mb-12 opacity-80 transition-colors duration-500"
            >
              IntelliCore specializes in identifies high-potential districts across Ethiopia's growing urban centers. Our interactive map highlights our most exclusive luxury listings.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-md p-6 rounded-[2.5rem] border border-white/40 dark:border-slate-700 group hover:bg-white dark:hover:bg-slate-800 hover:border-green-600 dark:hover:border-green-500 hover:shadow-2xl hover:shadow-green-900/10 transition-all duration-500"
                >
                  <div className="bg-green-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg border border-green-500 mb-4 group-hover:scale-110 transition-all">
                    <feature.icon size={24} />
                  </div>
                  <h4 className="font-black text-slate-900 dark:text-white text-sm mb-2 transition-colors duration-500">{feature.title}</h4>
                  <p className="text-[11px] text-slate-700 dark:text-slate-400 leading-relaxed font-bold uppercase tracking-wider transition-colors duration-500">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="relative p-3 bg-white dark:bg-slate-800 rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-4 border-white dark:border-slate-700 overflow-hidden group transition-colors duration-500">
              <div 
                ref={mapRef} 
                className="w-full h-[500px] md:h-[680px] rounded-[3.2rem] z-0" 
              />
              
              {/* Overlay Stat */}
              <div className="absolute top-10 right-10 z-[1000] bg-slate-950 dark:bg-slate-700 text-white p-8 rounded-[2.5rem] shadow-2xl border border-white/10 dark:border-slate-600 group-hover:-translate-y-2 transition-transform duration-500">
                <div className="text-4xl font-black text-green-500 mb-1 tracking-tighter">25+</div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Active Projects</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
