import React from 'react';
import { RiMenu5Fill } from 'react-icons/ri';

function Header() {
  return (
    <div className="flex justify-between">
      <h1>Bin</h1>
      <div>
        <div className="">
          <RiMenu5Fill size={'24px'} color="#000" />
        </div>
      </div>
    </div>
  );
}
export default Header;
