import React from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

const ProjectsHeader = () => (
  <section className="pt-32 pb-16 relative overflow-hidden bg-gradient-to-b from-slate-950 via-indigo-950/30 to-slate-950 dark:from-slate-950 dark:via-indigo-950/30 dark:to-slate-950">
    {/* Grid decoration */}
    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M%2060%200%20L%2060%2060%20M%200%2060%20L%2060%2060%22%20fill%3D%22none%22%20stroke%3D%22%23ffffff08%22%20stroke-width%3D%221%22/%3E%3C/svg%3E')] opacity-60 pointer-events-none" />
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute top-8 right-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
          <Cpu size={14} />
          Research Implementations
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
          Our{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Projects
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed">
          From foundational AI research to real-world deployments — explore student theses, BTP projects, and open-source prototypes built at the intersection of intelligence and engineering.
        </p>
      </motion.div>
    </div>
  </section>
);

export default ProjectsHeader;
