import React from 'react';
import { RiMenu5Fill } from 'react-icons/ri';

function Header() {
  return (
    <div className="flex justify-between items-center py-4 px-4">
      <h1 className="text-32">Bin</h1>
      <div className=" h-full">
        <div className="bg-white h-full">
          <RiMenu5Fill size={'24px'} color="#000" />
        </div>
      </div>
    </div>
  );
}
export default Header;
