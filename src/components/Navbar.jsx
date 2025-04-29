import React from "react";

const Navbar = () => {
  return (
    <nav className="hidden md:flex  md:gap-10 ">
      <a href="#home" className="font-bold text-2xl hover:text-gray-600">
        Home
      </a>
      <a href="#about" className="font-bold text-2xl hover:text-gray-600">
        About
      </a>
      <a href="#service" className="font-bold text-2xl hover:text-gray-600">
        Services
      </a>
      <a href="#news" className="font-bold text-2xl hover:text-gray-600">
        News
      </a>
    </nav>
  );
};

export default Navbar;
