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
            backgroundImage: `url('https://www.google.com.vn/url?sa=i&url=https%3A%2F%2Fcybird-ikemen-viet-nam.fandom.com%2Fvi%2Fwiki%2FArthur_Conan_Doyle&psig=AOvVaw3ldZPhbYd-0L4f5iSRknss&ust=1645624936504000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJDNlOS8k_YCFQAAAAAdAAAAABAD')`,
          }}
          className="w-full h-full"
        ></div>
      </div>
    </div>
  );
}
export default Hero;
