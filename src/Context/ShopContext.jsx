import { createContext } from "react";
import { product } from "../component/Data";
import { heroImages } from "../component/Data";

export const ShopContext = createContext();

const ShopContextProvider = ( props ) => {

    const value = {
        product,
        heroImages
    };

  return (
    <ShopContext.Provider value={{ value }}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
