import React from 'react';
import projects from './data.js';

function Projects() {
  return (
    <div className="pt-[50px] px-6 pb-[300px] relative">
      <h1 className="title">My Project</h1>
      <p className="paragraph">Perfect solution for digital experience</p>
      <div className="snap-x snap-align-none h-full w-full relative">
        {projects.map((project) => (
          <div className="w-[280px] h-[210px] h-full absolute pr-2 mt-20">
            <a href={project.link}>
              <img
                src={project.img}
                alt=""
                className="rounded-2xl border border-gray-300"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Projects;
