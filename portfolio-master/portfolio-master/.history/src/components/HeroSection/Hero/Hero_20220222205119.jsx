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
        <div className="w-full h-full">
          <img
            className="w-full h-full"
            src="../../../access/691df42842b5d96dc70a968e8850f180.png"
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
}
export default Hero;
