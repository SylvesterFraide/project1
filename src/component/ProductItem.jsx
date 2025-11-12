import React from "react";

const ProductItem = ({ image, name, description, price, currency, id }) => {
  return (
    <div key={id} className="my-5">
      <img src={image} alt={name} className="w-60 object-cover mb-2" />
      <h3 className="font-bold">{name}</h3>
      <p>{description}</p>
      <p className="font-bold">
        {currency}
        {price}
      </p>
    </div>
  );
};

export default ProductItem;
