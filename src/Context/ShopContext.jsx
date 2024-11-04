import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';


export const Shopcontext = createContext();

const ShopContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cart , setCart] = useState([]);
    const [order , setOrder] = useState([]);
    const [isLoggedIn,setIsloggedIn]=useState(false)
       
    const id = localStorage.getItem('id');
    const name=localStorage.getItem('name');
    useEffect(()=>{
        const id = localStorage.getItem('id');
      if(id){
        setIsloggedIn(true);
      }
      else{
        setIsloggedIn(false)
      }
    },[])
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
        
        let id=localStorage.getItem('id')
            axios.get(`http://localhost:3001/user/${id}`)
            .then((res) => {
                setCart(res.data.cart);
            })
            .catch((error) => console.log(error));
          
       
    },[])
   

    useEffect(() => {
        const id = localStorage.getItem("id"); 
        if(!id){
            return
        }
        axios.get(`http://localhost:3001/user/${id}`)
        .then((res) => {
            setOrder(res.data.order);
        })
        .catch((error) => console.log(error))
    },[])

    const addToCart =  (item) => {
        const id = localStorage.getItem("id"); 
        const findCart = cart.find((cartitem) => item.id === cartitem.id);
    
       
        
        if(findCart) {
            toast.success('Item added successfully🛒');
            return;
            
        }else{
            const updatedCart = [...cart , item];
           
            axios 
            .patch(`http://localhost:3001/user/${id}` , {cart : updatedCart})
            .then((res) => console.log('success'))
            .catch((error) => console.log(`error`))
            
            setCart(updatedCart)
        }
        
    }

    const  removeFromcart = (itemid) => {
        const id = localStorage.getItem("id"); 
        const removedata  =cart.filter((cartitem) => cartitem.id !== itemid);
        
        axios
        .patch(`http://localhost:3001/user/${id}`,{cart : removedata })
        .then((res) => console.log(`success`))
        .catch((error) => console.log(error))
        
        setCart(removedata)
    } 

    const incrementQuantity = (itemid) => {
        const id = localStorage.getItem("id");
        setCart((prevCart) => {
            const newCart = prevCart.map((item) => item.id === itemid ? {...item ,quantity: item.quantity + 1 } : item)
        //  console.log(newCart)

        axios
        .patch(`http://localhost:3001/user/${id}`,{cart : newCart })
        .then((res) => {
            console.log(res);
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

const addToOrder = (orderdata) => {
    const id = localStorage.getItem("id"); 
    
    const updatedorder = [...order , orderdata];

    axios .patch(`http://localhost:3001/user/${id}`,{order : updatedorder})
    .then((res) => console.log('success'))
    .catch((error) => console.log('error'))
}

    return (
        <Shopcontext.Provider value={{ products , cart , addToCart , removeFromcart , incrementQuantity , decrementQuantity , setCart , addToOrder,isLoggedIn,id,name,setIsloggedIn }}>
            {children}
        </Shopcontext.Provider>
    );
};

export default ShopContextProvider;
