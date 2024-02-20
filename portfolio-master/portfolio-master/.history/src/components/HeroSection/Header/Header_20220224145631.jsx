import React from 'react';
import { RiMenu5Fill } from 'react-icons/ri';

function Header() {
  return (
    <div className="flex justify-between items-center pb-2 mb-2 border-b border-[shadow-xl] ">
      <h1 className="font-logo text-green text-48">Binzxje</h1>
      <div className=" h-full ">
        <div className="bg-white p-2 rounded-full shadow-xl relative">
          <RiMenu5Fill size={'24px'} color="#000" />
          <ul className="absolute">
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Header;
