import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, Phone, Sparkles, CheckCircle2, Code2, MapPin, Award } from 'lucide-react';
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
      particleCount: 90,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#8b5cf6', '#6366f1', '#06b6d4', '#10b981']
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
    <section id="hero" className="relative min-h-[95vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Ambient Gradient Flares */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/10 dark:bg-violet-600/[0.08] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-cyan-500/10 dark:bg-cyan-500/[0.06] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/10 dark:bg-indigo-600/[0.05] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Core Narrative */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Live Availability Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-700 dark:text-emerald-400 text-xs font-semibold mb-6 shadow-sm shadow-emerald-500/5 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{portfolioData.personal.status}</span>
            </motion.div>

            {/* Main Name Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-3">
              Hi, I'm{' '}
              <span className="text-gradient">
                {portfolioData.personal.name}
              </span>
            </h1>

            {/* Dynamic Rotating Role Subtitle */}
            <div className="h-10 sm:h-12 flex items-center mb-5 overflow-hidden">
              <motion.span 
                key={roleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-700 dark:text-slate-200"
              >
                {portfolioData.personal.roleTitles[roleIndex]}
              </motion.span>
            </div>

            {/* Elevator Pitch Tagline */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-9">
              {portfolioData.personal.tagline}. Final-year B.Tech CSE student passionate about architecting high-performance MERN microservices, responsive web applications, and intuitive user experiences.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 sm:gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={() => scrollTo('projects')}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 text-white font-bold text-sm shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 w-full sm:w-auto"
              >
                <Sparkles className="w-4 h-4" />
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={portfolioData.personal.resumeUrl}
                download="Adarsh_Kumar_Resume.pdf"
                onClick={handleDownloadResume}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-white/[0.04] border border-slate-200/90 dark:border-white/[0.1] text-slate-800 dark:text-white font-bold text-sm hover:border-violet-400 dark:hover:border-violet-500/40 hover:shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 w-full sm:w-auto"
              >
                <Download className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-transparent hover:bg-slate-100 dark:hover:bg-white/[0.04] text-slate-700 dark:text-slate-300 font-semibold text-sm border border-slate-300/80 dark:border-white/[0.08] transition-all duration-200 w-full sm:w-auto"
              >
                <Mail className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social & Direct Contact Links */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-5 border-t border-slate-200/80 dark:border-white/[0.08] w-full">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mr-1">Direct Channels:</span>
              
              <a 
                href={portfolioData.personal.github} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-white dark:bg-white/[0.04] border border-slate-200/90 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-500/40 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
              >
                <Github className="w-4 h-4" />
              </a>

              <a 
                href={portfolioData.personal.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-white dark:bg-white/[0.04] border border-slate-200/90 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-500/40 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a 
                href={`mailto:${portfolioData.personal.email}`}
                aria-label="Email Adarsh"
                className="p-2.5 rounded-xl bg-white dark:bg-white/[0.04] border border-slate-200/90 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-500/40 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a 
                href={`tel:${portfolioData.personal.phone}`}
                aria-label="Call Adarsh"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white dark:bg-white/[0.04] border border-slate-200/90 dark:border-white/[0.08] text-xs text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-500/40 hover:-translate-y-0.5 transition-all duration-200 font-mono shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
                <span>{portfolioData.personal.phoneDisplay}</span>
              </a>
            </div>

          </motion.div>

          {/* Right Column: Premium Bento Developer Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            {/* Floating Highlights Chips around photo */}
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Glow backdrop behind frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-violet-600/30 via-indigo-500/20 to-cyan-400/30 rounded-3xl blur-2xl opacity-60 pointer-events-none" />

              {/* Bento Card Housing Photo */}
              <div className="relative rounded-3xl p-2 sm:p-2.5 bg-gradient-to-b from-white/90 via-slate-200/60 to-white/90 dark:from-white/[0.12] dark:via-white/[0.04] dark:to-white/[0.08] shadow-2xl backdrop-blur-xl border border-slate-200/60 dark:border-white/[0.12]">
                <div className="bg-white dark:bg-[#0c101c] rounded-[22px] p-4 overflow-hidden relative">
                  
                  {/* Photo frame with smooth hover scale */}
                  <div className="relative rounded-2xl overflow-hidden aspect-square border border-slate-200/80 dark:border-white/[0.08] group">
                    <img 
                      src={portfolioData.personal.avatar} 
                      alt={portfolioData.personal.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Gradient Overlay in Dark Mode */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Overlaid Bento Floating Chips */}
                  <div className="mt-4 grid grid-cols-2 gap-2.5">
                    
                    {/* Chip 1: Stack */}
                    <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.06] flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-violet-500/15 text-violet-600 dark:text-violet-400">
                        <Code2 className="w-4 h-4" />
                      </div>
                      <div className="truncate">
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono font-bold uppercase">Stack</div>
                        <div className="text-xs font-bold text-slate-800 dark:text-white truncate">MERN Specialist</div>
                      </div>
                    </div>

                    {/* Chip 2: Location */}
                    <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.06] flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-cyan-500/15 text-cyan-600 dark:text-cyan-400">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div className="truncate">
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono font-bold uppercase">Location</div>
                        <div className="text-xs font-bold text-slate-800 dark:text-white truncate">Roorkee, UK</div>
                      </div>
                    </div>

                  </div>

                  {/* Verified Developer Pill at bottom of card */}
                  <div className="mt-2.5 p-2 rounded-xl bg-violet-500/10 dark:bg-violet-500/[0.08] border border-violet-500/20 flex items-center justify-between text-xs">
                    <span className="text-violet-700 dark:text-violet-300 font-semibold flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span>Verified Software Engineer</span>
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">Final Year CSE</span>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Bottom Bento Metric Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {portfolioData.stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="p-5 rounded-2xl bento-card bento-card-hover flex flex-col items-center text-center group"
            >
              <div className="text-3xl sm:text-4xl font-black text-gradient mb-1 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-0.5">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                {stat.sub}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
