import React from "react";
import Title from "../component/Title";

const Collection = () => {
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
                <input type="checkbox" value={"Men"} />
                Men
              </p>
              <p className="flex gap-2 text-sm text-gray-600">
                <input type="checkbox" value={"Women"} />
                Women
              </p>
              <p className="flex gap-2 text-sm text-gray-600">
                <input type="checkbox" value={"Kids"} />
                Kids
              </p>
            </div>
          </div>

          <div className="">
            <h2 className="text-md font-semibold text-gray-700 p-2">
              Type
            </h2>
            <div className="flex flex-col gap-1 p-2">
              <p className="flex gap-2 text-sm text-gray-600">
                <input type="checkbox" value={"TopWear"} />
                TopWear
              </p>
              <p className="flex gap-2 text-sm text-gray-600">
                <input type="checkbox" value={"BottomWear"} />
                BottomWear
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border flex-1">
        <Title text2={"PRODUCTS"} />
      </div>
    </div>
  );
};

export default Collection;
