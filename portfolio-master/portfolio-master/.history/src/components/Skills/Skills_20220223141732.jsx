import React from 'react';
import items from './data.js';

import { HiOutlineDesktopComputer } from 'react-icons/hi';

function Skills() {
  return (
    <div className="pt-[50px] px-7 pb-[40px] bg-white">
      <div className="mb-5">
        <h1 className="text-[40px] font-semibold">What Do I Help?</h1>
        <p className="text-16 text-tx-primary font-medium">
          I will help you with finding a solution and solve your problems. We
          use process design to create digital products. Besids that also help
          their business.
        </p>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between p-5">
          <div className="bg-green w-[50px] h-[50px] rounded-full ">
            <HiOutlineDesktopComputer size="20px" />
          </div>
          <div>
            <h2></h2>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
