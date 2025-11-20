import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ image, name, description, price, currency, id }) => {
  return (
    <Link to={`/product/${id}`} key={id} className="my-3 border border-gray-300 rounded cursor-pointer hover:scale-105 transition-transform duration-200 bg-gray-300">
      <img src={image} alt={name} className="w-60 object-cover mb-2 rounded-b-[50%] hover:rounded-lg" />
      <div className="text-gray-800 font-base text-center">
        <h3>{name}</h3>
        {/* <p className="text-gray-500">{description}</p> */}
        <p>{currency}{price}</p>
      </div>
    </Link>
  );
};

export default ProductItem;
