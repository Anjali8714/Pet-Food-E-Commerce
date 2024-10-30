import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Shopcontext = createContext();

const ShopContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cart , setCart] = useState([]);

    const delivery_fee = 10;

    useEffect(() => { 
        async function fetchData() {
            try {
                const response = await axios.get('http://localhost:3001/products');
                setProducts(response.data);
                console.log(products);
                
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchData();
    }, []); 

    useEffect(() => {
        axios.get('http://localhost:3001/user/${id}')
        .then((res) => {
            setCart(res.data.cart);
        })
        .catch((error) => console.log(error));
    })

    const addToCart = (item) => {
        const findCart = cart.find((cartitem) => item.id === cartitem.id);
        if(findCart) {
            //alert('item already added')
            return;
        }else{
            const updateCart = [...cart , item];
        }
    }


    return (
        <Shopcontext.Provider value={{ products, delivery_fee,cart }}>
            {children}
        </Shopcontext.Provider>
    );
};

export default ShopContextProvider;
