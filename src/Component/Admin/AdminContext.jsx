import React, { createContext, useContext } from 'react'
import { Shopcontext } from '../../Context/ShopContext';
import axios from 'axios';
import toast from 'react-hot-toast';


export const Admincontext = createContext();

const AdminContext = ({children}) => {

const {products,setProducts} = useContext(Shopcontext)    

    const editFormData=async(product)=>{
        try{
            console.log(product);
            
            const id =product.id
             const response=await axios.put(`http://localhost:3001/products/${id}`,product)
             setProducts((prevProducts) =>
                prevProducts.map((item) => (item.id === id ? product : item))
              );
             console.log(product)
             toast.success("product updated successfully")
        }
        catch(error){
            console.log(error.message);
        }
    }

    const DeleteProduct = async(id) => {
        try{
            await axios.delete(`http://localhost:3001/products/${id}`)
            const updatedValue = products.filter((p) => p.id !== id)
            setProducts(updatedValue)
            toast.success('Delete successfully....')
        }
        catch(error){
            console.log(error.message);
            
        }
    }


  return (
    <Admincontext.Provider value={ {editFormData , DeleteProduct}}>
        {children}
    </Admincontext.Provider>
  )
}

export default AdminContext
