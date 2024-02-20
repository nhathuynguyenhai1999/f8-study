import React from 'react';
import Header from './Header/Header';
import Hero from './Hero/Hero';

function HeroSection({ isMobile }) {
  return (
    <div
      id="home"
      className="bg-primary pt-3 px-7 h-[150vh] overflow-hidden relative md:px-[11%]"
    >
      <Header isMobile={isMobile} />
      <Hero />
    </div>
  );
}
export default HeroSection;
