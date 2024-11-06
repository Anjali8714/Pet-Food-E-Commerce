import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { Shopcontext } from "../../Context/ShopContext";
import toast from "react-hot-toast";
import Navbar from '../Navbar/Navbar'

const FilteredProduct = () => {
  
  const [datas, setDatas] = useState([]);
  const [category, setCategory] = useState("All");
  const {  addToCart } = useContext(Shopcontext);

  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((res) => setDatas(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
 
  const filteredData = category === "All" ? datas : datas.filter(item => item.category.toLowerCase() === category.toLowerCase());

   

  return (
    <div>
      <Navbar/>
    
    <div className="p-4 ">
      
      <div className="mb-4">
        <label htmlFor="category" className="mr-2"> Filter by category: </label>
        <select id="category" value={category} onChange={handleCategoryChange} className="p-2 border border-gray-300 rounded" >

          <option value="All">All</option>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
          
          
        </select>
      </div>
      <ul className=" pl-5">
        {filteredData.map((item) => (
          <li key={item.id} className="mb-4 p-5 border rounded shadow-lg">
            <h3 className="font-bold">{item.title}</h3>
            <img src={item.url} alt={item.title} className="w-32 h-32 object-cover mb-2" />
            <p>{item.description}</p>
            <p className="text-black font-bold p-5">₹{item.price}</p>
            <button className="w-36 bg-green-500 text-white py-2 px-4 rounded"  onClick={() => { addToCart(item);
             toast.success("Item added to cart 🛒");
              }}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default FilteredProduct;