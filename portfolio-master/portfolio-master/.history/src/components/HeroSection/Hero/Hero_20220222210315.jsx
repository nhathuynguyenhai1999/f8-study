import React from 'react';

function Hero() {
  return (
    <div>
      <div className="text-48 text-tx-primary font-bold">
        <h1>Hey There,</h1>
        <h1>I'm Chính</h1>
      </div>
      <div className="text-16 text-tx-primary font-normal mb-4">
        <p className="pb-[6px]">I design beautiful simple things,</p>
        <p>And I love what i do</p>
      </div>
      <div className="h-[380px]">
        <div
          style={{
            backgroundImage: `url('./PicsArt_10-27-04.10.55.png')`,
          }}
          className="w-full h-full"
        ></div>
      </div>
    </div>
  );
}
export default Hero;
