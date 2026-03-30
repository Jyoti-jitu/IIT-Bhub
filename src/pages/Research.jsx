import React from 'react';
import Header from '../components/research/Header';
import Domains from '../components/research/Domains';
import Problems from '../components/research/Problems';
import Methodology from '../components/research/Methodology';
import Projects from '../components/research/Projects';
import Diagrams from '../components/research/Diagrams';
import Datasets from '../components/research/Datasets';
import Collaboration from '../components/research/Collaboration';

const Research = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Domains />
      <Problems />
      <Methodology />
      <Projects />
      <Diagrams />
      <Datasets />
      <Collaboration />
    </main>
  );
};

export default Research;
