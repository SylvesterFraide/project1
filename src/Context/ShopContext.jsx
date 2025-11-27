import { createContext, useState } from "react";
import { product } from "../component/Product";

export const ShopContext = createContext();
const currency = '$';

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (id, Size) => {

    const cartData = structuredClone(cartItems)

    if(cartItems[id]) {
      if(cartItems[id][Size]){
        cartData[id][Size] += 1;
      } else {
        cartData[id][Size] = 1
      }
    } else {
      cartData[id] = {}
      cartItems[id][Size] = 1
    }

    setCartItems(cartData);

  } 

  const contextValue = {
    product,
    currency,
    addToCart,
    cartItems
  }

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;