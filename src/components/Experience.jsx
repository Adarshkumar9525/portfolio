import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-violet-600/5 dark:bg-violet-600/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="section-label mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career History</span>
          </div>
          <h2 className="section-heading">
            Work Experience & Internships
          </h2>
          <p className="section-subtitle">
            Hands-on software engineering internships driving production performance, automating complex business logic, and deploying robust REST APIs.
          </p>
          <div className="accent-bar" />
        </div>

        {/* Timeline Stack */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Rail Line */}
          <div className="hidden sm:block absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-violet-500 via-indigo-500 to-cyan-400 opacity-30" />

          <div className="space-y-12">
            {portfolioData.experience.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative flex flex-col sm:flex-row gap-6 items-start"
              >
                {/* Milestone Node */}
                <div className="hidden sm:flex shrink-0 w-16 h-16 rounded-2xl bg-white dark:bg-[#0c101c] border-2 border-violet-500/40 items-center justify-center text-violet-600 dark:text-violet-400 shadow-xl shadow-violet-500/15 z-10">
                  <Building2 className="w-7 h-7" />
                </div>

                {/* Experience Bento Card */}
                <div className="flex-1 p-6 sm:p-8 rounded-3xl bento-card bento-card-hover relative w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-200/80 dark:border-white/[0.08]">
                    <div>
                      <span className="inline-block px-3 py-0.5 rounded-full bg-violet-500/10 text-violet-700 dark:text-violet-300 font-mono text-[11px] font-bold mb-2">
                        {exp.type}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-heading">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-bold text-violet-600 dark:text-violet-400 mt-0.5">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs text-slate-500 dark:text-slate-400 font-mono gap-1">
                      <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 font-bold">
                        <Calendar className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights Bullets */}
                  <div className="space-y-3 mb-6">
                    {exp.highlights.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-4 border-t border-slate-200/80 dark:border-white/[0.08] flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 mr-1">Technologies:</span>
                    {exp.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 text-xs font-mono border border-slate-200/80 dark:border-white/[0.06] hover:border-violet-400/40 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
