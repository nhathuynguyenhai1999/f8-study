import React from 'react';

function Academic() {
  return (
    <div className="p-[25px] bg-primary">
      <div className="flex gap-5">
        <div>
          <div className="flex items-center justify-center w-[30px] h-[30px] border border-black border-dashed rounded-full">
            <div className="w-[50%] h-[50%] bg-green rounded-full"></div>
          </div>
        </div>
        <div>
          <h1 className-'text-tx-primary text-24 font-semibold'>Visual Design</h1>
          <p className="paragraph">
            A visual design for a variety of platforms, which may include
            internet and intranet sites, game, movies.
          </p>
          <h3>Self-Employed, Brisbane</h3>
          <p className="paragraph">Sep 2016 - Aug 2014</p>
        </div>
      </div>
    </div>
  );
}
export default Academic;
