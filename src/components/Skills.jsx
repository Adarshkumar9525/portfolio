import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, FileCode2, Layers, Palette, Layout, Code,
  Server, Cpu, Database, Network, Table2, ShieldCheck,
  GitBranch, Send, Container, Zap, Cloud, ServerCrash,
  Sparkles, ArrowRight
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Code2, FileCode2, Layers, Palette, Layout, Code,
  Server, Cpu, Database, Network, Table2, ShieldCheck,
  GitBranch, Send, Container, Zap, Cloud, ServerCrash
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');
  const { categories } = portfolioData.skills;

  const filteredCategories = activeTab === 'all' 
    ? categories 
    : categories.filter(c => c.id === activeTab);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-indigo-600/5 dark:bg-indigo-600/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="section-label mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Arsenal</span>
          </div>
          <h2 className="section-heading">
            Skills & Core Technologies
          </h2>
          <p className="section-subtitle">
            A battle-tested technology stack architected for building resilient, high-throughput web applications from concept to deployment.
          </p>
          <div className="accent-bar" />
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all duration-200 ${
              activeTab === 'all'
                ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/25 scale-105'
                : 'bg-white dark:bg-white/[0.04] text-slate-600 dark:text-slate-400 border border-slate-200/90 dark:border-white/[0.08] hover:text-slate-900 dark:hover:text-white hover:border-violet-300 dark:hover:border-violet-500/30'
            }`}
          >
            All Technologies
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all duration-200 ${
                activeTab === cat.id
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/25 scale-105'
                  : 'bg-white dark:bg-white/[0.04] text-slate-600 dark:text-slate-400 border border-slate-200/90 dark:border-white/[0.08] hover:text-slate-900 dark:hover:text-white hover:border-violet-300 dark:hover:border-violet-500/30'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Categories Stack */}
        <div className="space-y-10">
          <AnimatePresence mode="wait">
            {filteredCategories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="p-6 sm:p-8 rounded-3xl bento-card relative overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-slate-200/80 dark:border-white/[0.08]">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">{category.name}</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">{category.description}</p>
                  </div>
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20 w-fit font-bold">
                    {category.skills.length} Technologies
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
                  {category.skills.map((skill, sIdx) => {
                    const Icon = iconMap[skill.icon] || Code;
                    return (
                      <motion.div
                        key={sIdx}
                        whileHover={{ scale: 1.04, translateY: -4 }}
                        className="p-4 rounded-2xl bg-slate-50/80 dark:bg-white/[0.02] hover:bg-white dark:hover:bg-white/[0.06] border border-slate-200/80 dark:border-white/[0.06] hover:border-violet-400/40 dark:hover:border-violet-400/30 transition-all duration-200 flex flex-col items-center text-center group shadow-sm hover:shadow-lg hover:shadow-violet-500/10"
                      >
                        <div 
                          className="w-11 h-11 rounded-xl bg-white dark:bg-[#0c101c] group-hover:scale-110 flex items-center justify-center mb-3 transition-transform duration-300 shadow-sm border border-slate-200/60 dark:border-white/[0.06]"
                          style={{ color: skill.color }}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        
                        <div className="font-bold text-xs text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                          {skill.name}
                        </div>

                        <div className="mt-2 flex items-center gap-1.5 text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <span>{skill.level}</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Full Stack Architecture Workflow Strip */}
        <div className="mt-12 p-6 sm:p-7 rounded-3xl bento-card border border-violet-500/20 bg-gradient-to-r from-violet-600/[0.06] via-indigo-600/[0.04] to-cyan-500/[0.06] text-center shadow-sm">
          <div className="text-xs font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400 font-bold mb-3">
            Full Stack Architectural Pipeline
          </div>
          <div className="text-sm font-semibold text-slate-700 dark:text-slate-200 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <span className="px-3.5 py-1.5 rounded-xl bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/25 font-mono text-xs">
              React 19 / Next.js UI
            </span>
            <ArrowRight className="w-4 h-4 text-slate-400 dark:text-slate-500 shrink-0" />
            <span className="px-3.5 py-1.5 rounded-xl bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/25 font-mono text-xs">
              Node.js / Express REST API
            </span>
            <ArrowRight className="w-4 h-4 text-slate-400 dark:text-slate-500 shrink-0" />
            <span className="px-3.5 py-1.5 rounded-xl bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/25 font-mono text-xs">
              MongoDB Atlas / SQL DB
            </span>
            <ArrowRight className="w-4 h-4 text-slate-400 dark:text-slate-500 shrink-0" />
            <span className="px-3.5 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/25 font-mono text-xs">
              Vercel & Render Cloud
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
