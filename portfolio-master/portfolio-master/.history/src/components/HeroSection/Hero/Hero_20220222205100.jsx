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
            src="https://www.google.com.vn/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fphamcakyungsoo%2Ft%25E1%25BB%2595ng-c%25C3%25B4ng-uy-v%25C5%25A9%2F&psig=AOvVaw2r-qNNme12soZglOJhqwWO&ust=1645623781780000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCID-uZi6k_YCFQAAAAAdAAAAABAD"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default Hero;
