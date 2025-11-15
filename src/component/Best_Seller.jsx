import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const Best_Seller = () => {
  const { product, currency } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestSell = product.filter((item) => item.bestSeller);
    setBestSeller(bestSell.slice(13, 18));
  }, []);

  return (
    <div className="w-[80vw] mx-auto bg-gray-100">
      <Title text1={"Best"} text2={"Seller"} />
      <p className="mb-4 mt-[-20px] text-base text-center text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
        blanditiis. Repudiandae id dolore eius nobis, totam minima? Non aliquid,
        nobis cum quibusdam quasi adipisci tempore laboriosam soluta, deserunt
        odit ipsa?
      </p>
      <div className="grid justify-items-center grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 ">
        {bestSeller.map((item) => {
          if (item.bestSeller === "true") {
            return (
              <div key={item.id}>
                <ProductItem
                  image={item.image[0]}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  currency={currency}
                  id={item.id}
                />
              </div>
            );
          } else {
            return '';
          }
        })}
      </div>
    </div>
  );
};

export default Best_Seller;
