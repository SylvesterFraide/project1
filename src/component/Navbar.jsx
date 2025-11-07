import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const Navbar = ({Logo, Home, Collection, About, Contact, SignIn}) => {
  const [activeMenu, setActiveMenu] = useState("Home");

  return (
    <div className="flex items-center justify-between py-4 px-6">
      <h2 className="text-2xl font-semibold">{Logo}</h2>

      <div className="flex space-x-8 font-semibold text-gray-500">
        <NavLink to="/" onClick={() => setActiveMenu("Home")}>
          <p>{Home}</p>
          <hr
            className={
              activeMenu === "Home" ? "w-9 h-[1.5px] bg-gray-700" : "hidden"
            }
          />
        </NavLink>
        <NavLink to="/collection" onClick={() => setActiveMenu("Collection")}>
          <p>{Collection}</p>
          <hr
            className={
              activeMenu === "Collection"
                ? "w-9 h-[1.5px] bg-gray-700"
                : "hidden"
            }
          />
        </NavLink>
        <NavLink to="/about" onClick={() => setActiveMenu("About")}>
          <p>{About}</p>
          <hr
            className={
              activeMenu === "About" ? "w-9 h-[1.5px] bg-gray-700" : "hidden"
            }
          />
        </NavLink>
        <NavLink to="/contact" onClick={() => setActiveMenu("Contact")}>
          <p>{Contact}</p>
          <hr
            className={
              activeMenu === "Contact" ? "w-9 h-[1.5px] bg-gray-700" : "hidden"
            }
          />
        </NavLink>
      </div>

      <div className="flex items-center space-x-4 text-gray-500 font-semibold">
        <NavLink to="/search">
          <SearchIcon />
        </NavLink>
        <NavLink to="/cart">
          <ShoppingBasketIcon />
        </NavLink>
        <NavLink to="/" className="bg-gray-200 py-1 px-4 rounded-full">
          {SignIn}
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
