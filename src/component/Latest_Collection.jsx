import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { ShopContext } from "../Context/ShopContext";
import ProductItem from "./ProductItem";

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

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-2">
        {sliceProduct.map((item) => (
          <ProductItem
            key={item.id}
            image={item.image[0]}
            name={item.name}
            description={item.description}
            price={item.price}
            currency={currency}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Latest_Collection;
