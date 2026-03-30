import React from 'react';
import { motion } from 'framer-motion';
import { Github, Play, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden cursor-pointer h-full"
      onClick={onClick}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-blue-500/10 transition-colors duration-500 pointer-events-none" />

      {/* Header */}
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div className="flex gap-2">
          <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
            {project.type}
          </span>
          <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest rounded bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
            {project.domain}
          </span>
        </div>
        <span className="text-xs font-bold text-slate-400 dark:text-slate-500">{project.year}</span>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors relative z-10">
        {project.title}
        <ExternalLink size={14} className="inline-block ml-2 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 text-blue-500 transition-all" />
      </h3>
      
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 flex-grow relative z-10 leading-relaxed">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-1.5 mb-6 relative z-10">
        {project.tech.map(t => (
          <span key={t} className="px-2 py-0.5 text-[10px] font-semibold bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 rounded-md">
            {t}
          </span>
        ))}
      </div>

      {/* Footer Actions */}
      <div className="flex gap-3 mt-auto relative z-10">
        {project.github && (
          <button 
            className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-xl transition-colors"
            onClick={(e) => { e.stopPropagation(); window.open(project.github, '_blank'); }}
          >
            <Github size={14} /> Code
          </button>
        )}
        {project.demo && (
          <button 
            className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-xl transition-colors ring-1 ring-blue-500/20"
            onClick={(e) => { e.stopPropagation(); window.open(project.demo, '_blank'); }}
          >
            <Play size={14} /> Demo
          </button>
        )}
      </div>

    </motion.div>
  );
};

export default ProjectCard;
