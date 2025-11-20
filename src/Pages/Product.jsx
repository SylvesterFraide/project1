import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const Product = () => {
  const { id } = useParams();
  const { product } = useContext(ShopContext);
  const [productDetails, setProductDetails] = useState(false);

  const fetchProductDetails = () => {
       product.find((user) => {
      if (user.id === parseInt(id)) {
        setProductDetails(user);
        console.log(user);
        // setImage(user.image[0]);
      }
    });

  };

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  return (
  <div>
    <h3>{productDetails.name}</h3>
  </div>
);
};

export default Product;