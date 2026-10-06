import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Server, Zap, ShieldCheck, Award, CheckCircle2, ArrowUpRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: Code,
      title: "Frontend Engineering",
      desc: "Architecting component-driven, pixel-perfect user interfaces with React.js & Next.js, complex state management, and modern responsive design.",
      color: "from-violet-500/15 to-indigo-500/5 dark:from-violet-500/20 dark:to-indigo-500/10",
      border: "border-violet-500/30",
      badgeColor: "bg-violet-500/15 text-violet-700 dark:text-violet-300",
      textGrad: "text-violet-600 dark:text-violet-400"
    },
    {
      icon: Server,
      title: "Scalable REST APIs",
      desc: "Designing secure, modular Express.js backends, Role-Based Access Control (RBAC), and MongoDB indexing strategies for sub-second query latency.",
      color: "from-cyan-500/15 to-blue-500/5 dark:from-cyan-500/20 dark:to-blue-500/10",
      border: "border-cyan-500/30",
      badgeColor: "bg-cyan-500/15 text-cyan-700 dark:text-cyan-300",
      textGrad: "text-cyan-600 dark:text-cyan-400"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      desc: "Cutting initial JS bundle sizes by 70% via route code-splitting and shrinking JSON payloads by 80% using Brotli/Gzip compression algorithms.",
      color: "from-amber-500/15 to-orange-500/5 dark:from-amber-500/20 dark:to-orange-500/10",
      border: "border-amber-500/30",
      badgeColor: "bg-amber-500/15 text-amber-700 dark:text-amber-300",
      textGrad: "text-amber-600 dark:text-amber-400"
    },
    {
      icon: ShieldCheck,
      title: "Clean Architecture",
      desc: "Adhering to strict MVC principles, DRY paradigms, atomic component structure, robust Git version control, and Agile sprint workflows.",
      color: "from-emerald-500/15 to-teal-500/5 dark:from-emerald-500/20 dark:to-teal-500/10",
      border: "border-emerald-500/30",
      badgeColor: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300",
      textGrad: "text-emerald-600 dark:text-emerald-400"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-violet-600/5 dark:bg-violet-600/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="section-label mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="section-heading">
            Engineering Scalable Web Solutions with Passion & Precision
          </h2>
          <p className="section-subtitle">
            A deep dive into my background, engineering philosophy, and architectural approach to full stack software development.
          </p>
          <div className="accent-bar" />
        </div>

        {/* Bento Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Narrative Card & Verification Banner */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Story Bento Card */}
            <div className="p-6 sm:p-8 rounded-3xl bento-card space-y-5">
              <div className="flex items-center gap-3.5 pb-4 border-b border-slate-200/80 dark:border-white/[0.08]">
                <div className="p-3 rounded-2xl bg-violet-500/15 border border-violet-500/30 text-violet-600 dark:text-violet-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">
                    Full Stack Software Engineer
                  </h3>
                  <p className="text-xs text-violet-600 dark:text-violet-400 font-mono font-semibold">
                    B.Tech CSE @ Haridwar University (Final Year)
                  </p>
                </div>
              </div>

              <p className="text-slate-800 dark:text-slate-200 leading-relaxed text-sm sm:text-base font-semibold">
                {portfolioData.about.lead}
              </p>

              {portfolioData.about.paragraphs.map((p, idx) => (
                <p key={idx} className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                  {p}
                </p>
              ))}

              {/* Quick Spec Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-200/80 dark:border-white/[0.08]">
                {portfolioData.about.highlights.map((h, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.06]">
                    <div className="text-[11px] text-violet-600 dark:text-violet-400 font-mono font-bold">{h.title}</div>
                    <div className="text-xs font-bold text-slate-900 dark:text-slate-200 mt-0.5">{h.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dual Professional Certifications Banner */}
            <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-violet-600/15 via-indigo-600/10 to-cyan-500/15 border border-violet-500/25 dark:border-violet-500/30 flex items-center justify-between shadow-sm backdrop-blur-md">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/30 shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-violet-600 dark:text-violet-400 uppercase tracking-wider">
                    Verified Industry Credentials
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                    Meta Front-End & IBM Artificial Intelligence
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Dual professional certifications with verified skill assessments
                  </p>
                </div>
              </div>
              <a 
                href="#education" 
                className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white dark:bg-white/[0.08] border border-slate-200 dark:border-white/[0.1] text-xs font-bold text-violet-700 dark:text-violet-300 hover:scale-105 transition-all shadow-sm"
              >
                <span>Inspect</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: 4 Architecture Pillar Bento Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={idx}
                  className={`p-6 rounded-3xl bento-card bento-card-hover border ${pillar.border} bg-gradient-to-br ${pillar.color} flex flex-col justify-between`}
                >
                  <div>
                    <div className={`w-12 h-12 rounded-2xl bg-white dark:bg-[#0c101c] border ${pillar.border} flex items-center justify-center ${pillar.textGrad} mb-4 shadow-sm`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-heading font-bold text-base text-slate-900 dark:text-white mb-2">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-200/80 dark:border-white/[0.08] flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Production Grade Standard</span>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
