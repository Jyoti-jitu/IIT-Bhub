import React from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

const Problems = () => {
  const problems = [
    "Catastrophic forgetting in continuous learning paradigms for large-scale language models.",
    "Hallucination mitigation lacking exhaustive logical verification in complex reasoning tasks.",
    "Computational bottlenecks in processing >1M token contexts for video and genomic sequence analysis.",
    "Data poisoning susceptibility and backdoor vulnerabilities in crowdsourced dataset training.",
    "Siloed multimodal representations that fail to integrate tactile, acoustic, and visual stimuli holistically."
  ];

  return (
    <section className="py-16 relative z-10 bg-slate-100/50 dark:bg-slate-900/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-300">Ongoing Problems</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 transition-colors duration-300">
              We focus heavily on identifying and tackling the most persistent bottlenecks preventing the deployment of safe AGI.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
          </div>
          
          <div className="md:w-2/3">
            <div className="grid gap-4">
              {problems.map((problem, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-4 p-5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm transition-colors duration-300"
                >
                  <div className="mt-0.5 w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400">
                    <Target size={14} />
                  </div>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300 leading-relaxed transition-colors duration-300">
                    {problem}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Problems;
