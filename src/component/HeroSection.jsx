import React, { useState } from "react";
import { heroImages } from './Data';

const HeroSection = ({ header, par, btn }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <div
      className="h-[89.5vh] bg-no-repeat bg-center bg-cover flex items-center"
      style={{ backgroundImage: `url(${heroImages[slideIndex].image})` }}
    >
      <div className="ml-[5rem] text-gray-800">
        <h1 className="text-4xl font-bold ">{header}</h1>
        <p className="py-2 text-lg font-semibold">{par}</p>
        <button className=" text-gray-800 font-semibold bg-white py-2 px-4 rounded-md mt-3">
          {btn}
        </button>
        <div className=" mt-10 px-1 flex  gap-2">
          {heroImages.map((data,index) => {
            return <span
            key={index}
            onClick={() => setSlideIndex(index)}
            className={`w-3 h-2 rounded-full cursor-pointer bg-gray-400 hover:bg-white ${index === slideIndex && 'bg-red-400'}`}></span>
          })}

        </div>
      </div>
    </div>
  );
};

export default HeroSection;
