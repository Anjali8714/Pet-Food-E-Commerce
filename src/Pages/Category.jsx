import React from 'react'
import { FaSearch } from "react-icons/fa";
const Category = () => {
  return (
    <div className='bg-black'>
      <div className="flex items-center p-3 ">
            <div className="relative w-full max-w-md">
            <input type="text"  placeholder='Search here' className='w-min pl-10 p-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-400'/>
            <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />

            </div>
          </div>
      <p className='text-white p-2'> Category page  </p>  
      
    </div>
  )
}

export default Category
