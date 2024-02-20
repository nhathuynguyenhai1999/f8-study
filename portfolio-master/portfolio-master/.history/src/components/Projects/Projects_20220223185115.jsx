import React from 'react';
import Slider from 'react-slick';
import projects from './data.js';

function Projects() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.2,
    slidesToScroll: 1,
  };
  return (
    <div className="pt-[50px] px-6 pb-[120px] ">
      <h1 className="title">My Project</h1>
      <p className="paragraph">Perfect solution for digital experience</p>
      <Slider {...settings} className="h-[220px] ">
        {projects.map((project) => (
          <div className="h-full relative pr-2 mt-20">
            <img
              src={project.img}
              alt=""
              className="rounded-2xl w-[280px] h-[210px] border border-gray-300"
            />
            <div className="absolute top-[-25%] left-1 text-green z-10 pr-2">
              <h4 className="text-20 font-semibold">{project.name}</h4>
              <a href={project.github} className="text-[12px] line-clamp-1">
                Github: {project.github}
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default Projects;
