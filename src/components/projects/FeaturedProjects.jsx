import React from 'react';
import { motion } from 'framer-motion';
import { Star, GitBranch, Play, ArrowRight } from 'lucide-react';

const DOMAIN_GRADIENT = {
  AI: 'from-violet-600/20 via-purple-600/10 to-transparent',
  NLP: 'from-emerald-600/20 via-teal-600/10 to-transparent',
  'Computer Vision': 'from-sky-600/20 via-blue-600/10 to-transparent',
};

const DOMAIN_BORDER = {
  AI: 'border-violet-500/30 hover:border-violet-500/60',
  NLP: 'border-emerald-500/30 hover:border-emerald-500/60',
  'Computer Vision': 'border-sky-500/30 hover:border-sky-500/60',
};

const DOMAIN_ACCENT = {
  AI: 'text-violet-400',
  NLP: 'text-emerald-400',
  'Computer Vision': 'text-sky-400',
};

const FeaturedCard = ({ project, onSelect, index }) => {
  const gradient = DOMAIN_GRADIENT[project.domain] || 'from-blue-600/20 to-transparent';
  const border = DOMAIN_BORDER[project.domain] || 'border-blue-500/30';
  const accent = DOMAIN_ACCENT[project.domain] || 'text-blue-400';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => onSelect(project)}
      className={`relative group cursor-pointer bg-white dark:bg-slate-900 border ${border} rounded-3xl overflow-hidden transition-all duration-300`}
    >
      {/* BG glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none`} />

      <div className="relative z-10 p-7 md:p-8 flex flex-col h-full">
        {/* Top row */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full border text-amber-400 bg-amber-500/10 border-amber-500/20">
              <Star size={11} className="fill-amber-400" /> Featured
            </span>
            <span className={`text-[10px] font-bold uppercase tracking-wider ${accent}`}>
              {project.domain}
            </span>
          </div>
          <span className="text-xs font-bold text-slate-600">{project.year}</span>
        </div>

        {/* Type tag */}
        <div className="mb-3">
          <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md border text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700">
            {project.type}
          </span>
          {project.openSource && (
            <span className="ml-2 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md border text-emerald-400 bg-emerald-500/10 border-emerald-500/20">
              Open Source
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className={`text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-3 leading-snug group-hover:${accent} transition-colors`}>
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-400 text-[15px] leading-relaxed mb-6 line-clamp-2">
          {project.description}
        </p>

        {/* Metrics grid */}
        {project.metrics && (
          <div className="grid grid-cols-2 gap-3 mb-6">
            {project.metrics.slice(0, 4).map((m) => (
              <div key={m.label} className="p-3 bg-slate-100 dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700/40 rounded-xl">
                <div className="text-lg font-extrabold text-slate-900 dark:text-white">{m.value}</div>
                <div className="text-[9px] text-slate-500 dark:text-slate-500 uppercase tracking-wider mt-0.5">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="px-2.5 py-1 text-[10px] font-semibold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700/50 rounded-md">
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:text-white text-xs font-bold rounded-xl border border-slate-300 dark:border-slate-700 transition-all"
            >
              <GitBranch size={14} /> GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 px-4 py-2.5 bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 text-xs font-bold rounded-xl border border-blue-500/20 transition-all"
            >
              <Play size={14} /> Demo
            </a>
          )}
          <button
            className={`ml-auto flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold ${accent} opacity-0 group-hover:opacity-100 transition-all`}
          >
            Details <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedProjects = ({ projects, onSelect }) => (
  <section className="py-16 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20">
          <Star size={16} className="text-amber-400 fill-amber-400" />
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Featured Projects</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-slate-100 dark:from-slate-800 to-transparent ml-2" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <FeaturedCard key={p.id} project={p} onSelect={onSelect} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedProjects;
