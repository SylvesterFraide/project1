import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("Home");

  return (
    <div className="text-gray-900 flex items-center justify-between py-4">
      <h2 className="text-2xl font-semibold">Logo</h2>

      <div className="flex gap-4">
        <NavLink to="/" onClick={() => setActiveMenu("Home")}>
          <p> Home</p>
          <hr
            className={activeMenu === "Home" ? "w-9 h-[1.5px] bg-gray-700" : "hidden"}
          />
        </NavLink>
        <NavLink to="/collection" onClick={() => setActiveMenu("Collection")}>
          <p>Collection</p>
          <hr
            className={
              activeMenu === "Collection" ? "w-9 h-[1.5px] bg-gray-700" : "hidden"
            }
          />
        </NavLink>
        <NavLink to="/about" onClick={() => setActiveMenu("About")}>
          <p>About</p>
          <hr
            className={
              activeMenu === "About" ? "w-9 h-[1.5px] bg-gray-700" : "hidden"
            }
          />
        </NavLink>
        <NavLink to="/contact" onClick={() => setActiveMenu("Contact")}>
          <p>Contact </p>
          <hr
            className={
              activeMenu === "Contact" ? "w-9 h-[1.5px] bg-gray-700" : "hidden"
            }
          />
        </NavLink>
      </div>

      <div className="flex gap-4">
        <NavLink to="/search">
          <SearchIcon />
        </NavLink>
        <NavLink to="/cart">
          <ShoppingBasketIcon />
        </NavLink>
        <NavLink to="/">Login</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
