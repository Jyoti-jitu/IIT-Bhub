import React, { useState } from 'react';
import { X, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CitationModal = ({ isOpen, onClose, publication }) => {
  const [activeTab, setActiveTab] = useState('APA');
  const [copied, setCopied] = useState(false);

  if (!publication) return null;

  const getCitation = (format) => {
    switch(format) {
      case 'APA':
        return `${publication.authors} (${publication.year}). ${publication.title}. ${publication.venue}. https://doi.org/${publication.doi}`;
      case 'IEEE':
        return `${publication.authors}, "${publication.title}," in ${publication.venue}, ${publication.year}, doi: ${publication.doi}.`;
      default:
        return '';
    }
  };

  const currentCitation = getCitation(activeTab);

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCitation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 dark:bg-black/60 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden transition-colors duration-300"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Cite Publication</h3>
              <button 
                onClick={onClose}
                className="p-2 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-4 line-clamp-2">
                {publication.title}
              </h4>
              
              {/* Format Tabs */}
              <div className="flex gap-2 mb-4">
                {['APA', 'IEEE'].map((format) => (
                  <button
                    key={format}
                    onClick={() => setActiveTab(format)}
                    className={`px-4 py-1.5 text-sm font-bold rounded-lg transition-colors ${
                      activeTab === format
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {format}
                  </button>
                ))}
              </div>

              {/* Citation Viewer */}
              <div className="relative group">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-800 dark:text-slate-300 font-mono leading-relaxed transition-colors duration-300 selection:bg-blue-200 dark:selection:bg-blue-500/30">
                  {currentCitation}
                </div>
                
                <button 
                  onClick={handleCopy}
                  className="absolute p-2 right-2 top-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-500/50 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Copy to clipboard"
                >
                  {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                </button>
              </div>

              {copied && (
                <p className="text-emerald-600 dark:text-emerald-400 text-xs font-semibold mt-2 animate-pulse">
                  Copied to clipboard!
                </p>
              )}
            </div>
            
            {/* Footer */}
            <div className="px-6 py-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex justify-end transition-colors duration-300">
              <button 
                onClick={onClose}
                className="px-4 py-2 font-bold text-sm text-slate-700 dark:text-slate-300 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CitationModal;
