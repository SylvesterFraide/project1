import React from "react";
import HeroSection from "../component/HeroSection";
import Latest_Collection from "../component/Latest_Collection";
import Best_Seller from "../component/Best_Seller";


const Home = () => {
  return (
    <div className="">
      <HeroSection
        header="Holiday Season is Here!"
        par="Celebrate the joy and warmth of the season with us."
        btn="Shop Now"
      />
      <Latest_Collection />
      <Best_Seller />
    </div>

  );
};

export default Home;
