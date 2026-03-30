import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, BrainCircuit } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="home">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] mix-blend-screen" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-slate-300 dark:border-slate-700/50 text-blue-600 dark:text-blue-400 text-sm font-medium mb-8"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
          </span>
          Next-Gen AI Research Institute
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
        >
          <span className="block text-slate-900 dark:text-white mb-2 transition-colors duration-300">Pioneering the Future of</span>
          <span className="block text-gradient">Artificial Intelligence</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-4 max-w-3xl text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 transition-colors duration-300"
        >
          Advancing AI for real-world impact through cutting-edge research in large language models, computer vision, and autonomous systems at one of the world's premier academic institutions.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md mx-auto"
        >
          <button className="flex-1 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] dark:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] dark:hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] flex items-center justify-center gap-2 group">
            <BookOpen size={20} className="group-hover:scale-110 transition-transform"/>
            View Research
          </button>
          <button className="flex-1 px-8 py-4 rounded-full glass hover:bg-slate-100 dark:hover:bg-slate-800/80 text-slate-800 dark:text-white font-medium transition-all border border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500 flex items-center justify-center gap-2 group">
            <BrainCircuit size={20} className="group-hover:scale-110 transition-transform text-purple-600 dark:text-purple-400"/>
            Explore Projects
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto w-full border-t border-slate-200 dark:border-slate-700/50 pt-10 transition-colors duration-300"
        >
          {[
            { label: 'Active Projects', value: '45+' },
            { label: 'Publications', value: '250+' },
            { label: 'Research Grants', value: '$12M+' },
            { label: 'PhD Scholars', value: '80+' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight transition-colors duration-300">{stat.value}</span>
              <span className="text-sm text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider font-semibold transition-colors duration-300">{stat.label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
