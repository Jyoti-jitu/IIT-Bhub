import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  GitBranch,
  Play,
  Cpu,
  Activity,
  Terminal,
  ExternalLink,
  Lock,
  CheckCircle2,
} from 'lucide-react';

const TYPE_COLORS = {
  Student: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  BTP: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  Prototype: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
};

const DOMAIN_ACCENT = {
  AI: 'from-violet-600 to-purple-700',
  NLP: 'from-emerald-600 to-teal-700',
  'Computer Vision': 'from-sky-600 to-blue-700',
};

const ProjectModal = ({ project, isOpen, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  // Prevent body scroll when modal open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!project) return null;

  const typeColor = TYPE_COLORS[project.type] || 'text-slate-400 bg-slate-800 border-slate-700';
  const accentGradient = DOMAIN_ACCENT[project.domain] || 'from-blue-600 to-violet-700';

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 30 }}
            transition={{ type: 'spring', stiffness: 280, damping: 26 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-950 border border-slate-800 rounded-3xl shadow-2xl z-10 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ── Hero video banner ─────────────────────────────── */}
            <div
              className={`relative w-full h-52 md:h-72 bg-gradient-to-br ${accentGradient} overflow-hidden flex items-center justify-center shrink-0`}
            >
              {/* Abstract pattern */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 75% 65%, rgba(255,255,255,0.08) 0%, transparent 45%)',
                }}
              />
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />

              {/* Play button */}
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex items-center justify-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="absolute w-24 h-24 rounded-full bg-white/5 animate-ping opacity-30" />
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center text-white group-hover:bg-white/25 group-hover:scale-110 transition-all duration-300 shadow-2xl">
                    <Play size={24} className="ml-1" />
                  </div>
                  <span className="absolute -bottom-7 text-xs font-semibold text-white/60">
                    Watch Demo
                  </span>
                </a>
              ) : (
                <div className="flex flex-col items-center gap-3 text-white/30">
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <Play size={22} />
                  </div>
                  <span className="text-xs font-semibold">No demo available</span>
                </div>
              )}

              {/* Top-left domain badge */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white/80 text-xs font-bold uppercase tracking-widest border border-white/10">
                {project.domain}
              </div>

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm hover:bg-black/60 text-white/70 hover:text-white flex items-center justify-center transition-all border border-white/10"
              >
                <X size={18} />
              </button>
            </div>

            {/* ── Content ──────────────────────────────────────── */}
            <div className="flex-1 p-6 md:p-10">
              {/* Badges row */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-lg border ${typeColor}`}>
                  {project.type}
                </span>
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-lg border text-slate-400 bg-slate-800 border-slate-700">
                  {project.year}
                </span>
                {project.openSource && (
                  <span className="flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-lg border text-emerald-400 bg-emerald-500/10 border-emerald-500/20">
                    <CheckCircle2 size={12} /> Open Source
                  </span>
                )}
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight">
                {project.title}
              </h2>

              {/* Two-column layout */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                {/* Left: Overview + Architecture */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Overview */}
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3 flex items-center gap-2">
                      <Cpu size={14} /> Overview
                    </h3>
                    <p className="text-slate-300 leading-relaxed text-[15px]">
                      {project.fullDescription || project.description}
                    </p>
                  </div>

                  {/* Architecture */}
                  {project.architecture && (
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3 flex items-center gap-2">
                        <Terminal size={14} /> Architecture Pipeline
                      </h3>
                      <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl">
                        <pre className="text-sm text-slate-300 font-mono leading-7 whitespace-pre-wrap">
                          {project.architecture}
                        </pre>
                      </div>
                    </div>
                  )}

                  {/* Embedded video if demo exists */}
                  {project.demo && (
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3 flex items-center gap-2">
                        <Play size={14} /> Demo Video
                      </h3>
                      <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center">
                        <div className={`absolute inset-0 bg-gradient-to-br ${accentGradient} opacity-10`} />
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="relative z-10 flex flex-col items-center gap-3 text-white group"
                        >
                          <div className="w-14 h-14 rounded-full border border-white/20 bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                            <Play size={20} className="ml-0.5" />
                          </div>
                          <span className="text-sm font-semibold text-white/60 flex items-center gap-1.5">
                            Open on YouTube <ExternalLink size={13} />
                          </span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {/* Right sidebar */}
                <div className="space-y-6">
                  {/* Metrics */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl">
                      <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2">
                        <Activity size={13} /> Key Metrics
                      </h3>
                      <div className="space-y-3">
                        {project.metrics.map((m) => (
                          <div
                            key={m.label}
                            className="flex items-center justify-between pb-3 border-b border-slate-800 last:border-0 last:pb-0"
                          >
                            <span className="text-sm text-slate-400">{m.label}</span>
                            <span className="text-sm font-extrabold text-white">{m.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tech stack */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-800 rounded-lg"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA buttons */}
                  <div className="space-y-2.5">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2.5 w-full py-3 px-5 bg-white hover:bg-slate-200 text-slate-900 text-sm font-bold rounded-xl transition-all shadow-lg"
                      >
                        <GitBranch size={16} /> View GitHub Repo
                      </a>
                    ) : (
                      <div className="flex items-center justify-center gap-2.5 w-full py-3 px-5 bg-slate-900 border border-slate-800 text-slate-500 text-sm font-bold rounded-xl cursor-not-allowed">
                        <Lock size={15} /> Private Repository
                      </div>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className={`flex items-center justify-center gap-2.5 w-full py-3 px-5 bg-gradient-to-r ${accentGradient} hover:opacity-90 text-white text-sm font-bold rounded-xl transition-all shadow-lg`}
                      >
                        <Play size={15} /> Watch Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
