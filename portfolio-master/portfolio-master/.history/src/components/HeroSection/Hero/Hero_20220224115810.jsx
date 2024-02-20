import React from 'react';
import Ava from '../../../access/IMG_2105.JPG';

function Hero() {
  return (
    <div>
      <div className="text-48 text-tx-primary font-bold">
        <h1>Hey There,</h1>
        <h1>I'm Chính</h1>
      </div>
      <div className="paragraph mb-4">
        <p className="pb-[6px]">
          I'm passionate and very interested in Web Programming,
        </p>
        <p className="pb-[6px]">I self-studied to be Front-End developer,</p>
        <p>And my goal is becoming a Software Engineer.</p>
      </div>
      <div className="h-[500px]">
        <div
          style={{
            backgroundImage: `url('${Ava}')`,
          }}
          className="w-full h-[500px] box-border shadow-inner rounded-3xl bg-no-repeat bg-cover absolute left-0 bg-center"
        ></div>
      </div>
    </div>
  );
}
export default Hero;
