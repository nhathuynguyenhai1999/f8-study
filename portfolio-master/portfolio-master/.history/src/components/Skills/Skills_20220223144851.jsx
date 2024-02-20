import React from 'react';
import items from './data.js';

import { HiOutlineDesktopComputer } from 'react-icons/hi';

function Skills() {
  return (
    <div className="pt-[50px] px-7 pb-[40px] bg-white">
      <div className="mb-8">
        <h1 className="text-[40px] font-semibold">What Do I Help?</h1>
        <p className="text-16 text-tx-primary font-medium">
          I will help you with finding a solution and solve your problems. We
          use process design to create digital products. Besids that also help
          their business.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <div className="flex items-center p-5 border rounded-xl border-gray-400">
            <div className="bg-green w-[60px] h-[60px] rounded-full flex justify-center items-center">
              <HiOutlineDesktopComputer size="22px" color="#fff" />
            </div>
            <div className="ml-4">
              <div className="text-tx-primary text-24 font-semibold line-clamp-1">
                {item.name}
              </div>
              <p className="text-16 text-tx-primary font-medium">
                {item.skill}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Skills;
