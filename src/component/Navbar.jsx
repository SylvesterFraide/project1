import React from "react";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const Navbar = () => {
  return (
    <div className="">
      <h2 className="text-2xl font-semibold">Logo</h2>

      <div className="">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/collection">Collection</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      <div className="">
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
