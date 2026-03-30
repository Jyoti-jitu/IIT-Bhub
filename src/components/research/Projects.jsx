import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Database } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Aurora-70B Open Weights",
      desc: "Our flagship multimodal model trained on 10T tokens with novel MoE routing, outperforming proprietary models on logical benchmarks.",
      domain: "LLM Optimization",
      status: "Released",
      statusColor: "bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-500/30",
      links: [
        { name: "HuggingFace", icon: <Database size={14} />, url: "#" },
        { name: "GitHub", icon: <Code size={14} />, url: "#" }
      ]
    },
    {
      title: "MedVision Foundation",
      desc: "A vision-language model fine-tuned on 1B+ de-identified medical scans, capable of generating diagnostic differentials.",
      domain: "Healthcare AI",
      status: "In Peer Review",
      statusColor: "bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-500/30",
      links: [
        { name: "Paper", icon: <ExternalLink size={14} />, url: "#" }
      ]
    },
    {
      title: "NeuroPrune V2",
      desc: "An experimental pipeline for dynamic network pruning during inference, reducing GPU memory footprint by 80% without accuracy loss.",
      domain: "Model Compression",
      status: "Active Research",
      statusColor: "bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-500/30",
      links: []
    }
  ];

  return (
    <section className="py-20 relative z-10" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-10 transition-colors duration-300">Featured Research Projects</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-500/50 transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 transition-colors duration-300">
                    {project.domain}
                  </span>
                  <span className={`text-xs px-2.5 py-1 rounded-full border font-semibold ${project.statusColor}`}>
                    {project.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 flex-grow transition-colors duration-300">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-3 mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
                  {project.links.length > 0 ? (
                    project.links.map((link, i) => (
                      <a 
                        key={i} 
                        href={link.url}
                        className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                      >
                        {link.icon} {link.name}
                      </a>
                    ))
                  ) : (
                    <span className="text-xs text-slate-400 dark:text-slate-500 italic">Links pending publication</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
