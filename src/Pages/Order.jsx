import React, { useContext } from 'react'
import { Shopcontext } from '../Context/ShopContext'


const Order = () => {
  const {products} = useContext(Shopcontext)

  return (
    <div className='border-t pt-16'>
     <div className='text-2xl'>
      <h4 >My Order</h4>
     </div>
     <div>
      {
        products.map((item , index) => (
          <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
            <div className='flex items-start gap-6 text-sm'>
              <img src={products.url} alt={products.title} className='w-16 sm:w-20'/>
            </div>
          </div>
        )
      )
      }
     </div>
    </div>
  )
}

export default Order
