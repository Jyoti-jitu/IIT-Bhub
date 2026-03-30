import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Maximize, Zap, HeartPulse } from 'lucide-react';

const Domains = () => {
  const domains = [
    {
      title: "LLM Optimization",
      desc: "Advancing sparse attention, context-window scaling, and instruction tuning to create more capable generative models.",
      icon: <Sparkles className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
      bg: "from-blue-500/10 to-transparent",
    },
    {
      title: "Model Compression",
      desc: "Post-training quantization and pruning methodologies enabling 100B parameter models to run on edge devices.",
      icon: <Maximize className="w-6 h-6 text-purple-500 dark:text-purple-400" />,
      bg: "from-purple-500/10 to-transparent",
    },
    {
      title: "Efficient AI",
      desc: "Developing novel architectures that bypass transformers to achieve O(N) complexity for sequential data.",
      icon: <Zap className="w-6 h-6 text-amber-500 dark:text-amber-400" />,
      bg: "from-amber-500/10 to-transparent",
    },
    {
      title: "Healthcare AI",
      desc: "Multimodal frameworks for clinical diagnostics, combining EMR data, genomics, and real-time vital sensors.",
      icon: <HeartPulse className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />,
      bg: "from-emerald-500/10 to-transparent",
    }
  ];

  return (
    <section className="py-16 relative z-10" id="domains">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-10 transition-colors duration-300">Core Research Domains</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl group border border-slate-200 dark:border-slate-700/50 hover:border-slate-400 dark:hover:border-slate-500 bg-white/60 dark:bg-slate-800/40 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${domain.bg} border border-slate-200 dark:border-slate-700 group-hover:scale-110 transition-transform`}>
                {domain.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors duration-300">{domain.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed transition-colors duration-300">{domain.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Domains;
