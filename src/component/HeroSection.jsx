import React, { useEffect, useState } from "react";
import { heroImages } from "./Data";
import { motion } from "framer-motion";


const HeroSection = ({ header, par, btn }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    slideIndex < heroImages.length - 1
      ? setSlideIndex((prevIndex) => prevIndex + 1)
      : setSlideIndex(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval); // cleanUp when the component unmounts
  }, [nextSlide]);

  return (
    <div
      className="h-[89.5vh] bg-no-repeat bg-center bg-cover flex items-center"
      style={{ backgroundImage: `url(${heroImages[slideIndex].image})` }}
    >
      <div className="ml-[5rem] text-gray-800">
        <h1 className="text-4xl font-bold ">{header}</h1>
        <p className="py-2 text-lg font-semibold">{par}</p>
        <motion.button animate={{ opacity: 5 }} className=" text-gray-800 font-semibold bg-white py-2 px-4 rounded-md mt-3">
          {btn}
        </motion.button>
        <div className=" mt-10 px-1 flex  gap-2">
          {heroImages.map((data, index) => {
            return (
              <span
                key={index}
                onClick={() => setSlideIndex(index)}
                className={`w-3 h-2 rounded-full cursor-pointer bg-gray-400 hover:bg-white ${
                  index === slideIndex && "bg-red-400"
                }`}
              ></span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
