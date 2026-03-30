import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, FlaskConical, Layers3, Sparkles } from 'lucide-react';

const STATS = [
  { icon: <Layers3 size={18} />, label: 'Total Projects', value: '10+' },
  { icon: <Cpu size={18} />, label: 'Open Source', value: '6' },
  { icon: <FlaskConical size={18} />, label: 'Research Domains', value: '3' },
  { icon: <Sparkles size={18} />, label: 'Active This Year', value: '4' },
];

const ProjectsHeader = ({ totalCount }) => (
  <section className="relative pt-28 pb-20 overflow-hidden bg-slate-50 dark:bg-slate-950">
    {/* Grid */}
    <div
      className="absolute inset-0 opacity-40 pointer-events-none"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(99,102,241,0.06) 1px, transparent 1px)',
        backgroundSize: '52px 52px',
      }}
    />

    {/* Orbs */}
    <div className="absolute top-10 left-1/3 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
    <div className="absolute top-20 right-1/4 w-[350px] h-[350px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none" />

    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center">
        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest"
        >
          <Cpu size={13} />
          AI Research Lab · IIT
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.05] mb-6"
        >
          Our{' '}
          <span className="relative inline-block">
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  'linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #818cf8 100%)',
              }}
            >
              Projects
            </span>
            {/* Underline glow */}
            <span
              className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full opacity-60"
              style={{
                backgroundImage:
                  'linear-gradient(to right, #60a5fa, #a78bfa)',
              }}
            />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-14"
        >
          From foundational AI research to real-world deployments — student
          theses, BTP innovations, and open-source prototypes built at the
          frontier of intelligence and engineering.
        </motion.p>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="inline-flex flex-wrap justify-center gap-6 md:gap-10"
        >
          {STATS.map(({ icon, label, value }) => (
            <div key={label} className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700/60 flex items-center justify-center text-blue-400 group-hover:border-blue-500/50 transition-colors">
                {icon}
              </div>
              <div className="text-left">
                <div className="text-xl font-extrabold text-slate-900 dark:text-white leading-none">
                  {value}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-500 mt-0.5">{label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>

    {/* Bottom fade */}
    <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-slate-50 dark:from-slate-950 to-transparent pointer-events-none" />
  </section>
);

export default ProjectsHeader;
