import React from 'react';
import img from '../../access/633027480805f012bf6a0b197cf14a94.webp';

function Projects() {
  return (
    <div className="pt-[50px] pl-6 pb-[500px]">
      <h1 className="title">My Project</h1>
      <p className="paragraph mb-5">Perfect solution for digital experience</p>
      <div className="flex">
        <div className="w-[280px] h-[210px] rounded-2xl overflow-hidden relative">
          <img src={img} alt="" />
          <div className="absolute">
            <h4 className="">App Design</h4>
            <p className="">Food Delivery App</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
