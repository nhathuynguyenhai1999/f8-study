import React from 'react';

function Academic() {
  return (
    <div className="p-[25px] bg-primary">
      <div className="flex gap-5 mb-4">
        <div className="mt-1 relative">
          <div className=" flex items-center justify-center w-[40px] h-[40px] border-2 border-black border-dashed rounded-full">
            <div className="w-[50%] h-[50%] bg-green rounded-full"></div>
            <div className="absolute h-[90%] bottom-[-20px] border-r-2 border-black border-dashed rounded-full"></div>
          </div>
        </div>
        <div>
          <h1 className="text-red text-[28px] font-semibold mb-4">
            Da Nang University of Economics
          </h1>
          <p className="paragraph text-[15px] mb-5">
            Team-worked in a lot of projects for 4 years, with skills such as
            planning, presentation, requirement analyzing, reporting, time
            allocation, leadership.
          </p>
          <h3 className="mb-2 text-red text-20 font-semibold">
            Bachelor of Business Administration
          </h3>
          <p className="paragraph">Aug 2017 - Apr 2021</p>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="mt-1 relative">
          <div className=" flex items-center justify-center w-[40px] h-[40px] border-2 border-black border-dashed rounded-full">
            <div className="w-[50%] h-[50%] bg-red rounded-full"></div>
            <div className="absolute h-[83%] bottom-0 border-r-2 border-black border-dashed rounded-full"></div>
          </div>
        </div>
        <div>
          <h1 className="text-tx-primary text-32 font-semibold mb-4">
            Visual Design
          </h1>
          <p className="paragraph mb-5">
            A visual design for a variety of platforms, which may include
            internet and intranet sites, game, movies.
          </p>
          <h3 className="mb-2 text-tx-primary text-20 font-semibold">
            Self-Employed, Brisbane
          </h3>
          <p className="paragraph">Sep 2016 - Aug 2014</p>
        </div>
      </div>
    </div>
  );
}
export default Academic;
