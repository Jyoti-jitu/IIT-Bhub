import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Network, Eye, Cpu, Bot, LineChart } from 'lucide-react';

const ResearchAreas = () => {
  const areas = [
    {
      title: "Machine Learning Foundations",
      description: "Developing robust algorithms and studying the theoretical limits of modern deep learning architectures to improve generalization.",
      icon: <Brain className="w-8 h-8 text-blue-400" />,
      color: "from-blue-500/20 to-blue-600/5",
      border: "hover:border-blue-500/50"
    },
    {
      title: "Natural Language Processing",
      description: "Advancing foundational LLMs, prompt engineering, and cross-lingual translation to make machines truly understand human context.",
      icon: <Network className="w-8 h-8 text-purple-400" />,
      color: "from-purple-500/20 to-purple-600/5",
      border: "hover:border-purple-500/50"
    },
    {
      title: "Computer Vision",
      description: "Creating models that perceive, interpret, and reconstruct the visual world for autonomous systems and medical imaging.",
      icon: <Eye className="w-8 h-8 text-indigo-400" />,
      color: "from-indigo-500/20 to-indigo-600/5",
      border: "hover:border-indigo-500/50"
    },
    {
      title: "Robotics & Control",
      description: "Integrating reinforcement learning with hardware to build agile, adaptive robots capable of complex real-world tasks.",
      icon: <Cpu className="w-8 h-8 text-emerald-400" />,
      color: "from-emerald-500/20 to-emerald-600/5",
      border: "hover:border-emerald-500/50"
    },
    {
      title: "Human-AI Interaction",
      description: "Studying how humans collaborate with AI systems, focusing on alignability, explainability, and trust.",
      icon: <Bot className="w-8 h-8 text-pink-400" />,
      color: "from-pink-500/20 to-pink-600/5",
      border: "hover:border-pink-500/50"
    },
    {
      title: "Data Science & Analytics",
      description: "Uncovering hidden patterns in massive datasets using advanced statistical methods and scalable graph neural networks.",
      icon: <LineChart className="w-8 h-8 text-amber-400" />,
      color: "from-amber-500/20 to-amber-600/5",
      border: "hover:border-amber-500/50"
    }
  ];

  return (
    <section className="py-24 relative z-10" id="research">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-500 tracking-widest uppercase mb-3 transition-colors duration-300">Core Focus</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">Research Areas</h3>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-lg transition-colors duration-300">
            Our lab focuses on solving fundamental challenges across multiple disciplines of artificial intelligence to bridge the gap between theory and application.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card p-8 rounded-2xl group border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-300 ${area.border} cursor-pointer`}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
                {area.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{area.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm transition-colors duration-300">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ResearchAreas;
