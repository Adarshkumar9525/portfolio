import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function EducationCerts() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-indigo-600/5 dark:bg-indigo-600/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="section-label mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Qualifications & Credentials</span>
          </div>
          <h2 className="section-heading">
            Education & Certifications
          </h2>
          <p className="section-subtitle">
            Formal engineering foundations in Computer Science complemented by globally recognized professional credentials.
          </p>
          <div className="accent-bar" />
        </div>

        {/* 2-Column Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Column: Academic Degree */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3.5 mb-2">
              <div className="p-3 rounded-2xl bg-violet-500/15 border border-violet-500/30 text-violet-600 dark:text-violet-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">Academic Journey</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Accredited Engineering Curriculum</p>
              </div>
            </div>

            <div className="space-y-4">
              {portfolioData.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-3xl bento-card bento-card-hover space-y-3.5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3.5 border-b border-slate-200/80 dark:border-white/[0.08]">
                    <span className="text-xs font-mono px-3 py-0.5 rounded-full bg-violet-500/10 text-violet-700 dark:text-violet-300 font-bold w-fit">
                      {edu.status}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-mono font-medium">
                      {edu.period}
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white font-heading">
                    {edu.degree}
                  </h4>
                  
                  <div className="text-sm font-bold text-violet-600 dark:text-violet-400 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 shrink-0" />
                    <span>{edu.institution}</span>
                  </div>

                  <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{edu.location}</span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 pt-3 border-t border-slate-200/80 dark:border-white/[0.06] leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Professional Credentials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3.5 mb-2">
              <div className="p-3 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-600 dark:text-indigo-400">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">Professional Credentials</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Verified Technical Certifications</p>
              </div>
            </div>

            <div className="space-y-4">
              {portfolioData.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-3xl bento-card bento-card-hover space-y-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-xs font-mono px-3 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-bold">
                        {cert.issuedDate}
                      </span>
                      <h4 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white font-heading mt-2">
                        {cert.title}
                      </h4>
                      <div className="text-xs font-bold text-violet-600 dark:text-violet-400 mt-1">
                        {cert.issuer}
                      </div>
                    </div>

                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${cert.badgeColor} text-white font-bold shrink-0 shadow-lg shadow-indigo-500/20`}>
                      <Award className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <div className="pt-3.5 border-t border-slate-200/80 dark:border-white/[0.08]">
                    <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mb-2 font-bold uppercase tracking-wider">
                      Verified Competencies:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 text-[11px] font-mono border border-slate-200/80 dark:border-white/[0.06]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
