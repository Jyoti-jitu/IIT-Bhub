import React from 'react';
import { motion } from 'framer-motion';

const Diagrams = () => {
  return (
    <section className="py-16 relative z-10 bg-slate-50/50 dark:bg-slate-900/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-300">Architecture Visualizations</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-10 transition-colors duration-300 text-lg">Interactive schematics of our latest foundational models.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-2 shadow-lg group transition-colors duration-300 overflow-hidden relative min-h-[300px] flex items-center justify-center"
          >
            {/* Diagram Placeholder */}
            <div className="absolute inset-0 opacity-10 dark:opacity-[0.15] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
            
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10"></div>
            
            <div className="text-center z-10 p-6 glass-card rounded-xl border border-white/20 dark:border-slate-600/30">
              <div className="w-16 h-16 mx-auto mb-4 border-2 border-dashed border-slate-400 dark:border-slate-500 rounded-lg flex items-center justify-center text-slate-400 dark:text-slate-500">
                MoE
              </div>
              <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Mixture of Experts Routing</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto">Figure 1. Illustration of our heavily optimized sparse routing scheme across 128 expert layers.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-2 shadow-lg group transition-colors duration-300 overflow-hidden relative min-h-[300px] flex items-center justify-center"
          >
            {/* Diagram Placeholder */}
            <div className="absolute inset-0 opacity-10 dark:opacity-[0.15] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
            
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10"></div>
            
            <div className="text-center z-10 p-6 glass-card rounded-xl border border-white/20 dark:border-slate-600/30">
              <div className="w-16 h-16 mx-auto mb-4 border-2 border-dashed border-slate-400 dark:border-slate-500 rounded-full flex items-center justify-center text-slate-400 dark:text-slate-500">
                P
              </div>
              <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Dynamic Pruning Engine</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto">Figure 2. Inference-time memory management through continuous topology evaluation.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Diagrams;
