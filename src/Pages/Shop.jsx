import React, { useContext} from 'react'
import  { Shopcontext } from '../Context/ShopContext';

const Shop = () => {

const {products , addToCart} = useContext(Shopcontext);


  return (
    <div className='p-4'>
      {products.length === 0 ?( <h1>It is a empty</h1>) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
        {products.map((product) => ( <div key={product.id}>
          <div className='border border-gray-200 rounded-lg p-4'>
            <img src={product.url} alt={product.title} className="w-full h-40 rounded-t object-cover mb-2" />
            <p className="font-semibold">Title : {product.title}</p>
            <p>Price : ₹{Number(product.price)}</p>
            {product.quantity === 0 && (<span className='text-red-500 py-1 px-3 inline-block mt-2'>Out of stock</span>)}     

          </div>
          <button onClick={()=>addToCart(product)} className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Add to Cart</button>
        </div>
))}
</div>
)}
      
    </div>

  )
}

export default Shop