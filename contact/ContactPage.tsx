
"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer4Col';
import { data } from '../lib/data';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle2, Globe, ArrowRight } from 'lucide-react';
import { Input } from './input';
import { Button } from './button';
import { Label } from './label';
import { Textarea } from './textarea';
import { motion } from 'framer-motion';

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    value: data.contact.email,
    description: "Our support team usually responds within 24 hours.",
    href: `mailto:${data.contact.email}`,
    color: "text-blue-700 dark:text-blue-400",
    bg: "bg-blue-100 dark:bg-blue-900/30"
  },
  {
    icon: Phone,
    title: "Call Us",
    value: data.contact.phone,
    description: "Available Mon-Fri from 8am to 6pm.",
    href: `tel:${data.contact.phone}`,
    color: "text-green-700 dark:text-green-400",
    bg: "bg-green-200 dark:bg-green-900/30"
  },
  {
    icon: MapPin,
    title: "Visit Office",
    value: "Addis Ababa, Ethiopia",
    description: "Primary Headquarters, Kazanchis District.",
    href: "https://maps.google.com",
    color: "text-rose-700 dark:text-rose-400",
    bg: "bg-rose-100 dark:bg-rose-900/30"
  }
];

export default function ContactPage() {
  const contactBackgrounds = [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop",
  ];

  return (
    <main className="min-h-screen bg-green-50 dark:bg-slate-950 transition-colors duration-500">
      <Navbar />
      <HeroSection 
        title="Connect With Our Team"
        subtitle="Expert guidance for your real estate journey is just a message away. We're here to help you find your perfect sanctuary."
        showSearch={false}
        backgrounds={contactBackgrounds}
      />
      
      {/* Quick Contact Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto -mt-24 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, i) => (
            <motion.a
              key={i}
              href={method.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-black/40 border-2 border-transparent hover:border-green-600 dark:hover:border-green-500 transition-all duration-500 hover:-translate-y-3"
            >
              <div className={`${method.bg} ${method.color} w-16 h-16 rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                <method.icon size={32} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2 tracking-tight transition-colors duration-500">{method.title}</h3>
              <p className="text-sm font-black text-green-700 dark:text-green-400 mb-3 tracking-tight transition-colors duration-500">{method.value}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium transition-colors duration-500">{method.description}</p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-green-100 dark:bg-slate-900/40 rounded-[4rem] mb-24 border border-green-200 dark:border-slate-800 transition-colors duration-500">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start p-6 md:p-12">
          
          {/* Left Side: Info & Presence */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div>
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white dark:bg-slate-800 shadow-xl shadow-green-900/5 dark:shadow-black/20 border border-green-200 dark:border-slate-700 text-green-700 dark:text-green-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8 transition-colors duration-500">
                <span className="flex h-2 w-2 rounded-full bg-green-600 transition-colors duration-500" />
                Open For Inquiries
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-950 dark:text-white tracking-tighter leading-none mb-8 transition-colors duration-500">
                Send Us a <span className="text-green-600">Message</span>
              </h2>
              <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-bold opacity-80 transition-colors duration-500">
                Whether you're looking to buy, sell, or invest, our specialized team is ready to provide the insights you need.
              </p>
            </div>

            <div className="space-y-10">
              {[
                { icon: Clock, title: "Swift Response", desc: "Our team aims to respond to all inquiries within 24 business hours." },
                { icon: Globe, title: "Global Network", desc: "Supporting local and international clients with seamless transitions." },
                { icon: CheckCircle2, title: "Verified Listings", desc: "Every property we discuss is pre-vetted for legal and quality standards." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="mt-1 bg-white dark:bg-slate-800 text-green-600 dark:text-green-500 p-4 rounded-2xl shadow-lg border border-green-100 dark:border-slate-700 group-hover:bg-green-600 dark:group-hover:bg-green-700 group-hover:text-white transition-all duration-500">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 dark:text-white text-xl mb-1 tracking-tight transition-colors duration-500">{item.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium transition-colors duration-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-10 border-t border-green-200 dark:border-slate-800 transition-colors duration-500">
              <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-widest text-xs mb-6 transition-colors duration-500">Follow Our Journey</h4>
              <div className="flex gap-5">
                {data.socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-green-200 dark:border-slate-700 text-slate-400 hover:text-green-600 dark:hover:text-green-400 hover:border-green-600 dark:hover:border-green-500 hover:shadow-2xl transition-all active:scale-90"
                  >
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-900 p-10 md:p-16 rounded-[4rem] border border-green-200 dark:border-slate-800 shadow-2xl shadow-green-900/10 dark:shadow-black/40 relative overflow-hidden transition-colors duration-500"
          >
            <div className="absolute -top-10 -right-10 p-12 opacity-5 text-green-600 dark:text-green-500 rotate-12 transition-colors duration-500">
              <MessageSquare size={200} />
            </div>

            <form className="relative z-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 ml-2 transition-colors duration-500">Full Name</Label>
                  <Input id="name" placeholder="John Doe" className="bg-green-50/50 dark:bg-slate-950/50 border-green-100 dark:border-slate-800 focus:border-green-600 dark:focus:border-green-500 focus:ring-green-600 dark:focus:ring-green-500 h-16 rounded-2xl px-6 font-bold shadow-inner dark:text-white transition-colors duration-500" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 ml-2 transition-colors duration-500">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-green-50/50 dark:bg-slate-950/50 border-green-100 dark:border-slate-800 focus:border-green-600 dark:focus:border-green-500 focus:ring-green-600 dark:focus:ring-green-500 h-16 rounded-2xl px-6 font-bold shadow-inner dark:text-white transition-colors duration-500" />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="subject" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 ml-2 transition-colors duration-500">Inquiry Type</Label>
                <select id="subject" className="w-full bg-green-50/50 dark:bg-slate-950/50 border border-green-100 dark:border-slate-800 focus:border-green-600 dark:focus:border-green-500 h-16 rounded-2xl px-6 text-sm font-black focus:ring-2 focus:ring-green-600/20 transition-all outline-none appearance-none shadow-inner dark:text-white transition-colors duration-500">
                  <option className="dark:bg-slate-900">Property Purchase</option>
                  <option className="dark:bg-slate-900">Selling a Property</option>
                  <option className="dark:bg-slate-900">Investment Consultation</option>
                  <option className="dark:bg-slate-900">Property Management</option>
                  <option className="dark:bg-slate-900">Other Inquiry</option>
                </select>
              </div>

              <div className="space-y-3">
                <Label htmlFor="message" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 ml-2 transition-colors duration-500">Your Message</Label>
                <Textarea id="message" placeholder="How can we help you today?" className="bg-green-50/50 dark:bg-slate-950/50 border-green-100 dark:border-slate-800 focus:border-green-600 dark:focus:border-green-500 min-h-[180px] rounded-[2.5rem] p-7 font-bold shadow-inner dark:text-white transition-colors duration-500" />
              </div>

              <Button className="w-full bg-green-600 hover:bg-green-700 h-18 rounded-[2.5rem] text-lg font-black uppercase tracking-widest shadow-2xl shadow-green-600/30 flex gap-4 transition-all active:scale-95 group">
                Send Inquiry <Send size={24} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              </Button>

              <p className="text-center text-[10px] text-slate-400 dark:text-slate-500 font-black uppercase tracking-widest transition-colors duration-500">
                Protected by <span className="text-green-600 dark:text-green-500">Enterprise Security</span>
              </p>
            </form>
          </motion.div>

        </div>
      </section>

      {/* Decorative Grid / Brand Strip */}
      <section className="py-24 bg-slate-950 dark:bg-black overflow-hidden rounded-t-[4rem] transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16 text-center md:text-left">
           <div>
              <h3 className="text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight leading-none">Ready to Start Your Journey?</h3>
              <p className="text-green-500 dark:text-green-400 font-black uppercase tracking-widest text-xs">Download our 2024 Market Insights Report today.</p>
           </div>
           <button className="bg-white text-slate-950 px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-green-600 hover:text-white transition-all shadow-2xl shadow-white/10 active:scale-95 flex items-center gap-4">
             Download Guide <ArrowRight size={20} />
           </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
