import React from "react";

const Navbar = () => {
  return (
    <nav className="hidden md:flex  md:gap-10 text-black hover:text-gray-300">
      <a href="#home" className="font-bold text-2xl hover:text-black">
        Home
      </a>
      <a href="#about" className="font-bold text-2xl hover:text-black">
        About
      </a>
      <a href="#service" className="font-bold text-2xl hover:text-black">
        Services
      </a>
      <a href="#news" className="font-bold text-2xl hover:text-black">
        News
      </a>
    </nav>
  );
};

export default Navbar;
