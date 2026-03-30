import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

const Collaboration = () => {
  return (
    <section className="py-24 relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-blue-600 dark:bg-blue-900">
        <div className="absolute inset-0 opacity-20 dark:opacity-40 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Advancing AI, Together.
          </h2>
          <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            We are actively looking for pre-doctoral residents, PhD candidates, and industry partners who share our vision of scalable, aligned AI.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-blue-900 text-sm font-bold uppercase tracking-wider rounded-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group">
              Apply for Fellowship
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-blue-700/50 dark:bg-blue-800/50 hover:bg-blue-700 dark:hover:bg-blue-800 text-white border border-blue-400/30 text-sm font-bold uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
              <Mail size={18} />
              Partner With Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Collaboration;
