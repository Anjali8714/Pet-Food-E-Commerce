import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlinePets } from "react-icons/md";
import { SiPetsathome } from "react-icons/si";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="bg-yellow-400">
      <div className="container flex justify-between items-center p-4">
        <div className="flex space-x-2 justify-start">
          <MdOutlinePets size={45} />
          <SiPetsathome size={75} />
        </div>

        <div className='flex items-center space-x-4 text-xl font-bold justify-center flex-grow'>
          <Link to='/'>Home</Link>
          <Link to='shop'>Shop</Link>
          <Link to='category'>Category</Link>
        </div>

        <div className='flex items-center'>
          <Link to='cart'><FaCartShopping size={20} /></Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
