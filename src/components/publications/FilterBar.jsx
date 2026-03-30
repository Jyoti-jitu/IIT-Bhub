import React from 'react';
import { Filter } from 'lucide-react';

const FilterBar = ({ activeYear, setActiveYear, activeType, setActiveType }) => {
  const years = ['All Years', '2025', '2024', '2023', '2022'];
  const types = ['All Types', 'Conference', 'Journal'];

  return (
    <div className="sticky top-20 z-30 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md py-4 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-semibold mb-2 sm:mb-0 transition-colors duration-300">
          <Filter size={18} />
          <span>Filter Publications</span>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          {/* Year Filter */}
          <select 
            className="px-4 py-2 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium cursor-pointer transition-colors duration-300 hover:bg-slate-200 dark:hover:bg-slate-800"
            value={activeYear}
            onChange={(e) => setActiveYear(e.target.value)}
          >
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>

          {/* Type Filter */}
          <select 
            className="px-4 py-2 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium cursor-pointer transition-colors duration-300 hover:bg-slate-200 dark:hover:bg-slate-800"
            value={activeType}
            onChange={(e) => setActiveType(e.target.value)}
          >
            {types.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
