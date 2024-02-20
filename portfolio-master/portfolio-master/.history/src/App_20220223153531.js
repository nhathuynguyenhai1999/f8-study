import React from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import Skills from './components/Skills/Skills';
import Academic from './components/Academic/Academic';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="text-14 font-poppins text-tx-primary bg-white h-screen">
      <HeroSection />
      <Skills />
      <Academic />
    </div>
  );
}

export default App;
