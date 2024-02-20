import React from 'react';
import projects from './data.js';
import './style.css';

function Projects() {
  return (
    <div className="pt-[50px] px-6 pb-[40px] ">
      <h1 className="title">My Project</h1>
      <p className="paragraph">Perfect solution for digital experience</p>
      <div id="container">
        <div id="flex-scroll">
          <div class="box"></div>
          <div class="box"></div>
          <div class="box"></div>

          <div class="box"></div>
          <div class="box"></div>
          <div class="box"></div>

          <div class="box"></div>
          <div class="box"></div>
          <div class="box"></div>

          <div class="box"></div>
          <div class="box"></div>
          <div class="box"></div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
