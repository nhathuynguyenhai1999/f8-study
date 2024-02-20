import React from 'react';
import items from './data.js';

import { AiTwotoneStar } from 'react-icons/ai';

function Skills() {
  return (
    <div className="pt-[50px] px-7 pb-[40px] bg-white">
      <div className="mb-8">
        <h1 className="title">My Skills</h1>
        <p className="paragraph">
          Everything I had self-studied on my own in the past period.
        </p>
      </div>
      <div className="flex flex-col gap-3 relative">
        {items.map((item) => (
          <div className="p-5 border rounded-xl border-gray-400">
            <div
              style={{ backgroundColor: `${item.color}` }}
              className="absolute w-[60px] h-[60px] rounded-full flex justify-center items-center"
            >
              <AiTwotoneStar size="22px" color="#fff" />
            </div>
            <div className="ml-[76px]">
              <div className="text-tx-primary text-24 font-semibold line-clamp-1">
                {item.name}
              </div>
              <div className="paragraph line-clamp-1">{item.skill}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Skills;
