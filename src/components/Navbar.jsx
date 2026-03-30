import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket, ChevronRight, Search, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Research', href: '/research' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Publications', href: '/publications' },
    { name: 'Team', href: '/#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 tracking-wide">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-shadow">
              <span className="text-white font-bold text-xl">AI</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-300">
              Research<span className="text-blue-600 dark:text-blue-400">Lab</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href || (link.href === '/' && location.pathname === '');
              return (
                <Link 
                  key={link.name} 
                  to={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Explore Research Button & Theme Toggle (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-white transition-colors p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-white transition-colors p-2">
              <Search size={20} />
            </button>
            <button className="px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] flex items-center gap-2">
              Explore Research
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Mobile menu button & Theme toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white p-2"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-slate-200 dark:border-slate-700"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href || (link.href === '/' && location.pathname === '');
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`block px-3 py-3 text-base font-medium rounded-md transition-colors ${
                      isActive
                        ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                        : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4 px-3">
                <button className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  Explore Research
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
