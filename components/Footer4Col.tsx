
"use client";

import React from "react";
import { data } from "../lib/data";
import { Link, Image } from "../lib/next-compat";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";

export default function Footer4Col() {
  const Year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 mt-20 w-full rounded-t-[3rem] shadow-2xl overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Column 1: Branding & Identity */}
          <div className="flex flex-col space-y-6">
            <Link href="/" className="flex items-center gap-3 w-fit group">
              <div className="bg-green-600 p-2.5 rounded-xl font-bold text-white tracking-tighter group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-600/20">
                IC
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                INTELLICORE
              </span>
            </Link>
            
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              {data.company.description}
            </p>

            <div className="flex items-center gap-4">
              {data.socialLinks.map(({ icon: Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-900 p-2.5 rounded-full hover:bg-green-600 hover:text-white transition-all duration-300 border border-slate-800"
                >
                  <span className="sr-only">{label}</span>
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              Explore
              <div className="h-1 w-4 bg-green-600 rounded-full" />
            </h4>
            <ul className="space-y-4">
              {[
                { text: "Home", href: "/" },
                { text: "About Us", href: "/about_us" },
                { text: "Property Projects", href: "/project" },
                { text: "Contact Support", href: "/contact" },
                { text: "Testimonials", href: "/testimonials" },
              ].map(({ text, href }) => (
                <li key={text}>
                  <Link
                    href={href}
                    className="text-sm hover:text-green-500 hover:translate-x-1 transition-all inline-flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services (Dynamic from data) */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              Services
              <div className="h-1 w-4 bg-green-600 rounded-full" />
            </h4>
            <ul className="space-y-4">
              {Object.entries(data.services).map(([key, value]) => (
                <li key={key}>
                  <Link
                    href={value}
                    className="text-sm capitalize hover:text-green-500 transition-colors"
                  >
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/help" className="text-sm hover:text-green-500 transition-colors">
                  Client Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Direct Contact */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              Stay Updated
              <div className="h-1 w-4 bg-green-600 rounded-full" />
            </h4>
            <p className="text-sm text-slate-500 mb-6">
              Subscribe to our newsletter for the latest property deals and news.
            </p>
            
            <div className="relative group mb-8">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-slate-900 border border-slate-800 rounded-2xl py-4 pl-5 pr-14 text-sm text-white focus:outline-none focus:ring-2 focus:ring-green-600 transition-all"
              />
              <button className="absolute right-2 top-2 bg-green-600 p-2.5 rounded-xl hover:bg-green-500 transition-colors shadow-lg">
                <Send size={18} className="text-white" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <div className="bg-slate-900 p-2 rounded-lg text-green-600 border border-slate-800">
                  <Mail size={16} />
                </div>
                <a href={`mailto:${data.contact.email}`} className="text-sm hover:text-white transition-colors">
                  {data.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="bg-slate-900 p-2 rounded-lg text-green-600 border border-slate-800">
                  <Phone size={16} />
                </div>
                <a href={`tel:${data.contact.phone}`} className="text-sm hover:text-white transition-colors">
                  {data.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="bg-slate-900 p-2 rounded-lg text-green-600 border border-slate-800">
                  <MapPin size={16} />
                </div>
                <span className="text-sm hover:text-white transition-colors">
                  Addis Ababa, Ethiopia
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="mt-20 pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-medium tracking-widest uppercase text-slate-600">
            © {Year} {data.company.name}. Crafted with Excellence.
          </p>
          
          <div className="flex items-center gap-8 text-xs font-medium uppercase tracking-wider">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
