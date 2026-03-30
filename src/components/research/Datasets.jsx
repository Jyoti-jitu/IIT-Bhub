import React from 'react';
import { motion } from 'framer-motion';
import { Database, Download, Lock } from 'lucide-react';

const Datasets = () => {
  const datasets = [
    {
      title: "MedVision-1B",
      desc: "Anonymized medical scans paired with clinical reports. Restricted access for academic use only.",
      size: "4.2 TB",
      access: "Restricted",
      tags: ["Vision", "Healthcare", "Text"]
    },
    {
      title: "InstructRL-Conversations",
      desc: "High-quality human-annotated multi-turn conversations for RLHF alignment research.",
      size: "150 GB",
      access: "Open",
      tags: ["Text", "RLHF", "Alignment"]
    },
    {
      title: "MathReasoning-Eval",
      desc: "Complex multi-step mathematical word problems designed to test LLM logical consistency.",
      size: "2.1 GB",
      access: "Open",
      tags: ["Text", "Math", "Eval"]
    }
  ];

  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-300">Open Datasets</h2>
            <p className="text-slate-600 dark:text-slate-400 transition-colors duration-300">Curated, high-quality data driving our research forwards.</p>
          </div>
          <button className="text-sm text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
            View HuggingFace Profile &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {datasets.map((ds, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-slate-400 dark:hover:border-slate-600 transition-colors duration-300 flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                  <Database size={20} />
                </div>
                <div className={`px-2.5 py-1 rounded border text-xs font-semibold flex items-center gap-1 ${
                  ds.access === "Open" 
                    ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20"
                    : "bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-500/20"
                }`}>
                  {ds.access === "Restricted" && <Lock size={12} />}
                  {ds.access}
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-300">{ds.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 flex-grow transition-colors duration-300">{ds.desc}</p>
              
              <div className="flex flex-wrap items-center gap-2 mb-6">
                {ds.tags.map((tag, idx) => (
                  <span key={idx} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors duration-300">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center transition-colors duration-300">
                <span className="text-sm font-mono text-slate-500 dark:text-slate-400">{ds.size}</span>
                <button className="p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors">
                  <Download size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Datasets;
