import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';


export const Shopcontext = createContext();

const ShopContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cart , setCart] = useState([]);

       

    useEffect(() => { 
        async function fetchData() {
            try {
                const response = await axios.get(`http://localhost:3001/products`);
                setProducts(response.data);
                
                
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchData();
    }, []); 

    useEffect(() => {
        const id = localStorage.getItem("id");
        axios.get(`http://localhost:3001/user/${id}`)
        .then((res) => {
            setCart(res.data.cart);
        })
        .catch((error) => console.log(error));
    })

    const addToCart =  (item) => {
        const id = localStorage.getItem("id"); 
        const findCart = cart.find((cartitem) => item.id === cartitem.id);
    
        <Toaster/>
        toast.success('Item added successfully🛒');
        if(findCart) {
            
            return;
            
        }else{
            const updatedCart = [...cart , item];
           

            axios
             .patch(`http://localhost:3001/user/${id}`,{cart : updatedCart})
             .then((res) => console.log(`success`))
             .catch((error) => console.log(`error`))
             
             
        }
    }

    const  removeFromcart = (itemid) => {
        const id = localStorage.getItem("id"); 
        const removedata  =cart.filter((cartitem) => cartitem.id !== itemid);
        axios
        .patch(`http://localhost:3001/user/${id}`,{cart : removedata })
        .then((res) => console.log(`success`))
        .catch((error) => console.log(error))
        
        
    } 

    const incrementQantity = (itemid) => {
        const id = localStorage.getItem("id");
        setCart((prevCart) => {
            const newCart = prevCart.map((item) => item.id === itemid ? {...item ,quantity: item.quantity + 1 } : item)
        

        axios
        .patch(`http://localhost:3001/user/${id}`,{cart : newCart })
        .then((res) => {
            console.log(`success`);
        })
        .catch((error) => {
            console.log('Error updating cart : ', error);
        })
        return newCart
    })
}

    const decrementQuantity = (itemid) => {
        const id = localStorage.getItem("id");
        setCart ((prevCart) =>{
             
            const newCart = prevCart.map ((item) => item.id === itemid ? {...item , quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity} : item);
        axios 
        .patch(`http://localhost:3001/user/${id}`,{cart : newCart })
    
    .then((res) => {
        console.log("Cart updated successfully");
        
    })
    .catch((error) => {
        console.log("Error updating cart :" , error);
        
    })
    return newCart;
})
}


    return (
        <Shopcontext.Provider value={{ products , cart , addToCart , removeFromcart , incrementQantity , decrementQuantity}}>
            {children}
        </Shopcontext.Provider>
    );
};

export default ShopContextProvider;
