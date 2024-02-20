import React from 'react';
import projects from './data.js';

function Projects() {
  return (
    <div className="pt-[50px] px-6 pb-[350px] relative">
      <h1 className="title">My Project</h1>
      <p className="paragraph">Perfect solution for digital experience</p>
      <div className="flex snap-x overflow-x-auto absolute top-[30%] left-[5%] w-[100%]">
        <div className="flex items-center justify-center ">
          {projects.map((project) => (
            <div className="w-[80vw] h-[210px] relative pr-2 mt-20">
              <a href={project.link}>
                <img
                  src={project.img}
                  alt=""
                  className="rounded-2xl w-[280px] h-[210px] border border-gray-300"
                />
              </a>
              <div className="absolute top-[-25%] left-1 text-green z-10 pr-2">
                <h4 className="text-20 font-semibold">{project.name}</h4>
                <a href={project.github} className="text-[12px] line-clamp-1">
                  Github: {project.github}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Projects;
