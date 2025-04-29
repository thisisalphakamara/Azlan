import React from "react";
import logo from "../assets/images/azlanlogo.png";
import Navbar from "./Navbar";
import Hamburgermenu from "./Hamburgermenu";

const Header = () => {
  return (
    <header
      id="home"
      className="flex justify-between items-center  p-5 bg-white"
    >
      <a href="#home">
        <div className="flex items-center gap-2">
          <img src={logo} alt="" className="w-10 h-10 " />
          <h1 className="font-bold text-2xl">Azlan</h1>
        </div>
      </a>

      <Navbar />

      <div>
        <Hamburgermenu />
        <button
          className="hidden md:flex lg:flex bg-gradient-to-r from-blue-900 to-yellow-600 p-2 rounded-lg
       text-white font-bold hover:bg-gradient-to-l hover:from-yellow-600
        hover:to-blue-900 transition duration-300 ease-in-out"
        >
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
