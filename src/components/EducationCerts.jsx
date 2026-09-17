import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function EducationCerts() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            Qualifications
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education & Certifications
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
            Academic foundation in Computer Science Engineering alongside industry-recognized professional credentials.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-400 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">Academic Journey</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Formal Computer Science Degree</p>
              </div>
            </div>

            <div className="space-y-4">
              {portfolioData.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl glass-card glass-card-hover space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 border-b border-slate-200 dark:border-slate-800/80">
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 font-semibold w-fit">
                      {edu.status}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                      {edu.period}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-heading">
                    {edu.degree}
                  </h4>
                  
                  <div className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{edu.institution}</span>
                  </div>

                  <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                    <span>{edu.location}</span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 pt-2 border-t border-slate-200 dark:border-slate-800/60 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-600 dark:text-teal-400">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">Professional Credentials</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Verified Industry Certifications</p>
              </div>
            </div>

            <div className="space-y-4">
              {portfolioData.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl glass-card glass-card-hover space-y-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-teal-500/10 text-teal-700 dark:text-teal-300 font-semibold">
                        {cert.issuedDate}
                      </span>
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-heading mt-2">
                        {cert.title}
                      </h4>
                      <div className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 mt-1">
                        {cert.issuer}
                      </div>
                    </div>

                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${cert.badgeColor} text-white font-bold shrink-0 shadow-md`}>
                      <Award className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80">
                    <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mb-2">Competencies Verified:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-[11px] font-mono border border-slate-200 dark:border-slate-800"
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
