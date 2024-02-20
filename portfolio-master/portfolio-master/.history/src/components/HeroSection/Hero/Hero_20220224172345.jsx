import React from 'react';
import Ava from '../../../access/IMG_2105.JPG';

function Hero() {
  return (
    <div className="md:flex md:justify-between md:items-center">
      <div className="text-48 text-tx-primary font-bold md:flex-[50%]">
        <h1>Hey There,</h1>
        <h1>I'm Chính</h1>
      </div>
      <div className="paragraph text-[15px] mb-4 md:mb-0 md:flex md:flex-col md:justify-center md:flex-[40%]">
        <p className="pb-[4px]">
          I'm passionate and very interested in Web Programming
        </p>
        <p className="pb-[4px]">I self-studied to be Front-End developer</p>
        <p>And my goal is becoming a Software Engineer.</p>
      </div>
      <div className="hidden">
        <div
          style={{
            backgroundImage: `url('${Ava}')`,
          }}
          className="w-[100%] h-[50%] mx-auto box-border shadow-inner bg-no-repeat bg-cover absolute left-0 bottom-0 bg-center"
        ></div>
      </div>
    </div>
  );
}
export default Hero;
