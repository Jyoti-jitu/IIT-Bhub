import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, X } from 'lucide-react';

const TYPES = ['All Types', 'Student', 'BTP', 'Prototype'];
const DOMAINS = ['All Domains', 'AI', 'NLP', 'Computer Vision'];
const YEARS = ['All Years', '2025', '2024', '2023', '2022'];

const DOMAIN_COLORS = {
  AI: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
  NLP: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  'Computer Vision': 'text-sky-400 bg-sky-500/10 border-sky-500/20',
};

const TYPE_COLORS = {
  Student: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  BTP: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  Prototype: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
};

const ChipGroup = ({ options, active, setActive, colorMap }) => (
  <div className="flex flex-wrap gap-2">
    {options.map((opt) => {
      const isActive = active === opt;
      const color =
        isActive && opt !== options[0] ? colorMap[opt] || '' : '';
      return (
        <button
          key={opt}
          onClick={() => setActive(opt)}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-all duration-200
            ${
              isActive
                ? opt === options[0]
                  ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/25'
                  : `${color} border`
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-600'
            }`}
        >
          {opt}
        </button>
      );
    })}
  </div>
);

const ProjectsFilterBar = ({
  search,
  setSearch,
  activeType,
  setActiveType,
  activeDomain,
  setActiveDomain,
  activeYear,
  setActiveYear,
}) => {
  const hasActiveFilters =
    search !== '' ||
    activeType !== 'All Types' ||
    activeDomain !== 'All Domains' ||
    activeYear !== 'All Years';

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-8 space-y-4"
    >
      {/* Search bar */}
      <div className="relative group">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/20 to-violet-600/20 opacity-0 group-focus-within:opacity-100 transition-opacity blur-sm -z-10" />
        <div className="flex items-center gap-3 px-5 py-3.5 bg-slate-900 border border-slate-800 group-focus-within:border-blue-500/50 rounded-2xl transition-all">
          <Search size={17} className="text-slate-500 group-focus-within:text-blue-400 transition-colors shrink-0" />
          <input
            type="text"
            placeholder="Search by title, technology, or keyword..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="text-slate-500 hover:text-white transition-colors"
            >
              <X size={15} />
            </button>
          )}
        </div>
      </div>

      {/* Filter chip rows */}
      <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-4 backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-3">
          <SlidersHorizontal size={14} className="text-slate-500" />
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Filters
          </span>
          {hasActiveFilters && (
            <button
              onClick={() => {
                setSearch('');
                setActiveType('All Types');
                setActiveDomain('All Domains');
                setActiveYear('All Years');
              }}
              className="ml-auto text-xs text-blue-400 hover:text-blue-300 font-semibold transition-colors"
            >
              Clear all
            </button>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 space-y-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-600">
              Type
            </p>
            <ChipGroup
              options={TYPES}
              active={activeType}
              setActive={setActiveType}
              colorMap={TYPE_COLORS}
            />
          </div>

          <div className="hidden sm:block w-px bg-slate-800" />

          <div className="flex-1 space-y-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-600">
              Domain
            </p>
            <ChipGroup
              options={DOMAINS}
              active={activeDomain}
              setActive={setActiveDomain}
              colorMap={DOMAIN_COLORS}
            />
          </div>

          <div className="hidden sm:block w-px bg-slate-800" />

          <div className="flex-1 space-y-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-600">
              Year
            </p>
            <ChipGroup
              options={YEARS}
              active={activeYear}
              setActive={setActiveYear}
              colorMap={{}}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsFilterBar;
