import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlinePets } from "react-icons/md";
import { SiPetsathome } from "react-icons/si";
import { FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { IoMenuOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate()

  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

  const toggleMenu = () => {
    setMenu(prev => !prev);
  };

  return (

  //  Peticons

    <div className="bg-yellow-400 ">
      <div className="container flex flex-col md:flex-row justify-between items-center p-4">
        <div className="flex space-x-2 justify-start">
          <MdOutlinePets size={45} />
          <SiPetsathome size={75} />
        </div>


 {/* Center portion */}


        <div className='flex flex-col md:flex-row items-center space-x-4 text-xl font-bold justify-center flex-grow'>
          <Link to='/'>Home</Link>
          <Link to='shop'>Shop</Link>
          <Link to='category'>Category</Link>
        </div>

     {/* Cart icon and profile    */}


<div className='lg:flex flex-row hidden '>
        <div className='flex items-center'>
          <Link to='cart'><FaCartShopping size={25} /></Link>
          <p className=''>10</p>
        </div>

        <div className='relative p-2 cursor-pointer' onClick={toggleDropdown}>
          <CgProfile size={25} />
          {isDropdownOpen && (
            <div className='absolute right-0 pt-4'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                <Link to='/profile' className='cursor-pointer hover:text-black'>My Profile</Link>
                <Link to='/logout' className='cursor-pointer hover:text-black'>Logout</Link>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Menuicon */}

      <div className='md:hidden' onClick={toggleMenu}>
      <IoMenuOutline size={20}/>
      {menu && (
            <div className='absolute right-0 pt-4'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                <Link to='/cart'>Cart</Link>
                <Link to='/profile' className='cursor-pointer hover:text-black'>My Profile</Link>
                <Link to='/logout' className='cursor-pointer hover:text-black'>Logout</Link>
              </div>
            </div>
          )}
      </div>

{/*   Registration&Login */}

<div>
<button onClick={ () => navigate('/login')} className='font-bold p-4 text-xl'>Singin</button>
</div>

      </div>
    </div>
  );
}

export default Navbar;
