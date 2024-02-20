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
            backgroundImage: `url('https://images.unsplash.com/photo-1644982654072-0b42e6636821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')`,
          }}
          className="w-full h-full"
        ></div>
      </div>
    </div>
  );
}
export default Hero;
