import React from 'react';
import { RiMenu5Fill } from 'react-icons/ri';

function Header() {
  return (
    <div className="flex justify-between items-center pb-5 mb-8 border-b border-[shadow-xl] ">
      <h1 className="font-shizuru bg-green text-32">Binzxje</h1>
      <div className=" h-full ">
        <div className="bg-white p-2 rounded-full shadow-xl">
          <RiMenu5Fill size={'24px'} color="#000" />
        </div>
      </div>
    </div>
  );
}
export default Header;
