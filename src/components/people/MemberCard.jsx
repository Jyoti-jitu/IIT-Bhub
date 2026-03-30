import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GitBranch, Link, ExternalLink } from 'lucide-react';

const MemberCard = ({ person, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.4, delay: (index % 4) * 0.1 }}
    className="group relative flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 shadow-lg cursor-pointer h-full"
  >
    {/* Hover glow */}
    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/0 via-violet-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:via-violet-600/5 group-hover:to-blue-600/10 transition-colors duration-500 pointer-events-none rounded-3xl" />

    <div className="flex flex-col p-6 items-center text-center relative z-10 flex-1">
      {/* Avatar Container */}
      <div className="relative w-28 h-28 mb-4">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-violet-500/20 group-hover:from-blue-500/40 group-hover:to-violet-500/40 blur-xl transition-all duration-300" />
        <div className="w-full h-full p-1 rounded-full bg-gradient-to-tr from-slate-700 to-slate-800 group-hover:from-blue-500 group-hover:to-violet-500 transition-all duration-300 relative z-10">
          <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-slate-900">
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-500"
            />
          </div>
        </div>
      </div>

      {/* Basic Info */}
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 leading-snug group-hover:text-blue-400 transition-colors">
        {person.name}
      </h3>
      <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-5">
        {person.role}
      </p>

      {/* Research Domains Stack */}
      <div className="flex flex-col gap-1.5 w-full mb-6">
        {person.researchInterests.slice(0, 3).map((interest) => (
          <span
            key={interest}
            className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-500 bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-lg group-hover:border-slate-400 dark:group-hover:border-slate-700 transition-colors truncate w-full"
            title={interest}
          >
            {interest}
          </span>
        ))}
        {person.researchInterests.length > 3 && (
          <span className="text-[10px] uppercase font-bold text-slate-600">
            +{person.researchInterests.length - 3} more
          </span>
        )}
      </div>

      {/* Social Links Toolbar */}
      <div className="flex justify-center gap-3 mt-auto w-full pt-4 border-t border-slate-200 dark:border-slate-800/60">
        {person.links.scholar && (
          <a
            href={person.links.scholar}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white transition-all group/btn"
            title="Google Scholar"
          >
            <BookOpen size={16} className="group-hover/btn:text-blue-400 transition-colors" />
          </a>
        )}
        {person.links.linkedin && (
          <a
            href={person.links.linkedin}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white transition-all group/btn"
            title="LinkedIn"
          >
            <Link size={16} className="group-hover/btn:text-blue-400 transition-colors" />
          </a>
        )}
        {person.links.github && (
          <a
            href={person.links.github}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white transition-all group/btn"
            title="GitHub"
          >
            <GitBranch size={16} className="group-hover/btn:text-slate-900 dark:text-white transition-colors" />
          </a>
        )}
        {/* Placeholder if no links exist */}
        {!person.links.scholar && !person.links.linkedin && !person.links.github && (
          <span className="text-[10px] text-slate-600 uppercase tracking-widest p-2">
            No public links
          </span>
        )}
      </div>

    </div>
  </motion.div>
);

export default MemberCard;
