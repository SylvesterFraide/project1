import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { ShopContext } from "../Context/ShopContext";

const Latest_Collection = () => {
  const { product, currency } = useContext(ShopContext);
  const [sliceProduct, setSliceProduct] = useState([]);

  useEffect(() => {
    setSliceProduct(product.slice(0, 10));
  }, []);

  return (
    <div className="w-[80vw] mx-auto mb-8">
      <Title text1="Latest" text2="Collection" />
      <p className="text-center text-gray-600">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam enim
        architecto exercitationem animi veniam id magni debitis hic excepturi
        eaque magnam voluptatibus, laboriosam nobis dolorum voluptatum alias
        eveniet deleniti tempore!
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {sliceProduct.map((item) => (
          <div key={item.id} className="">
            <img src={item.image[0]} alt={item.name} className="w-60 object-cover mb-2" />
            <h3 className="font-bold">{item.name}</h3>
            <p>{item.description}</p>
            <p className="font-bold">{currency}{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latest_Collection;
