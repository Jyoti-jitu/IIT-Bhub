import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      {/* Background glow specific to research page */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-indigo-600/10 dark:bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100/80 dark:bg-indigo-900/50 border border-indigo-400/30 dark:border-indigo-500/30 text-indigo-700 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-6"
        >
          Pushing the Boundaries
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-slate-900 dark:text-white transition-colors duration-300"
        >
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Research</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-400 leading-relaxed transition-colors duration-300"
        >
          We aim to align foundational AI capabilities with pressing real-world challenges. From ultra-efficient language models to life-saving medical imaging, our lab operates at the cutting edge of artificial general intelligence.
        </motion.p>
      </div>
    </section>
  );
};

export default Header;
