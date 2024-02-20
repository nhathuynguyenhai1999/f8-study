import React from 'react';
import { RiMenu5Fill } from 'react-icons/ri';

function Header() {
  return (
    <div className="flex justify-between">
      <h1>Bin</h1>
      <div>
        <img src={RiMenu5Fill} alt="" />
      </div>
    </div>
  );
}
export default Header;
