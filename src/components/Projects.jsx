import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, Github, CheckCircle2, Sparkles, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const projects = portfolioData.projects;

  const categories = ['All', 'Enterprise SaaS', 'AI & Full Stack', 'Web Application'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-violet-600/5 dark:bg-violet-600/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-cyan-500/5 dark:bg-cyan-500/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="section-label mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Engineering</span>
          </div>
          <h2 className="section-heading">
            Production & Engineering Projects
          </h2>
          <p className="section-subtitle">
            Engineered with modern MERN stack architecture, production-grade database indexing, and proven performance optimizations.
          </p>
          <div className="accent-bar" />
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all duration-200 ${
                filter === cat
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/25 scale-105'
                  : 'bg-white dark:bg-white/[0.04] text-slate-600 dark:text-slate-400 border border-slate-200/90 dark:border-white/[0.08] hover:text-slate-900 dark:hover:text-white hover:border-violet-300 dark:hover:border-violet-500/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="flex flex-col rounded-3xl bento-card bento-card-hover overflow-hidden relative group"
              >
                {/* Top Accent Gradient Line */}
                <div className="h-1.5 w-full bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-400" />

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Badge & Category Header */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-700 dark:text-violet-300 font-mono text-[11px] font-bold border border-violet-500/20">
                        {project.badge}
                      </span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono font-medium">
                        {project.category}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white font-heading group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors mb-1">
                      {project.title}
                    </h3>
                    <div className="text-xs font-semibold text-violet-600 dark:text-violet-400 mb-3.5">
                      {project.subtitle}
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Architectural Highlights Box */}
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.06] mb-5 space-y-2">
                      <div className="text-[11px] font-mono uppercase text-violet-700 dark:text-violet-400 font-bold tracking-wider mb-2 flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-amber-500" />
                        <span>Architectural Highlights</span>
                      </div>
                      {project.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 text-[11px] font-mono border border-slate-200/80 dark:border-white/[0.06]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action CTAs */}
                  <div className="pt-4 border-t border-slate-200/80 dark:border-white/[0.08] flex items-center gap-3">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-bold shadow-md shadow-violet-500/20 hover:shadow-violet-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                      <span>{project.liveDemo.includes('github.com') ? 'View Project' : 'Live Demo'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Source Code"
                      className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-violet-400 dark:hover:border-violet-500/30 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
