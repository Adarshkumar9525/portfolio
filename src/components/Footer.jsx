import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-200/80 dark:border-white/[0.08] bg-slate-100/60 dark:bg-[#06080d] text-slate-600 dark:text-slate-400 text-xs relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-500 p-[1.5px] shadow-sm">
              <div className="w-full h-full bg-white dark:bg-[#07090e] rounded-[9px] flex items-center justify-center">
                <span className="font-mono font-black text-xs text-gradient">AK</span>
              </div>
            </div>
            <div>
              <div className="font-bold text-slate-900 dark:text-white text-sm">{portfolioData.personal.name}</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">Full Stack Engineer (MERN Stack)</div>
            </div>
          </div>

          {/* Copyright & Tech Stack Credit */}
          <div className="text-center md:text-left text-slate-500 dark:text-slate-400 text-xs">
            &copy; {new Date().getFullYear()} Adarsh Kumar. Crafted with React 18, Vite, Tailwind CSS & Framer Motion.
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-2.5">
            <a 
              href={portfolioData.personal.github} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-400/40 transition-colors shadow-sm"
            >
              <Github className="w-4 h-4" />
            </a>

            <a 
              href={portfolioData.personal.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-400/40 transition-colors shadow-sm"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a 
              href={`mailto:${portfolioData.personal.email}`}
              aria-label="Email"
              className="p-2.5 rounded-xl bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-400/40 transition-colors shadow-sm"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to Top"
              className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/25 text-violet-700 dark:text-violet-300 hover:bg-violet-600 hover:text-white transition-all ml-1.5 shadow-sm"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
