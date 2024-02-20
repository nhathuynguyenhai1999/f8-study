import React from 'react';
import projects from './data.js';

function Projects() {
  return (
    <div
      id="projects"
      className="pt-[50px] px-6 pb-[330px] md:pt-[100px] md:pb-[600px] relative overflow-hidden"
    >
      <h1 className="title md:mb-4 md:text-center md:text-6xl">My Projects</h1>
      <p className="paragraph pb-3 md:text-center md:text-20">
        Some individual projects that I've done during my studies
      </p>
      <div className="flex overflow-x-scroll no-scrollbar md:not:no-scrollbar absolute top-[30%] left-[5%] w-[100%]">
        <div className="flex items-center justify-center gap-4">
          {projects.map((project) => (
            <div className="md:w-[640px] md:h-[420px] w-[70vw] h-[210px] relative mt-20 ">
              <a href={project.link}>
                <img
                  src={project.img}
                  alt=""
                  className=" w-full h-full border-gradient"
                />
              </a>
              <div className="absolute md:top-[-18%] top-[-25%] left-1 text-green z-10 pr-2">
                <h4 className="text-20 font-semibold md:text-26">
                  {project.name}
                </h4>
                <a
                  href={project.github}
                  className="text-[12px] md:text-16 line-clamp-1"
                >
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
