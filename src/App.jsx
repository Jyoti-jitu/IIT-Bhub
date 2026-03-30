import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Research from './pages/Research';
import Publications from './pages/Publications';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      <div className="bg-slate-50 dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-200 selection:bg-blue-500/30 transition-colors duration-300">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/publications" element={<Publications />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
