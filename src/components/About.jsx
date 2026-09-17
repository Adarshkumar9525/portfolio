import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Server, Zap, ShieldCheck, Award, CheckCircle, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: Code,
      title: "Frontend Engineering",
      desc: "Creating component-driven, pixel-perfect user interfaces in React.js & Next.js with state management and Tailwind CSS.",
      color: "from-cyan-500/10 to-blue-500/5 dark:from-cyan-500/20 dark:to-blue-500/10",
      border: "border-cyan-500/30",
      textGrad: "text-cyan-600 dark:text-cyan-400"
    },
    {
      icon: Server,
      title: "Scalable REST APIs",
      desc: "Designing secure, modular Express.js backends, Role-Based Access Control (RBAC), and MongoDB schema indexing.",
      color: "from-teal-500/10 to-emerald-500/5 dark:from-teal-500/20 dark:to-emerald-500/10",
      border: "border-teal-500/30",
      textGrad: "text-teal-600 dark:text-teal-400"
    },
    {
      icon: Zap,
      title: "Performance Tuning",
      desc: "Optimizing bundle sizes via code-splitting (70% cut) and compressing JSON payloads via Gzip/Brotli (80% smaller).",
      color: "from-amber-500/10 to-orange-500/5 dark:from-amber-500/20 dark:to-orange-500/10",
      border: "border-amber-500/30",
      textGrad: "text-amber-600 dark:text-amber-400"
    },
    {
      icon: ShieldCheck,
      title: "Clean Architecture",
      desc: "Adhering to MVC design principles, DRY codebase practices, Git workflows, and Agile sprint review methodologies.",
      color: "from-purple-500/10 to-indigo-500/5 dark:from-purple-500/20 dark:to-indigo-500/10",
      border: "border-purple-500/30",
      textGrad: "text-purple-600 dark:text-purple-400"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400" />
            About Me
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineering Scalable Web Solutions with Passion & Precision
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-400 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-3xl glass-card space-y-5">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-200 dark:border-slate-800/80">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Full Stack Software Developer</h3>
                  <p className="text-xs text-cyan-600 dark:text-cyan-400 font-mono">B.Tech CSE @ Haridwar University</p>
                </div>
              </div>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base font-medium">
                {portfolioData.about.lead}
              </p>

              {portfolioData.about.paragraphs.map((p, idx) => (
                <p key={idx} className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
                  {p}
                </p>
              ))}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-200 dark:border-slate-800/80">
                {portfolioData.about.highlights.map((h, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-100/90 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <div className="text-[11px] text-cyan-600 dark:text-cyan-400 font-mono font-semibold">{h.title}</div>
                    <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-0.5">{h.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-teal-500/10 dark:from-blue-950/40 dark:via-slate-900/60 dark:to-teal-950/40 border border-cyan-500/20 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">Dual Professional Certifications</div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400">Meta Front-End Development + IBM AI Professional</div>
                </div>
              </div>
              <a 
                href="#education" 
                className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 flex items-center gap-1 transition-colors"
              >
                <span>View</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

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
                  className={`p-5 rounded-2xl glass-card border ${pillar.border} bg-gradient-to-br ${pillar.color} hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between shadow-sm`}
                >
                  <div>
                    <div className={`w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900/80 border ${pillar.border} flex items-center justify-center ${pillar.textGrad} mb-4`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-heading font-bold text-base text-slate-900 dark:text-white mb-2">{pillar.title}</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{pillar.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/40 flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
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
