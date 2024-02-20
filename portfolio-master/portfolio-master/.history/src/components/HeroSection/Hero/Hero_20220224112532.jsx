import React from 'react';
import Ava from '../../../access/avt.png';

function Hero() {
  return (
    <div>
      <div className="text-48 text-tx-primary font-bold">
        <h1>Hey There,</h1>
        <h1>I'm Chính</h1>
      </div>
      <div className="paragraph mb-4">
        <p className="pb-[6px]">I am passionate and like programming,</p>
        <p className="pb-[6px]">I self-study to be a front-end developer,</p>
        <p>And my goal is to become a Software Engineer.</p>
      </div>
      <div className="h-[380px]">
        <div
          style={{
            backgroundImage: `url('${Ava}')`,
          }}
          className="w-full h-[380px] bg-no-repeat bg-cover absolute left-0"
        ></div>
      </div>
    </div>
  );
}
export default Hero;
