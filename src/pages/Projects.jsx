import React, { useState, useMemo } from 'react';
import ProjectsHeader from '../components/projects/ProjectsHeader';
import FeaturedProjects from '../components/projects/FeaturedProjects';
import ProjectsFilterBar from '../components/projects/ProjectsFilterBar';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectModal from '../components/projects/ProjectModal';
import { projectsData } from '../data/projectsData';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, List } from 'lucide-react';

const Projects = () => {
  const [search, setSearch] = useState('');
  const [activeType, setActiveType] = useState('All Types');
  const [activeDomain, setActiveDomain] = useState('All Domains');
  const [activeYear, setActiveYear] = useState('All Years');
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'

  const featuredProjects = useMemo(
    () => projectsData.filter((p) => p.featured),
    []
  );

  const filteredProjects = useMemo(() => {
    return projectsData.filter((p) => {
      const matchType = activeType === 'All Types' || p.type === activeType;
      const matchDomain =
        activeDomain === 'All Domains' ||
        p.domain === activeDomain ||
        p.domain.toLowerCase().includes(activeDomain.toLowerCase());
      const matchYear = activeYear === 'All Years' || p.year === activeYear;
      const matchSearch =
        search === '' ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.tech.some((t) => t.toLowerCase().includes(search.toLowerCase()));

      return matchType && matchDomain && matchYear && matchSearch;
    });
  }, [search, activeType, activeDomain, activeYear]);

  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white">
      {/* Header hero */}
      <ProjectsHeader totalCount={projectsData.length} />

      {/* Featured strip */}
      {featuredProjects.length > 0 && (
        <FeaturedProjects
          projects={featuredProjects}
          onSelect={setSelectedProject}
        />
      )}

      {/* Main grid section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Toolbar */}
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">All Projects</h2>
              <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                {filteredProjects.length}
              </span>
            </div>

            {/* View toggle */}
            <div className="flex items-center gap-2 p-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white'}`}
                aria-label="Grid view"
              >
                <LayoutGrid size={16} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white'}`}
                aria-label="List view"
              >
                <List size={16} />
              </button>
            </div>
          </div>

          {/* Filter bar */}
          <ProjectsFilterBar
            search={search}
            setSearch={setSearch}
            activeType={activeType}
            setActiveType={setActiveType}
            activeDomain={activeDomain}
            setActiveDomain={setActiveDomain}
            activeYear={activeYear}
            setActiveYear={setActiveYear}
          />

          {/* Grid / List */}
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              <motion.div
                key="results"
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'
                    : 'flex flex-col gap-4'
                }
              >
                {filteredProjects.map((project) => (
                  <motion.div key={project.id} variants={cardVariants}>
                    <ProjectCard
                      project={project}
                      onClick={() => setSelectedProject(project)}
                      listMode={viewMode === 'list'}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-28 text-center"
              >
                <div className="w-20 h-20 mb-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-4xl">
                  🔬
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  No projects found
                </h3>
                <p className="text-slate-600 dark:text-slate-400 max-w-xs">
                  Try adjusting your filters or search query to discover more
                  projects.
                </p>
                <button
                  onClick={() => {
                    setSearch('');
                    setActiveType('All Types');
                    setActiveDomain('All Domains');
                    setActiveYear('All Years');
                  }}
                  className="mt-6 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl transition-all"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
};

export default Projects;
