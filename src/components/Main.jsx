import React from "react";
import Button from "./Button";
import mainImage from "../assets/images/azlanMain.jpg";
// Assuming you have an image in the assets folder

const Main = () => {
  return (
    <div
      id="home"
      className="sm:grid-cols-1  md:flex justify-between items-center p-4 bg-gray-300 gap-10"
    >
      <div className="p-5">
        <div className="flex flex-col gap-2 mb-8">
          <p>Elevate Your Education with Azlan</p>
          <h1 className="text-3xl font-extrabold">
            Where Learning Meets Innovation
          </h1>
          <p>
            Discover a world of limitless learning possibilities at Azlan, your
            premier destination for online educational training
          </p>
        </div>

        <Button />
      </div>
      <div>
        <img src={mainImage} alt="" className="w-70 h-60 rounded-lg  " />
      </div>
    </div>
  );
};

export default Main;
