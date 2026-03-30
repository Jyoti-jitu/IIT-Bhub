import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

const TYPES = ['All Types', 'Student', 'BTP', 'Prototype'];
const DOMAINS = ['All Domains', 'AI', 'NLP', 'Computer Vision', 'RL'];
const YEARS = ['All Years', '2025', '2024', '2023', '2022'];

const ProjectsFilterBar = ({ search, setSearch, activeType, setActiveType, activeDomain, setActiveDomain, activeYear, setActiveYear }) => {
  return (
    <div className="mb-10">
      {/* Search Row */}
      <div className="flex flex-col md:flex-row gap-3 p-2 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm backdrop-blur-sm transition-colors duration-300">
        {/* Search Input */}
        <div className="relative flex-grow">
          <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500 pointer-events-none" />
          <input
            type="text"
            placeholder="Search projects by title, tech, or author..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full h-11 pl-11 pr-4 bg-transparent text-sm font-medium text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none"
          />
        </div>

        <div className="hidden md:block w-px h-8 self-center bg-slate-200 dark:bg-slate-800" />

        {/* Dropdowns */}
        <div className="flex items-center gap-2 flex-wrap md:flex-nowrap">
          <SlidersHorizontal size={16} className="text-slate-400 dark:text-slate-500 shrink-0 hidden md:block" />
          {[
            { label: 'Type', options: TYPES, value: activeType, setter: setActiveType },
            { label: 'Domain', options: DOMAINS, value: activeDomain, setter: setActiveDomain },
            { label: 'Year', options: YEARS, value: activeYear, setter: setActiveYear },
          ].map(({ label, options, value, setter }) => (
            <select
              key={label}
              value={value}
              onChange={e => setter(e.target.value)}
              className="flex-1 md:flex-none h-11 px-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/40 cursor-pointer appearance-none hover:bg-slate-100 dark:hover:bg-slate-700 transition-all"
            >
              {options.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsFilterBar;
