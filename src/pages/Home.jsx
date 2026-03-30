import React from 'react';
import Hero from '../components/Hero';
import ResearchAreas from '../components/ResearchAreas';
import Highlights from '../components/Highlights';
import RecentNews from '../components/RecentNews';
import AISection from '../components/AISection';
import QuickLinks from '../components/QuickLinks';

const Home = () => {
  return (
    <main>
      <Hero />
      <ResearchAreas />
      <AISection />
      <Highlights />
      <RecentNews />
      <QuickLinks />
    </main>
  );
};

export default Home;
