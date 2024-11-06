import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../../Context/ShopContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../Navbar/Navbar'

const Cart = () => {

const navigate = useNavigate()
const [cart,setCart]=useState([])
const {cart:updatedcart, removeFromcart , incrementQuantity , decrementQuantity} = useContext(Shopcontext)
const id=localStorage.getItem('id')
useEffect(() => {
 
  if(id){
      axios.get(`http://localhost:3001/user/${id}`)
      .then((res) => {
          setCart(res.data.cart);
      })
      .catch((error) => console.log(error));
    
  }
 
},[updatedcart])
  
  return (
    <div>
      <Navbar/>
    <div className="min-h-screen p-6 bg-gray-100">

      {cart.length === 0 ? (<h1 className="text-2xl font-semibold text-center text-gray-700">Your cart is empty</h1>
) : 
      (<div className="grid gap-6 lg:grid-cols-4">
        {cart.map((item) => (<div key={item.id} className="p-4 bg-white rounded-lg shadow-md">
          <div className="flex items-center">
            <img src={item.url} alt={item.title} className="w-32 h-32 mr-4 ounded-md object-cover" />
            <div className="flex flex-col">
            <p className="text-lg font-medium">Title : {item.title}</p>
            <p className="text-gray-600">Category : {item.category}</p>
            <p className="text-lg font-semibold text-blue-600">₹{Number(item.price)}</p>
            </div>
          </div>
          

          <div className="flex items-center space-x-4">
          <button onClick={() => incrementQuantity(item.id)} className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md bg-white hover:bg-gray-100 text-lg font-semibold text-gray-700">+</button>
          <span className="text-lg font-semibold">{item.quantity}</span>

          <button onClick={() => decrementQuantity(item.id)}
              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md bg-white hover:bg-gray-100 text-lg font-semibold text-gray-700">-</button>
                
          <button onClick={() => removeFromcart(item.id)} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-300">Remove</button>


          <div className="flex justify-between mb-4 border-t border-gray-200 pt-4 text-gray-800">
              <span className="text-xl font-bold">Total:</span>
              <span className="text-xl font-bold">
              {item.quantity*item.price}
              </span>
          </div>
        </div>
        </div>
      ))}
      <div className="border-t border-gray-300 pt-4 mt-6 flex justify-between items-center bg-gray-100">
            <p className="text-xl font-bold text-gray-800">
              Total: ₹{cart.reduce((acc, item) => acc + (item.quantity * item.price), 0)}
            </p>
            <button onClick={() => navigate ('/paymentpage')} className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300">
              Order
            </button>
          </div>
        </div>
       
    
        )}
      
    </div>
    </div>
  )
}

export default Cart 