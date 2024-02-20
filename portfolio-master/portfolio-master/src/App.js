import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import Skills from './components/Skills/Skills';
import Academic from './components/Academic/Academic';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleSize);
    handleSize();
    return () => window.removeEventListener('resize', handleSize);
  }, []);

  useEffect(() => {
    if (windowSize.width < 500) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [windowSize]);
  return (
    <div className=" text-14 font-poppins text-tx-primary bg-white h-screen">
      <HeroSection isMobile={isMobile} />
      <Skills />
      <Academic />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
