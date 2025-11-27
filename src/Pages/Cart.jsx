import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';


const Cart = () => {
    const {cartItems, product, currency} = useContext(ShopContext);
    
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        const temperedData = [];
        for(const items in cartItems){
            for(const item in cartItems[items]){
                if(cartItems[items][item] > 0) {
                     temperedData.push({
                        id: items,
                        size: item,
                        quantity: cartItems[items][item],
                     })
                }
            }
        }
        setCartData(temperedData);
    }, [cartItems]);

  return (
    <div>
      <h1>Your Cart</h1>
      {/* Cart items will be displayed here */}
    </div>
  );
};

export default Cart;
