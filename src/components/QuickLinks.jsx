import React from 'react';
import { motion } from 'framer-motion';
import { Users, FileText, FlaskConical, MapPin, ChevronRight } from 'lucide-react';

const QuickLinks = () => {
  const links = [
    {
      title: "Active Projects",
      description: "Explore our current and past research initiatives across various domains.",
      icon: <FlaskConical className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />,
      href: "#projects"
    },
    {
      title: "Publications",
      description: "Access our peer-reviewed papers, preprints, and technical reports.",
      icon: <FileText className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />,
      href: "#publications"
    },
    {
      title: "Our Team",
      description: "Meet the principal investigators, postdocs, and graduate students.",
      icon: <Users className="w-6 h-6 text-pink-400 group-hover:text-pink-300 transition-colors" />,
      href: "#team"
    },
    {
      title: "Visit the Lab",
      description: "Information on lab tours, location, and guest seminars.",
      icon: <MapPin className="w-6 h-6 text-emerald-400 group-hover:text-emerald-300 transition-colors" />,
      href: "#contact"
    }
  ];

  return (
    <section className="py-20 border-t border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/50 transition-colors duration-300" id="quick-links">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-300">Explore the Lab</h3>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-colors duration-300">Discover our work, people, and resources through these quick navigation links.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group glass-card p-6 flex flex-col items-center text-center rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500/50 hover:bg-white dark:hover:bg-slate-800/80 transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] block relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4 border border-slate-200 dark:border-slate-700 group-hover:scale-110 transition-transform duration-300">
                {link.icon}
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-300">{link.title}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-grow transition-colors duration-300">{link.description}</p>
              
              <div className="mt-auto flex items-center text-blue-400 font-medium text-xs tracking-wider uppercase group-hover:text-blue-300 transition-colors">
                View section
                <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
