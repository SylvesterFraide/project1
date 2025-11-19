import React from "react";
import Title from "../component/Title";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import ProductItem from "../component/ProductItem";

const Collection = () => {
  const { product, currency } = useContext(ShopContext);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubCategory] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleCategoryChange = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(category.filter((item) => item !== e.target.value));
    } else {
      setCategory([...category, e.target.value]);
    }
  };

  const handleSubCategoryChange = (e) => {
    if (subcategory.includes(e.target.value)) {
      setSubCategory(subcategory.filter((item) => item !== e.target.value));
    } else {
      setSubCategory([...subcategory, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productCopy = product.slice();

    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subcategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subcategory.includes(item.subcategory)
      );
    }

    setFilteredProducts(productCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [category, subcategory]);

  return (
    <div className="flex justify-between flex-col sm:flex-row gap-2 sm:gap-10 mt-6 mx-10 bg-gray-100 shadow-xl">
      <div className="min-w-60">
        <Title text2={"FILTERS"} />
        <div className="border border-gray-300">
          <div className="">
            <h2 className="text-md font-semibold text-gray-700 p-2">
              Categories
            </h2>
            <div className="flex flex-col gap-1 p-2">
              <p className="flex gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  onChange={handleCategoryChange}
                  value={"Men"}
                />
                Men
              </p>
              <p className="flex gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  onChange={handleCategoryChange}
                  value={"Women"}
                />
                Women
              </p>
              <p className="flex gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  onChange={handleCategoryChange}
                  value={"Kids"}
                />
                Kids
              </p>
            </div>
          </div>

          <div className="">
            <h2 className="text-md font-semibold text-gray-700 p-2">Type</h2>
            <div className="flex flex-col gap-1 p-2">
              <p className="flex gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  onChange={handleSubCategoryChange}
                  value={"TopWear"}
                />
                TopWear
              </p>
              <p className="flex gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  onChange={handleSubCategoryChange}
                  value={"BottomWear"}
                />
                BottomWear
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border flex-1">
        <Title text2={"PRODUCTS"} />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {filteredProducts.map((item) => (
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
    </div>
  );
};

export default Collection;
