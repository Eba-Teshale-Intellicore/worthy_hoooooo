
"use client";

import React, { useState, useEffect } from "react";
import { Image, Link, usePathname } from "../lib/next-compat";
import { 
  AiOutlineHome, 
  AiOutlineFundProjectionScreen, 
  AiOutlineUser,
  AiOutlineMessage
} from "react-icons/ai";
import { CgGitFork } from "react-icons/cg";
import { Sun, Moon, Monitor } from "lucide-react";

type Theme = 'light' | 'dark' | 'system';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>('system');

  const pathname = usePathname();

  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as Theme) || 'system';
    setTheme(savedTheme);
    applyTheme(savedTheme);

    const handleScroll = () => setIsScrolled(window.scrollY >= 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const root = window.document.documentElement;
    if (newTheme === 'dark' || (newTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  const handleToggleTheme = () => {
    const themes: Theme[] = ['light', 'dark', 'system'];
    const nextTheme = themes[(themes.indexOf(theme) + 1) % themes.length];
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    applyTheme(nextTheme);
  };

  const navClass = (path: string): string =>
    `relative px-4 py-2 text-sm font-bold tracking-tight transition-all duration-300 flex items-center gap-2 group ${
      pathname === path
        ? "text-green-600"
        : isScrolled ? "text-slate-700 dark:text-slate-200 hover:text-green-600 dark:hover:text-green-500" : "text-white hover:text-green-400"
    }`;

  const renderThemeIcon = () => {
    switch (theme) {
      case 'light': return <Sun size={18} />;
      case 'dark': return <Moon size={18} />;
      case 'system': return <Monitor size={18} />;
    }
  };

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-500 ${
        isScrolled
          ? "py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800 shadow-[0_4px_30px_rgba(0,0,0,0.03)]"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center group transition-transform active:scale-95">
          <div className="bg-green-600 p-2.5 rounded-[0.9rem] font-black text-white tracking-tighter shadow-lg shadow-green-600/20 group-hover:rotate-6 transition-transform">
            IC
          </div>
          <div className="ml-3 flex flex-col">
            <span className={`font-black text-xl leading-none tracking-tighter transition-colors duration-500 ${isScrolled ? 'text-slate-900 dark:text-white' : 'text-white'}`}>
              INTELLICORE
            </span>
            <span className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-500 ${isScrolled ? 'text-green-600 dark:text-green-400' : 'text-green-400'}`}>
              Real Estate
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-2">
          <Link href="/" className={navClass("/")}>
            <AiOutlineHome size={18} /> Home
            {pathname === "/" && <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-green-600 rounded-full" />}
          </Link>

          <Link href="/about_us" className={navClass("/about_us")}>
            <AiOutlineUser size={18} /> About
            {pathname === "/about_us" && <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-green-600 rounded-full" />}
          </Link>

          <Link href="/project" className={navClass("/project")}>
            <AiOutlineFundProjectionScreen size={18} /> Projects
            {pathname === "/project" && <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-green-600 rounded-full" />}
          </Link>

          <Link href="/contact" className={navClass("/contact")}>
            <AiOutlineMessage size={18} /> Contact
            {pathname === "/contact" && <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-green-600 rounded-full" />}
          </Link>

          <div className={`h-4 w-px mx-2 ${isScrolled ? 'bg-slate-200 dark:bg-slate-700' : 'bg-white/20'}`} />

          {/* Theme Toggle Button */}
          <button
            onClick={handleToggleTheme}
            title={`Current: ${theme}. Click to cycle.`}
            className={`p-2.5 rounded-full transition-all flex items-center justify-center gap-2 font-bold text-[10px] uppercase tracking-widest ${
              isScrolled 
                ? 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-500' 
                : 'bg-white/10 text-white hover:bg-white/20 hover:text-green-400'
            }`}
          >
            {renderThemeIcon()}
          </button>

          <a
            href="https://github.com/Eba-Teshale-Intellicore"
            target="_blank"
            rel="noreferrer"
            className={`p-2.5 rounded-full transition-all ${isScrolled ? 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-green-600 hover:text-white' : 'bg-white/10 text-white hover:bg-green-600'}`}
          >
            <CgGitFork size={20} />
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={handleToggleTheme}
            className={`p-2.5 rounded-2xl transition-all ${isScrolled ? 'bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white' : 'bg-white/10 text-white'}`}
          >
            {renderThemeIcon()}
          </button>
          <button
            className={`p-2.5 rounded-2xl transition-all ${isScrolled ? 'bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white' : 'bg-white/10 text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between items-end">
              <span className={`h-0.5 rounded-full bg-current transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
              <span className={`h-0.5 rounded-full bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-4'}`} />
              <span className={`h-0.5 rounded-full bg-current transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`} />
            </div>
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-20 left-4 right-4 bg-white dark:bg-slate-900 rounded-[2rem] p-6 shadow-2xl border border-slate-100 dark:border-slate-800 transition-all duration-500 origin-top ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-2">
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-green-50 dark:hover:bg-green-900/30 text-slate-900 dark:text-slate-100 font-bold transition-colors">
            <AiOutlineHome size={22} className="text-green-600" /> Home
          </Link>
          <Link href="/about_us" onClick={() => setIsOpen(false)} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-green-50 dark:hover:bg-green-900/30 text-slate-900 dark:text-slate-100 font-bold transition-colors">
            <AiOutlineUser size={22} className="text-green-600" /> About Us
          </Link>
          <Link href="/project" onClick={() => setIsOpen(false)} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-green-50 dark:hover:bg-green-900/30 text-slate-900 dark:text-slate-100 font-bold transition-colors">
            <AiOutlineFundProjectionScreen size={22} className="text-green-600" /> Projects
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-green-50 dark:hover:bg-green-900/30 text-slate-900 dark:text-slate-100 font-bold transition-colors">
            <AiOutlineMessage size={22} className="text-green-600" /> Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
