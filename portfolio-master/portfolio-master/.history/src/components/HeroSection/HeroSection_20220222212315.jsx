import React from 'react';
import Header from './Header/Header';
import Hero from './Hero/Hero';

function HeroSection() {
  return (
    <div className="bg-primary pt-5 px-7 relative">
      <Header />
      <Hero />
    </div>
  );
}
export default HeroSection;
