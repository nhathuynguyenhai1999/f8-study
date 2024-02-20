import React from 'react';
import Slider from 'react-slick';
import img from '../../access/633027480805f012bf6a0b197cf14a94.webp';

function Projects() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
  };
  return (
    <div className="pt-[50px] px-6 pb-[500px] ">
      <h1 className="title">My Project</h1>
      <p className="paragraph mb-5">Perfect solution for digital experience</p>
      <Slider {...settings}>
        <div className="w-[80%] h-full rounded-2xl overflow-hidden relative pr-5">
          <img src={img} alt="" />
          <div className="absolute top-5 left-5 text-green z-10">
            <h4 className="text-20 font-semibold">App Design</h4>
            <p className="text-[12px]">Food Delivery App</p>
          </div>
        </div>
        <div className="w-[80%] h-[210px] rounded-2xl overflow-hidden relative pr-5">
          <img src={img} alt="" />
          <div className="absolute top-5 left-5 text-green z-10">
            <h4 className="text-20 font-semibold">App Design</h4>
            <p className="text-[12px]">Food Delivery App</p>
          </div>
        </div>
        <div className="w-[80%] h-[210px] rounded-2xl overflow-hidden relative pr-5">
          <img src={img} alt="" />
          <div className="absolute top-5 left-5 text-green z-10">
            <h4 className="text-20 font-semibold">App Design</h4>
            <p className="text-[12px]">Food Delivery App</p>
          </div>
        </div>
        <div className="w-[80%] h-[210px] rounded-2xl overflow-hidden relative pr-5">
          <img src={img} alt="" />
          <div className="absolute top-5 left-5 text-green z-10">
            <h4 className="text-20 font-semibold">App Design</h4>
            <p className="text-[12px]">Food Delivery App</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}
export default Projects;
