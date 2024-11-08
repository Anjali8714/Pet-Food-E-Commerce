import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlinePets } from "react-icons/md";
import { SiPetsathome } from "react-icons/si";
import { FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { IoMenuOutline } from "react-icons/io5";
import { toast } from 'react-toastify';
import { Shopcontext } from '../../Context/ShopContext';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const { setCart,isLoggedIn,id,name,setIsloggedIn } = useContext(Shopcontext);
  const navigate = useNavigate();

  const toggleDropdown = () => setDropdownOpen(prev => !prev);
  const toggleMenu = () => setMenu(prev => !prev);

  

  const handleLogout = () => {
    localStorage.removeItem('id');
    localStorage.removeItem('name');
    // setCart([]); 
    setIsloggedIn(false)
    
    toast.success('Logout successfully');

    navigate('/login');
  };

  return (
    <div className="bg-yellow-400">
      <div className="container flex flex-col md:flex-row justify-between items-center p-4">
        
        {/* Pet icons */}
        <div className="flex space-x-2 justify-start">
          <MdOutlinePets size={45} />
          <SiPetsathome size={75} />
        </div>

        {/* Center portion with navigation links */}
        <div className='flex flex-col md:flex-row items-center space-x-4 text-xl font-bold justify-center flex-grow'>
          <Link to='/'>Home</Link>
          <Link to='/shop'>Shop</Link>
          <Link to='/category'>Category</Link>
        </div>

        {/* Cart and Profile icons */}
        <div className='lg:flex flex-row hidden'>
          <div className='flex items-center'>
            <Link to='/cart'><FaCartShopping size={25} /></Link>
          </div>

          <div className='relative p-2 cursor-pointer' onClick={toggleDropdown}>
            <CgProfile size={25} />
            {isDropdownOpen && (
              <div className='absolute right-0 pt-4'>
                <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                  {isLoggedIn ? (
                    <>
                      <Link to='/order' className='hover:text-black'>Order</Link>
                      <button className='hover:text-black' onClick={handleLogout}>Logout</button>
                    </>
                  ) : (
                    <button onClick={() => navigate('/login')}>Login</button>
                  )}
                 
                </div>
              </div>
            )}
             {id&&name}
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className='md:hidden' onClick={toggleMenu}>
          <IoMenuOutline size={20} />
          {menu && (
            <div className='absolute right-0 pt-4'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                <Link to='/cart'>Cart</Link>
                {isLoggedIn ? (
                  <>
                    <Link to='/order' className='hover:text-black'>Order</Link>
                    <button className='hover:text-black' onClick={handleLogout}>Logout</button>
                  </>
                ) : (
                  <button onClick={() => navigate('/login')}>Login</button>
                )}
              </div>
            </div>
          )}
           {localStorage.getItem('id')&&(localStorage.getItem('name'))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
