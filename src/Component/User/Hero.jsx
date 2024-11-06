import React from 'react'
import { useNavigate } from 'react-router-dom'


const Hero = () => {
  

  const navigate = useNavigate()

  return (
    <div className='flex flex-col md:flex-row border border-gray-400'>
      
      {/* Hero left side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-10'>
        <div className='text-[#414141]'>
            <div className='flex items-center gap-2'>
                <p className='w-8 md:w-11 h-[2px] bg-[#414141]' ></p>
                <p className='p-4 font-medium text-sm md:text-base text-purple-500'>OUR BESTSELLERS</p>
            </div>
            <div className='flex items-center gap-2 '>
            <button onClick={() => navigate('/shop')} className='w-95 pl-30 bg-slate-200 p-3 rounded-full border border-gray-300 focus:outline-none focus:border-blue-400'>Shop Now</button>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]' ></p>
            </div>
        </div>

      </div>
      {/* Hero Right side */}

    <div className='flex justify-center md:justify-end'>
        <img src="https://static.vecteezy.com/system/resources/previews/006/470/722/original/pet-shop-logo-design-template-modern-animal-icon-label-for-store-veterinary-clinic-hospital-shelter-business-services-flat-illustration-background-with-dog-cat-and-horse-free-vector.jpg" className='w-2/3' alt="error" />
   
    </div>
    </div>
  )
}

export default Hero
