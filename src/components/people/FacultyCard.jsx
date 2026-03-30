import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, GitBranch, Link, ExternalLink } from 'lucide-react';

const FacultyCard = ({ person, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative flex flex-col md:flex-row bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-teal-500/30 transition-all duration-300 shadow-xl"
  >
    {/* Glow background */}
    <div className="absolute inset-0 bg-gradient-to-br from-teal-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

    {/* Avatar Area */}
    <div className="relative w-full md:w-72 md:shrink-0 bg-slate-800/50 flex flex-col items-center justify-center p-8 border-b md:border-b-0 md:border-r border-slate-800">
      <div className="relative w-40 h-40 rounded-full mb-6 p-1 bg-gradient-to-tr from-teal-500 to-blue-500">
        <div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
          <img
            src={person.image}
            alt={person.name}
            className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500"
          />
        </div>
      </div>
      
      <div className="flex gap-3 mt-auto">
        {person.links.scholar && (
          <a
            href={person.links.scholar}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-600 text-slate-400 hover:text-white transition-all shadow-md group/btn"
            title="Google Scholar"
          >
            <BookOpen size={18} className="group-hover/btn:text-blue-400 transition-colors" />
          </a>
        )}
        {person.links.linkedin && (
          <a
            href={person.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-600 text-slate-400 hover:text-white transition-all shadow-md group/btn"
            title="LinkedIn"
          >
            <Link size={18} className="group-hover/btn:text-teal-400 transition-colors" />
          </a>
        )}
        {person.links.github && (
          <a
            href={person.links.github}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-600 text-slate-400 hover:text-white transition-all shadow-md group/btn"
            title="GitHub"
          >
            <GitBranch size={18} className="group-hover/btn:text-white transition-colors" />
          </a>
        )}
      </div>
    </div>

    {/* Content Area */}
    <div className="p-8 md:p-10 flex-1 relative z-10">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2 leading-snug group-hover:text-teal-400 transition-colors">
            {person.name}
          </h2>
          <p className="text-teal-400 font-semibold mb-6">
            {person.role}
          </p>
        </div>
        <div className="hidden sm:flex p-3 rounded-2xl bg-slate-800/50 text-slate-500 border border-slate-700/50">
          <GraduationCap size={24} />
        </div>
      </div>

      <p className="text-slate-400 leading-relaxed mb-8 max-w-3xl">
        {person.bio}
      </p>

      {/* Research Domains */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
          Key Research Domains
        </h3>
        <div className="flex flex-wrap gap-2">
          {person.researchInterests.map((interest) => (
            <span
              key={interest}
              className="px-3 py-1.5 text-xs font-semibold text-slate-300 bg-slate-800/80 border border-slate-700/60 rounded-xl hover:bg-slate-800 transition-colors"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>

      {/* Optional: Explore Research Button */}
      <div className="mt-8 flex justify-start">
        <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-sm font-bold rounded-xl transition-all border border-slate-700 group/link">
          Lab Publications <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </div>
  </motion.div>
);

export default FacultyCard;
