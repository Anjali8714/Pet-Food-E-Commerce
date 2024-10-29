import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Shopcontext = createContext();

const ShopContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
   
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

    return (
        <Shopcontext.Provider value={{ products, delivery_fee }}>
            {children}
        </Shopcontext.Provider>
    );
};

export default ShopContextProvider;
