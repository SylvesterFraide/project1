import React from "react";
import Image1 from "../assets/Hero/Hero1.jpg";
import Image2 from "../assets/Hero/Hero5.webp";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center my-10 gap-2 md:gap-6">
      <div className="flex justify-center items-center mx-10 flex-col md:flex-row gap-10">
        <div className="">
          <h1 className="font-bold uppercase text-2xl text-gray-600 ">
            About <span className="text-yellow-600">Us</span>{" "}
          </h1>
          <p className="text-gray-600 text-md md:text-lg w-3/4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.  Quis nisi
            cum, ab hic voluptas iure aperiam neque ex! Non quae aspernatur
            harum magni voluptatem. Nostrum amet tempora repellendus aspernatur
            ipsa.
          </p>
        </div>
        <img src={Image2} alt="Image 2" className="object-fit w-100 rounded-lg shadow-lg" />
      </div>

      <div className="flex flex-col md:flex-row gap-10 my-10 justify-center h-1/2 items-center">
        <img
          src={Image1}
          alt="Image 1"
          className="object-fit w-120 rounded-lg shadow-lg"
        />
        <div className="flex flex-col justify-center items-center">
          <div className="">
            <h1>Our Mission</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
              nisi cum, ab hic voluptas iure aperiam neque ex! Non quae
              aspernatur harum magni voluptatem. Nostrum amet tempora
              repellendus aspernatur ipsa.
            </p>
          </div>
          <div className="">
            <h1>Our Vision</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
              nisi cum, ab hic voluptas iure aperiam neque ex! Non quae
              aspernatur harum magni voluptatem. Nostrum amet tempora
              repellendus aspernatur ipsa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
