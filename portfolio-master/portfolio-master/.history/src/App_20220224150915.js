import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection/HeroSection';
import Skills from './components/Skills/Skills';
import Academic from './components/Academic/Academic';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className=" text-14 font-poppins text-tx-primary bg-white h-screen">
      <HeroSection id="home" />
      <Skills />
      <Academic />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;