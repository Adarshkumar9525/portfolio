import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800/80 bg-slate-100 dark:bg-[#070a10] text-slate-600 dark:text-slate-400 text-xs relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 p-[1.5px] shadow-sm">
              <div className="w-full h-full bg-white dark:bg-[#0a0d14] rounded-[6px] flex items-center justify-center">
                <span className="font-heading font-extrabold text-xs text-cyan-600 dark:text-cyan-400">AK</span>
              </div>
            </div>
            <div>
              <div className="font-bold text-slate-900 dark:text-slate-200">{portfolioData.personal.name}</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">Full Stack Developer (MERN)</div>
            </div>
          </div>

          <div className="text-center md:text-left text-slate-500 dark:text-slate-400 text-[11px]">
            &copy; {new Date().getFullYear()} Adarsh Kumar. Crafted with React 18, Vite, Tailwind CSS & Framer Motion.
          </div>

          <div className="flex items-center gap-3">
            <a 
              href={portfolioData.personal.github} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-colors shadow-sm"
            >
              <Github className="w-4 h-4" />
            </a>

            <a 
              href={portfolioData.personal.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-colors shadow-sm"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a 
              href={`mailto:${portfolioData.personal.email}`}
              aria-label="Email"
              className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-colors shadow-sm"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to Top"
              className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
