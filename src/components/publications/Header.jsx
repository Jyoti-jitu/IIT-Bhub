import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <section className="pt-32 pb-16 relative overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-slate-200/50 to-transparent dark:from-slate-900/50 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-6 transition-colors duration-300">
            Research Output
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight transition-colors duration-300">
            Publications
          </h1>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed transition-colors duration-300">
            Our comprehensive collection of peer-reviewed journals, conference proceedings, and active pre-prints advancing the foundational elements of artificial intelligence.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
