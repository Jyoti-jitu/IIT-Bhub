import React from 'react';
import { Search, Filter } from 'lucide-react';

const FilterBar = ({ activeYear, setActiveYear, activeType, setActiveType, searchQuery, setSearchQuery }) => {
  const years = ['All Years', '2025', '2024', '2023', '2022'];
  const types = ['All Types', 'Conference', 'Journal'];

  return (
    <div className="mb-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl py-4 rounded-2xl transition-colors duration-300">
      
      {/* Unified Search & Filter Container */}
      <div className="flex flex-col md:flex-row items-center gap-3 bg-white dark:bg-slate-950 p-2 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 transition-colors duration-300">
        
        {/* Search Input Zone */}
        <div className="relative flex-grow w-full md:w-auto">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-blue-500">
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder="Search publications by title or author..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-11 pl-11 pr-4 bg-transparent text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-all font-medium"
          />
        </div>
        
        {/* Divider (Desktop Only) */}
        <div className="hidden md:block w-px h-8 bg-slate-200 dark:bg-slate-800 mx-2"></div>

        {/* Filters Zone */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="flex p-2 text-slate-400 dark:text-slate-500 md:hidden">
            <Filter size={16} />
          </div>

          <select 
            className="flex-1 md:flex-none h-11 px-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 cursor-pointer appearance-none hover:bg-slate-100 dark:hover:bg-slate-800 transition-all min-w-[120px]"
            value={activeYear}
            onChange={(e) => setActiveYear(e.target.value)}
          >
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>

          <select 
            className="flex-1 md:flex-none h-11 px-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 cursor-pointer appearance-none hover:bg-slate-100 dark:hover:bg-slate-800 transition-all min-w-[130px]"
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
