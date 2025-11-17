import React from "react";
import Image1 from "../assets/Hero/Hero1.jpg";
import Image2 from "../assets/Hero/Hero5.webp";

const About = () => {
  return (
    <div>
      <div className="">
        <div className="">
          <h1 className="font-bold uppercase text-2xl text-gray-600 ">About <span className="text-yellow-600">Us</span> </h1>
          <p className="text-md md:text-lg text-gray">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis nisi
            cum, ab hic voluptas iure aperiam neque ex! Non quae aspernatur
            harum magni voluptatem. Nostrum amet tempora repellendus aspernatur
            ipsa.
          </p>
        </div>
        <img src={Image2} alt="Image 2" className="" />
      </div>

      <div className="">
        <div className="">
          <img src={Image2} alt="Image 2" />
        </div>
        <div className="">
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
