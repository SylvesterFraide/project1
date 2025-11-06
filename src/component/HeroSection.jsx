import React from "react";
import heroBackgroundImg from "../assets/Hero/Hero4.webp";

const HeroSection = () => {
  return (
    <div
      className="h-[89.5vh] bg-no-repeat bg-cover flex items-center "
      style={{ backgroundImage: `url(${heroBackgroundImg})` }}
    >
      <div className="ml-[5rem] text-white">
        <h1 className="text-4xl font-bold">Holiday Season is Here!</h1>
        <p className="py-2 text-lg">
          Celebrate the joy and warmth of the season with us.
        </p>
        <button className="text-black bg-white py-2 px-4 rounded mt-3">Shop Now</button>
      </div>
    </div>
  );
};

export default HeroSection;
