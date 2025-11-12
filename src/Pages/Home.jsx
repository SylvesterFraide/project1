import React from "react";
import HeroSection from "../component/HeroSection";
import Latest_Collection from "../component/Latest_Collection";

const Home = () => {
  return (
    <div className="">
      <HeroSection
        header="Holiday Season is Here!"
        par="Celebrate the joy and warmth of the season with us."
        btn="Shop Now"
      />
      <Latest_Collection />
    </div>

  );
};

export default Home;
