import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, ScrollText, Star } from 'lucide-react';

const Highlights = () => {
  const highlights = [
    {
      year: "2026",
      title: "Best Paper Award at NeurIPS",
      category: "Publication",
      description: "Our team's paper on 'Efficient Attention Mechanisms for Ultra-Long Contexts' received the prestigious Best Paper Award at NeurIPS 2026.",
      icon: <Trophy className="w-6 h-6 text-yellow-500" />
    },
    {
      year: "2025",
      title: "$2M NSF Grant Awarded",
      category: "Grant",
      description: "Secured a major grant to develop robust, explainable AI systems for medical diagnostics and autonomous healthcare robots.",
      icon: <Award className="w-6 h-6 text-blue-500" />
    },
    {
      year: "2025",
      title: "Launch of OpenLLM Initiative",
      category: "Project",
      description: "Open-sourced a family of 7B-100B parameter models trained entirely on highly curated, academically peer-reviewed data.",
      icon: <Star className="w-6 h-6 text-purple-500" />
    },
    {
      year: "2024",
      title: "ICLR Outstanding Paper",
      category: "Publication",
      description: "Recognized for foundational work on 'Neural Graph Embeddings for Dynamic Knowledge Graphs' at ICLR 2024.",
      icon: <ScrollText className="w-6 h-6 text-emerald-500" />
    }
  ];

  return (
    <section className="py-24 relative z-10 bg-slate-100/50 dark:bg-slate-900/50 transition-colors duration-300" id="highlights">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 h-auto">
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold text-purple-600 dark:text-purple-500 tracking-widest uppercase mb-3 transition-colors duration-300">Milestones</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-300">Highlights & Achievements</h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg transition-colors duration-300">
              Recognizing our lab's impact through continuous innovation, significant grants, and top-tier academic publications.
            </p>
          </div>
          <button className="mt-6 md:mt-0 px-6 py-2 rounded-full border border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-400 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors bg-white/50 dark:bg-slate-800/50">
            View All Achievements
          </button>
        </div>

        <div className="relative border-l border-slate-200 dark:border-slate-700/50 ml-4 md:ml-6 lg:ml-8 space-y-12 pb-8 transition-colors duration-300">
          {highlights.map((item, index) => (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={index}
              className="relative pl-8 md:pl-16 group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[17px] top-6 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 border-4 border-white dark:border-slate-900 flex items-center justify-center shadow-sm dark:shadow-[0_0_10px_rgba(0,0,0,0.5)] group-hover:border-purple-500 transition-colors duration-300">
                <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-500 group-hover:bg-purple-500 dark:group-hover:bg-purple-400"></div>
              </div>

              <div className="glass-card p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl shadow-inner border border-slate-200 dark:border-slate-700">
                      {item.icon}
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 mb-2 transition-colors duration-300">
                        {item.year} • {item.category}
                      </span>
                      <h4 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white transition-colors duration-300">{item.title}</h4>
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed md:pl-[4.5rem] transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
