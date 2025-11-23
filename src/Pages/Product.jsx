import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import GradeIcon from "@mui/icons-material/Grade";
import { button } from "framer-motion/client";

const Product = () => {
  const { id } = useParams();
  const { product, currency } = useContext(ShopContext);
  const [productDetails, setProductDetails] = useState(false);
  const [image, setImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");

  const fetchProductDetails = () => {
    product.find((user) => {
      if (user.id === parseInt(id)) {
        setProductDetails(user);
        setImage(user.image[0]);
      }
    });
  };

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row h-[90vh">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 w-full sm:w-[50vw] bg-gray-100 p-6">
          <div className="flex gap-6 sm:gap-2 flex-row sm:flex-col">
            {productDetails?.image?.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setImage(img)}
                alt={productDetails.name}
                className="cursor-pointer w-10 sm:w-20 h-15 sm:h-30"
              />
            ))}
          </div>

          <div className="flex">
            <img
              src={image}
              alt={productDetails.name}
              className="h-70 sm:h-100 w-70"
            />
          </div>
        </div>

        <div className="p-4 w-full sm:w-[50vw] bg-gray-200">
          <div className="flex gap-10 sm:gap-19 items-center">
            <h2 className=" text-md sm:text-lg font-bold text-gray-800 italic">
              {productDetails.name}
            </h2>
            <p className="text-gray-600 font-semibold text-md sm:text-lg my-2">
              {currency} {productDetails.price}
            </p>
          </div>

          <div className="text-yellow-600">
            <GradeIcon />
            <GradeIcon />
            <GradeIcon />
            <GradeIcon className="text-yellow-500" />
            <GradeIcon className="text-yellow-500" />
          </div>
          <p className="text-gray-600 text-sm sm:text-md my-4">
            {productDetails.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-20 text-gray-600 text-sm sm:text-md">
            <p>{productDetails.category}</p>
            <p>{productDetails.subcategory}</p>
          </div>

          <div className="my-2 sm:my-4 flex flex-col">
            <p className="text-gray-600 font-semibold italic text-md sm:text-lg">
              Select Size:
            </p>
            <div className="flex flex-wrap">
              {productDetails?.Size?.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSize(item)}
                  className={`bg-white border rounded text-gray-900 border-gray-400 my-4 cursor-pointer py-1 px-5 m-1 ${
                    item === selectedSize ? "bg-yellow-200" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
