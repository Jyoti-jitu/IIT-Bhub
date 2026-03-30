import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowUpRight } from 'lucide-react';

const RecentNews = () => {
  const news = [
    {
      date: "Oct 15, 2026",
      title: "Lab Director Appointed as Fellow of the IEEE",
      description: "Dr. Elena Rostova has been elevated to IEEE Fellow for her outstanding contributions to machine learning architectures.",
      category: "Award",
      image: "bg-blue-900/40"
    },
    {
      date: "Sep 28, 2026",
      title: "New Dataset Released for Robotic Manipulation",
      description: "We open-sourced 'GraspNet-1B', a large-scale multimodal dataset for 6-DoF robotic grasping in cluttered scenes.",
      category: "Research",
      image: "bg-purple-900/40"
    },
    {
      date: "Aug 10, 2026",
      title: "Fall 2026 Graduate Recruitment Open",
      description: "The AI Research Lab is looking for highly motivated PhD students focused on LLM alignment and AI safety.",
      category: "Announcements",
      image: "bg-emerald-900/40"
    }
  ];

  return (
    <section className="py-24 relative z-10" id="news">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-sm font-semibold text-emerald-600 dark:text-emerald-500 tracking-widest uppercase mb-3 transition-colors duration-300">Stay Updated</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">Recent News</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass p-1 rounded-2xl group overflow-hidden flex flex-col h-full bg-slate-50/60 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 hover:border-slate-400 dark:hover:border-slate-500/80 transition-all cursor-pointer"
            >
              <div className={`h-48 w-full rounded-t-xl ${item.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-100/90 dark:from-slate-900/90 to-transparent z-10 transition-colors duration-300"></div>
                
                {/* Abstract pattern placeholder for image */}
                <div className="absolute inset-0 opacity-10 dark:opacity-30 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 text-sm text-slate-800 dark:text-slate-300 font-medium transition-colors duration-300">
                  <Calendar size={16} />
                  {item.date}
                </div>
                <div className="absolute top-4 right-4 z-20 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-slate-800 dark:text-slate-300 border border-slate-300 dark:border-slate-600 transition-colors duration-300">
                  {item.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow transition-colors duration-300">
                  {item.description}
                </p>
                <div className="mt-auto flex items-center text-blue-400 font-medium text-sm group-hover:text-blue-300 transition-colors">
                  Read Full Article
                  <ArrowUpRight size={18} className="ml-1 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-8 py-3 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-white font-medium transition-all shadow-md hover:shadow-lg">
            View All News
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentNews;
