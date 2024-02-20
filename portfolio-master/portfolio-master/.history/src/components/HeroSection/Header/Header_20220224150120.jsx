import React, { useState } from 'react';
import { RiMenu5Fill } from 'react-icons/ri';
import { MdOutlineClose } from 'react-icons/md';

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="flex justify-between items-center pb-2 mb-2 border-b border-[shadow-xl] ">
      <h1 className="font-logo text-green text-48">Binzxje</h1>
      <div className=" h-full ">
        <div className="bg-white p-2 rounded-full shadow-xl relative">
          <ul className="md:flex md:gap-10 ml-auto text-16 font-semibold">
            {openMenu ? (
              <MdOutlineClose
                size={'24px'}
                className="cursor-pointer"
                onClick={handleMenu}
              />
            ) : (
              <RiMenu5Fill size={'24px'} color="#000" onClick={handleMenu} />
            )}
            {openMenu && (
              <div className="z-10 absolute right-8 bg-white p-8 text-center text-black text-13 ">
                <li className="cursor-pointer">Feature</li>
                <li className="cursor-pointer">Menu</li>
                <li className="cursor-pointer">Our Store</li>
                <li className="cursor-pointer">Contact</li>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Header;
