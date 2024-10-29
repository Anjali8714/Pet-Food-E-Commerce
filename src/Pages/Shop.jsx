import React, { useContext, useEffect } from 'react'
import { Shopcontext } from '../Context/ShopContext';

const Shop = () => {

const {products} = useContext(Shopcontext);

  return (
    <div>
      {products.length === 0 ?( <h1>It is a empty</h1>) : (
        <div>
        {products.map((product) => ( <div key={product.id}>
          <div>
            <img src={product.url} alt={product.title} className="w-60 h-50 rounded-t object-cover" />
            <p>Title : {product.title}</p>
            <p>Price : ₹{Number(product.price)}</p>
            {product.quantity === 0 && (<span className='text-red-500 py-1 px-3'>Out of stock</span>)}             
          </div>

        </div>
))}
</div>
)}
      
    </div>

  )
}

export default Shop