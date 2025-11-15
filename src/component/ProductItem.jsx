import React from "react";

const ProductItem = ({ image, name, description, price, currency, id }) => {
  return (
    <div key={id} className="my-5">
      <img src={image} alt={name} className="w-60 object-cover mb-2" />
      <div className="text-gray-800 font-base text-center">
        <h3>{name}</h3>
        {/* <p className="text-gray-500">{description}</p> */}
        <p>{currency}{price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
