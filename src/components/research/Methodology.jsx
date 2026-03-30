import React from 'react';
import { motion } from 'framer-motion';
import { Search, Database, Cpu, Settings, Rocket, ArrowRight } from 'lucide-react';

const Methodology = () => {
  const steps = [
    { title: "Problem Formulation", icon: <Search size={20} />, active: true },
    { title: "Data Curation", icon: <Database size={20} />, active: false },
    { title: "Model Architecture", icon: <Cpu size={20} />, active: false },
    { title: "Optimization", icon: <Settings size={20} />, active: false },
    { title: "Deployment", icon: <Rocket size={20} />, active: false }
  ];

  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-12 text-center transition-colors duration-300">Our Research Methodology</h2>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 z-0"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex md:flex-col items-center gap-4 md:gap-4 w-full md:w-auto"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border-2 transition-all duration-300 shadow-md ${
                  step.active 
                    ? "bg-blue-600 border-blue-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]" 
                    : "bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-blue-500/50"
                }`}>
                  {step.icon}
                </div>
                
                <div className="text-left md:text-center flex-1">
                  <h4 className={`font-bold transition-colors duration-300 ${step.active ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-400'}`}>Step 0{index + 1}</h4>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-500">{step.title}</p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="md:hidden text-slate-300 dark:text-slate-700 px-4">
                    <ArrowRight size={20} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Methodology;
