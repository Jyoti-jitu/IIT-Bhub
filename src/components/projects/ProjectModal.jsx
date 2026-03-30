import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, Play, Blocks, Activity } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }} 
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden z-10 my-8"
          onClick={e => e.stopPropagation()}
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white rounded-full transition-colors z-20"
          >
            <X size={20} />
          </button>

          {/* Video Placeholder Header */}
          <div className="w-full h-48 md:h-80 bg-slate-900 relative overflow-hidden group flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-purple-900/40 opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white/80 group-hover:scale-110 group-hover:bg-blue-600 transition-all cursor-pointer">
                <Play size={24} className="ml-1" />
              </div>
            </div>
          </div>

          <div className="p-6 md:p-10">
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                {project.type} • {project.year}
              </span>
              <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                {project.domain}
              </span>
              {project.openSource && (
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/30">
                  Open Source
                </span>
              )}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              {project.title}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Overview</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                    {project.fullDescription}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                    <Blocks size={18} className="text-blue-500" /> Architecture
                  </h3>
                  <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800">
                    <p className="text-slate-700 dark:text-slate-300 text-sm font-mono leading-relaxed">
                      {project.architecture}
                    </p>
                  </div>
                </div>
              </div>

              {/* Sidebar Info */}
              <div className="space-y-8 bg-slate-50 md:bg-transparent dark:bg-slate-900/50 p-6 md:p-0 rounded-2xl">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="px-2.5 py-1 text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
                    <Activity size={16} /> Key Metrics
                  </h3>
                  <div className="space-y-3">
                    {project.metrics.map(m => (
                      <div key={m.label} className="flex justify-between items-center pb-2 border-b border-slate-200 dark:border-slate-800 last:border-0">
                        <span className="text-sm text-slate-600 dark:text-slate-400">{m.label}</span>
                        <span className="text-sm font-bold text-slate-900 dark:text-white">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-col gap-3">
                  {project.github && (
                    <button 
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-800 dark:hover:bg-slate-700 text-sm font-bold rounded-xl transition-all shadow-md"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github size={16} /> View Repository
                    </button>
                  )}
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
