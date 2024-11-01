import React, { useContext, useState,useEffect} from 'react'
import  { Shopcontext } from '../Context/ShopContext';
import { CiSearch } from "react-icons/ci";




const Shop = () => {

const [search , setSearch]  = useState('');
const [filtered , setFiltered] = useState([]);

const {products , addToCart} = useContext(Shopcontext);


 

const searchBarhandle = (e) => {
  setSearch(e.target.value)
}
useEffect(() => {
  const filterProducts = () => {
      let filtered = products;


      if (search) {
          filtered = products.filter(
              (product) =>
                  product.title.toLowerCase().includes(search.toLowerCase() )|| product.category.toLowerCase().includes(search.toLowerCase())
          );
      }

      setFiltered(filtered);
  };

  filterProducts();
}, [ search, products]);

  return (
  


    <div className='p-4'>
    <div className="flex items-center justify-center bg-white border border-gray-300 rounded-md p-2 w-60 h-10 mx-auto">
  <CiSearch className="text-gray-500 text-xl mr-2" />
  <input type="text" placeholder="Search..." className="w-full outline-none text-gray-700"  onChange={searchBarhandle}/>
</div>

<div className='p-4'> 


      {products.length === 0 ?( <h1 className="text-2xl font-semibold text-center text-gray-700">It is a empty</h1>) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
        {filtered.map((product) => ( <div key={product.id}>
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

      
    </div>

  )
}
export default Shop