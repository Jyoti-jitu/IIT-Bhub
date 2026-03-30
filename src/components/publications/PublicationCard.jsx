import React, { useState } from 'react';
import { ChevronDown, ChevronUp, FileText, Link as LinkIcon, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CitationModal from './CitationModal';

const PublicationCard = ({ publication }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showCitation, setShowCitation] = useState(false);

  return (
    <>
      <motion.div
        layout
        className="group flex flex-col p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-blue-500/50 transition-all duration-300"
      >
        <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-4 mb-3">
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight flex-1">
            {publication.title}
          </h3>
          <span className="shrink-0 px-2.5 py-1 text-xs font-bold uppercase tracking-wider rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 transition-colors duration-300">
            {publication.year}
          </span>
        </div>

        <p className="text-sm text-slate-800 dark:text-slate-300 font-medium mb-1 transition-colors duration-300">
          <span className="text-blue-700 dark:text-blue-400">{publication.authors}</span>
        </p>

        <p className="text-sm text-slate-600 dark:text-slate-500 italic mb-4 transition-colors duration-300">
          {publication.venue} &mdash; {publication.type}
        </p>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="p-4 mb-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-sm text-slate-700 dark:text-slate-300 leading-relaxed transition-colors duration-300">
                <span className="font-bold uppercase text-xs text-slate-500 dark:text-slate-400 block mb-2">Abstract</span>
                {publication.abstract}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-wrap items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 transition-colors"
          >
            {isExpanded ? (
              <><ChevronUp size={16} /> Hide Abstract</>
            ) : (
              <><ChevronDown size={16} /> Read Abstract</>
            )}
          </button>

          <div className="flex items-center gap-2 mt-4 sm:mt-0">
            {publication.pdfUrl && (
              <a href={publication.pdfUrl} className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase rounded bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-500/30 transition-colors">
                <FileText size={14} /> PDF
              </a>
            )}
            {publication.doi && (
              <a href={`https://doi.org/${publication.doi}`} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                <LinkIcon size={14} /> DOI
              </a>
            )}
            <button
              onClick={() => setShowCitation(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              <Quote size={14} /> Cite
            </button>
          </div>

        </div>
      </motion.div>

      <CitationModal
        isOpen={showCitation}
        onClose={() => setShowCitation(false)}
        publication={publication}
      />
    </>
  );
};

export default PublicationCard;
