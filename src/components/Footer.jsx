import React from 'react';
import { Mail, Globe, MessageCircle, Share2, Building2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 text-slate-600 dark:text-slate-400 text-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand/About */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-300">
                Research<span className="text-blue-400">Lab</span>
              </span>
            </div>
            <p className="max-w-md leading-relaxed mb-6">
              Advancing the state-of-the-art in artificial intelligence through rigorous research, open collaboration, and an unwavering commitment to safe, alignable algorithms that benefit society.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 hover:text-slate-900 dark:hover:text-white transition-colors">
                <Globe size={18} />
              </a>
              <a href="#" className="p-2 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <MessageCircle size={18} />
              </a>
              <a href="#" className="p-2 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 hover:text-blue-700 dark:hover:text-blue-500 transition-colors">
                <Share2 size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-6 uppercase tracking-wider text-xs transition-colors duration-300">Resources</h4>
            <ul className="space-y-3 font-medium">
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Publications</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Open Source Code</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Datasets</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Careers & Admittance</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Press Resources</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-6 uppercase tracking-wider text-xs transition-colors duration-300">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <Building2 size={18} className="text-slate-400 dark:text-slate-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Computer Science Building, Rm 401<br/>
                  Institute of Technology<br/>
                  123 Academic Way
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={18} className="text-slate-400 dark:text-slate-500 shrink-0" />
                <a href="mailto:contact@airesearchlab.edu" className="hover:text-slate-900 dark:hover:text-white transition-colors">contact@airesearchlab.edu</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium transition-colors duration-300">
          <div>
            &copy; {new Date().getFullYear()} AI Research Lab. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
