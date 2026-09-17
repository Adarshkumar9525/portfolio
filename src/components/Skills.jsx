import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, FileCode2, Layers, Palette, Layout, Code,
  Server, Cpu, Database, Network, Table2, ShieldCheck,
  GitBranch, Send, Container, Zap, Cloud, ServerCrash,
  Sparkles
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
    <section id="skills" className="py-24 relative overflow-hidden bg-radial-grid">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Technical Stack
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & Core Technologies
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
            A comprehensive overview of languages, frameworks, databases, and tooling I use to architect robust web applications.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-400 rounded-full mt-4" />
        </div>

        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-200 ${
              activeTab === 'all'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25'
                : 'bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 shadow-sm'
            }`}
          >
            All Skills
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-200 ${
                activeTab === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25'
                  : 'bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 shadow-sm'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="space-y-10">
          {filteredCategories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 sm:p-8 rounded-3xl glass-card relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800/80">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">{category.name}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">{category.description}</p>
                </div>
                <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/20 w-fit font-semibold">
                  {category.skills.length} Technologies
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
                {category.skills.map((skill, sIdx) => {
                  const Icon = iconMap[skill.icon] || Code;
                  return (
                    <motion.div
                      key={sIdx}
                      whileHover={{ scale: 1.04, translateY: -3 }}
                      className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-850 border border-slate-200 dark:border-slate-800/90 hover:border-cyan-500/40 transition-all duration-200 flex flex-col items-center text-center group shadow-sm hover:shadow-lg hover:shadow-cyan-500/10"
                    >
                      <div 
                        className="w-10 h-10 rounded-xl bg-slate-200/70 dark:bg-slate-800/70 group-hover:bg-slate-200 dark:group-hover:bg-slate-800 flex items-center justify-center mb-3 transition-colors"
                        style={{ color: skill.color }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      
                      <div className="font-semibold text-xs text-slate-800 dark:text-slate-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </div>

                      <div className="mt-2 flex items-center gap-1 text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400/80" />
                        <span>{skill.level}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-white dark:bg-gradient-to-r dark:from-slate-900/90 dark:via-[#0e172a]/90 dark:to-slate-900/90 border border-slate-200 dark:border-slate-800 text-center shadow-sm">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-bold mb-2">Full Stack Workflow</div>
          <div className="text-sm font-semibold text-slate-700 dark:text-slate-200 flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <span className="px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20">React / Next UI</span>
            <span className="text-slate-400 dark:text-slate-500">&rarr;</span>
            <span className="px-3 py-1 rounded-lg bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20">Node / Express REST API</span>
            <span className="text-slate-400 dark:text-slate-500">&rarr;</span>
            <span className="px-3 py-1 rounded-lg bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20">MongoDB Atlas / SQL</span>
            <span className="text-slate-400 dark:text-slate-500">&rarr;</span>
            <span className="px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20">Vercel & Render Cloud</span>
          </div>
        </div>

      </div>
    </section>
  );
}
