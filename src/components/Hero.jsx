import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, Phone, Code2, Database } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % portfolioData.personal.roleTitles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const handleDownloadResume = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.75 },
      colors: ['#06b6d4', '#3b82f6', '#14b8a6', '#f59e0b']
    });
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-radial-grid">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-blue-600/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-teal-500/10 dark:bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900/80 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs font-medium shadow-sm shadow-cyan-500/10 mb-6 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{portfolioData.personal.status}</span>
            </motion.div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3">
              Hi, I'm <span className="text-gradient">{portfolioData.personal.name}</span>
            </h1>

            <div className="h-10 sm:h-12 flex items-center mb-4">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-300 font-heading">
                {portfolioData.personal.roleTitles[roleIndex]}
              </span>
            </div>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-8">
              {portfolioData.personal.tagline}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 sm:gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 w-full sm:w-auto"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={portfolioData.personal.resumeUrl}
                download="Adarsh_Kumar_Resume.pdf"
                onClick={handleDownloadResume}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700/80 text-slate-800 dark:text-white font-semibold text-sm hover:border-cyan-500/50 shadow-sm dark:shadow-md transition-all duration-200 w-full sm:w-auto"
              >
                <Download className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-transparent hover:bg-slate-200/60 dark:hover:bg-slate-800/50 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white font-semibold text-sm border border-slate-300 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 transition-all duration-200 w-full sm:w-auto"
              >
                <Mail className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span>Contact Me</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 border-t border-slate-200 dark:border-slate-800/80 w-full">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">Connect:</span>
              
              <a 
                href={portfolioData.personal.github} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Github className="w-4 h-4" />
              </a>

              <a 
                href={portfolioData.personal.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a 
                href={`mailto:${portfolioData.personal.email}`}
                aria-label="Email Adarsh"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a 
                href={`tel:${portfolioData.personal.phone}`}
                aria-label="Phone Call"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200 font-mono"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>{portfolioData.personal.phoneDisplay}</span>
              </a>
            </div>

          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-72 sm:w-80 md:w-96">
              <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500 via-blue-600 to-teal-400 rounded-3xl opacity-30 blur-2xl animate-pulse-slow" />
              
              <div className="relative rounded-3xl p-1.5 bg-gradient-to-b from-cyan-500/40 via-slate-300 dark:via-slate-800 to-teal-500/30 shadow-2xl">
                <div className="bg-white dark:bg-[#0e1422] rounded-[22px] p-4 sm:p-5 overflow-hidden border border-slate-200 dark:border-slate-800">
                  <div className="relative rounded-2xl overflow-hidden aspect-square border border-slate-200 dark:border-slate-700/60 group">
                    <img 
                      src={portfolioData.personal.avatar} 
                      alt={portfolioData.personal.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 dark:from-[#0e1422] via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                        <span className="font-semibold text-slate-100">Full Stack Engineer</span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-semibold">MERN</span>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                      <div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400">Frontend</div>
                        <div className="font-bold text-slate-900 dark:text-slate-200">React 19 & Next</div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-center gap-2">
                      <Database className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                      <div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400">Backend</div>
                        <div className="font-bold text-slate-900 dark:text-slate-200">Node & MongoDB</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>

        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {portfolioData.stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="p-4 sm:p-5 rounded-2xl glass-card glass-card-hover flex flex-col items-center text-center"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mb-0.5">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                {stat.sub}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
