import React from 'react';
import academics from './data.js';

function Academic() {
  return (
    <div className="p-[25px] bg-primary">
      {academics.map((academic) => (
        <div key={academic.id} className="flex gap-5 mb-4">
          <div className="mt-1 relative">
            <div className=" flex items-center justify-center w-[40px] h-[40px] border-2 border-black border-dashed rounded-full">
              <div className="w-[50%] h-[50%] bg-green rounded-full"></div>
              <div className="absolute h-[93%] bottom-[-20px] border-r-2 border-black border-dashed rounded-full"></div>
            </div>
          </div>
          <div>
            <h1 className="text-red text-[28px] font-semibold mb-4">
              {academic.title}
            </h1>
            <p className="paragraph text-[15px] mb-5">{academic.sub}</p>
            <h3 className="mb-2 text-green text-20 font-semibold">
              {academic.name}
            </h3>
            <p className="paragraph">{academic.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Academic;
