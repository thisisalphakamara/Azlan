import React from "react";
import Button from "./Button";
import mainImage from "../assets/images/azlanMain.jpg";

const About = () => {
  return (
    <>
      <div id="about" className="sm:grid-cols-1  md:flex gap-15 p-5 ">
        <div className="w-full h-70">
          <img src={mainImage} alt="" className="w-full h-full rounded-lg" />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-extrabold text-4xl">About Us</h1>
          <div>
            <p className="md:text-lg text-sm ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
              corrupti ab in quam pariatur nesciunt quasi ratione, laudantium
              eligendi sapiente, adipisci tempora vero obcaecati ipsum quas
              natus accusamus exercitationem quidem. Quisquam, cumque. Quod,
              voluptatibus voluptates. Quisquam, cumque. Quod, voluptatibus
              voluptates. Quisquam, Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Odit aut ea officiis doloribus assumenda facere
              labore magni, consequatur cupiditate voluptate, mollitia
              accusantium odio beatae molestias laudantium pariatur iure dolorem
              quaerat!
            </p>
          </div>
          <div>
            <Button />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
