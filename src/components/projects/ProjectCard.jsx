import React from 'react';
import { GitBranch, Play, ExternalLink, Lock, Star } from 'lucide-react';

const TYPE_CONFIG = {
  Student: { label: 'Student', color: 'text-amber-400 bg-amber-500/10 border-amber-500/20' },
  BTP: { label: 'BTP', color: 'text-blue-400 bg-blue-500/10 border-blue-500/20' },
  Prototype: { label: 'Prototype', color: 'text-rose-400 bg-rose-500/10 border-rose-500/20' },
};

const DOMAIN_CONFIG = {
  AI: { color: 'text-violet-400 bg-violet-500/10 border-violet-500/20' },
  NLP: { color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
  'Computer Vision': { color: 'text-sky-400 bg-sky-500/10 border-sky-500/20' },
};

const ProjectCard = ({ project, onClick, listMode }) => {
  const typeConf = TYPE_CONFIG[project.type] || { label: project.type, color: 'text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700' };
  const domConf = DOMAIN_CONFIG[project.domain] || { color: 'text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700' };

  if (listMode) {
    return (
      <div
        onClick={onClick}
        className="group relative flex items-center gap-5 p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-blue-500/30 hover:bg-white dark:bg-slate-900/80 transition-all cursor-pointer"
      >
        {/* Hover glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/0 to-violet-600/0 group-hover:from-blue-600/5 group-hover:to-violet-600/5 transition-all pointer-events-none" />

        {/* Domain indicator */}
        <div className={`shrink-0 w-1 h-12 rounded-full ${
          project.domain === 'AI' ? 'bg-violet-500' :
          project.domain === 'NLP' ? 'bg-emerald-500' : 'bg-sky-500'
        }`} />

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md border ${typeConf.color}`}>
              {typeConf.label}
            </span>
            {project.openSource && (
              <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md border text-emerald-400 bg-emerald-500/10 border-emerald-500/20">
                Open Source
              </span>
            )}
            <span className="ml-auto text-xs font-bold text-slate-600">{project.year}</span>
          </div>
          <h3 className="font-bold text-slate-900 dark:text-white text-base truncate group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-500 truncate mt-0.5">{project.description}</p>
        </div>

        <div className="shrink-0 flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white transition-all flex items-center justify-center"
              title="GitHub"
            >
              <GitBranch size={15} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/20 transition-all flex items-center justify-center"
              title="Demo"
            >
              <Play size={15} />
            </a>
          )}
          <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-500 opacity-0 group-hover:opacity-100 transition-all">
            <ExternalLink size={15} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className="group relative flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:border-slate-300 dark:border-slate-700 transition-all duration-300 cursor-pointer h-full"
    >
      {/* Top colour accent bar */}
      <div
        className={`h-0.5 w-full transition-all duration-500 ${
          project.domain === 'AI'
            ? 'bg-gradient-to-r from-violet-500 to-purple-600 opacity-0 group-hover:opacity-100'
            : project.domain === 'NLP'
            ? 'bg-gradient-to-r from-emerald-500 to-teal-600 opacity-0 group-hover:opacity-100'
            : 'bg-gradient-to-r from-sky-500 to-blue-600 opacity-0 group-hover:opacity-100'
        }`}
      />

      {/* Card glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-violet-600/0 group-hover:from-blue-600/5 group-hover:to-violet-600/5 transition-all duration-500 pointer-events-none rounded-2xl" />

      <div className="flex flex-col flex-1 p-6 relative z-10">
        {/* Header badges */}
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          <span className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest rounded-lg border ${typeConf.color}`}>
            {typeConf.label}
          </span>
          <span className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest rounded-lg border ${domConf.color}`}>
            {project.domain}
          </span>
          {project.openSource && (
            <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest rounded-lg border text-emerald-400 bg-emerald-500/10 border-emerald-500/20">
              Open Source
            </span>
          )}
          <span className="ml-auto text-xs font-bold text-slate-600">{project.year}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 leading-snug group-hover:text-blue-400 transition-colors line-clamp-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5 line-clamp-3 flex-grow">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-[10px] font-semibold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700/60 rounded-md"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2 py-0.5 text-[10px] font-semibold text-slate-500 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700/60 rounded-md">
              +{project.tech.length - 4} more
            </span>
          )}
        </div>

        {/* Metrics preview */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="flex gap-3 mb-5 p-3 bg-slate-100 dark:bg-slate-800/60 rounded-xl border border-slate-300 dark:border-slate-700/40">
            {project.metrics.slice(0, 2).map((m) => (
              <div key={m.label} className="flex-1 text-center">
                <div className="text-sm font-extrabold text-slate-900 dark:text-white">{m.value}</div>
                <div className="text-[9px] text-slate-500 dark:text-slate-500 uppercase tracking-wider mt-0.5">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-2 mt-auto">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:text-white text-xs font-bold rounded-xl transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              <GitBranch size={14} /> GitHub
            </a>
          ) : (
            <div className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 bg-white dark:bg-slate-900 text-slate-600 text-xs font-bold rounded-xl cursor-not-allowed border border-slate-200 dark:border-slate-800">
              <Lock size={13} /> Private
            </div>
          )}

          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 hover:text-blue-300 text-xs font-bold rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              <Play size={14} /> Demo
            </a>
          ) : null}

          <button
            className="p-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white rounded-xl transition-all"
            onClick={onClick}
            title="View details"
          >
            <ExternalLink size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
