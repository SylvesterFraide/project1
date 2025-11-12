import { createContext } from "react";
import { product } from "../component/Product";

export const ShopContext = createContext();
const currency = '$';

const ShopContextProvider = (props) => {
  const contextValue = {
    product,
    currency
  }

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;