import React from 'react';
import Ava from '../../../access/IMG_2105.JPG';
import Ava1 from '../../../access/IMG_2105 (1).JPG';

function Hero() {
  return (
    <div className="md:flex md:justify-between md:items-center">
      <div className="text-48 md:text-[56px] text-tx-primary font-bold md:flex-[50%] md:flex md:mt-4">
        <h1>Hey There, {'..'}</h1>
        <h1>I'm Chính</h1>
      </div>
      <div className="paragraph text-[15px] md:text-[18px] mb-4 md:mb-0 md:flex md:flex-col md:justify-center md:flex-[40%] md:gap-4">
        <p className="pb-[4px]">
          I'm passionate and very interested in Web Programming
        </p>
        <p className="pb-[4px]">I self-studied to be Front-End developer</p>
        <p>And my goal is becoming a Software Engineer.</p>
      </div>
      <div className="md:hidden">
        <div
          style={{
            backgroundImage: `url('${Ava}')`,
          }}
          className="w-[100%] h-[50%] mx-auto box-border shadow-inner bg-no-repeat bg-cover absolute left-0 bottom-0 bg-center"
        ></div>
      </div>
      <div className="md:block hidden">
        <div
          style={{
            backgroundImage: `url('${Ava1}')`,
          }}
          className="w-[80%] h-[70%] mx-auto box-border shadow-inner bg-no-repeat bg-cover absolute left-[50%] translate-x-[-50%] bottom-0 bg-center"
        ></div>
      </div>
    </div>
  );
}
export default Hero;
