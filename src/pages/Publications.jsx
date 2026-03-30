import React, { useState } from 'react';
import Header from '../components/publications/Header';
import FilterBar from '../components/publications/FilterBar';
import PublicationCard from '../components/publications/PublicationCard';

const Publications = () => {
  const [activeYear, setActiveYear] = useState('All Years');
  const [activeType, setActiveType] = useState('All Types');
  const [searchQuery, setSearchQuery] = useState('');

  // Hardcoded publications data 
  const publicationsData = [
    {
      id: 1,
      title: "Scaling Laws for Sparse Mixture of Experts Models",
      authors: "A. Researcher, M. Scientist, et al.",
      venue: "NeurIPS 2025",
      year: "2025",
      type: "Conference",
      abstract: "We investigate the scaling properties of Sparse Mixture of Experts (SMoE) models up to 1T parameters. Our findings indicate a logarithmic correlation between expert routing granularity and zero-shot downstream task performance, proving highly efficient for large-scale generative pre-training.",
      doi: "10.1234/neurips.2025.101",
      pdfUrl: "#",
    },
    {
      id: 2,
      title: "Efficient Quantization Strategies for Edge LLM Deployment",
      authors: "J. Doe, S. Turing",
      venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence",
      year: "2024",
      type: "Journal",
      abstract: "This paper presents a novel 2-bit quantization technique that maintains 98% of the FP16 baseline accuracy on LLaMA-class architectures. We provide hardware-aware benchmarks showing viable deployment on consumer-grade mobile SOCs.",
      doi: "10.1109/TPAMI.2024.99281",
      pdfUrl: "#",
    },
    {
      id: 3,
      title: "Multimodal Foundational Models in Clinical Diagnostics",
      authors: "M. Curie, A. Researcher",
      venue: "Nature Medicine",
      year: "2024",
      type: "Journal",
      abstract: "We introduce MedVision-1B, a foundational model trained on paired textual reports and radiological scans. The model achieves state-of-the-art results in automated pathology detection and structured differential diagnosis generation.",
      doi: "10.1038/s41591-024-1234-x",
      pdfUrl: "#",
    },
    {
      id: 4,
      title: "Mitigating Hallucinations via Epistemic Uncertainty Quantification",
      authors: "R. Feynman, E. Lovelace, S. Turing",
      venue: "ICLR 2024",
      year: "2024",
      type: "Conference",
      abstract: "Generative models frequently suffer from confident hallucinations. We propose a technique using Bayesian dropout to quantify epistemic uncertainty within the transformer attention heads, triggering active-verification fallback mechanisms.",
      doi: "10.1234/iclr.2024.505",
      pdfUrl: "#",
    }
  ];

  // Filtering Logic
  const filteredPublications = publicationsData.filter(pub => {
    const matchYear = activeYear === 'All Years' || pub.year === activeYear;
    const matchType = activeType === 'All Types' || pub.type === activeType;
    const matchSearch = 
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      pub.authors.toLowerCase().includes(searchQuery.toLowerCase());
      
    return matchYear && matchType && matchSearch;
  });

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Header />

      <section className="pb-32 pt-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <FilterBar
            activeYear={activeYear}
            setActiveYear={setActiveYear}
            activeType={activeType}
            setActiveType={setActiveType}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

          <div className="mt-8 space-y-6">
            {filteredPublications.length > 0 ? (
              filteredPublications.map(pub => (
                <PublicationCard key={pub.id} publication={pub} />
              ))
            ) : (
              <div className="py-12 text-center text-slate-500 dark:text-slate-400">
                No publications found matching the selected filters.
              </div>
            )}
          </div>

        </div>
      </section>
    </main>
  );
};

export default Publications;
