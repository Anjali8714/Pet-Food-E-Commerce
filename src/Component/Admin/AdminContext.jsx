import React, { createContext, useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../../Context/ShopContext';
import axios from 'axios';
import toast from 'react-hot-toast';


export const Admincontext = createContext();

const AdminContext = ({children}) => {

const {products,setProducts} = useContext(Shopcontext) 
const [User , setUser] = useState([]) 
const [logged , setLogged] = useState(null)  

useEffect (() => {
    async function fetchUser(){
        try {
            const response = await axios.get(`http://localhost:3001/user`);
            setUser(response.data);
        }
        catch(error){
            console.log(error.message);
            
        }
    }
    fetchUser();
},[]);

const Block = async(id,status) =>{
    try{
        await axios.patch(`http://localhost:3001/user/${id}`,{status : !status})
        setUser(User.map((userlist) => (userlist.id === id ? {...userlist , status : !status} : {...userlist})))
    }
    catch(error){
        console.log(error.message);
        
    }
}


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
            await axios.delete(`http://localhost:3001/products/${id}`);
            setProducts((prevProducts) =>prevProducts.filter((p) => p.id !== id));
            toast.success('Delete successfully....')
        }
        catch(error){
            console.log(error.message);
            
        }
    }

    const addingData = async(newProduct) => {
        try{
            await axios.post(`http://localhost:3001/products`,newProduct)
            setProducts([...products,newProduct])
            toast.success('New product added successfully')
           // window.location.reload()
        }
        catch(error){
            console.log(error.message);
            
        }
    }
  return (
    <Admincontext.Provider value={ {editFormData , DeleteProduct , addingData , User ,Block , logged , setLogged}}>
        {children}
    </Admincontext.Provider>
  )
}

export default AdminContext
