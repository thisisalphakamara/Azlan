import React from "react";
import { useState } from "react";
import Button from "./Button";

const Hamburgermenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div>
        <button
          onClick={toggleMenu}
          className=" md:hidden lg:hidden  bg-gradient-to-r from-blue-900 to-yellow-600 px-6 py-4 rounded-lg
           text-white font-bold hover:bg-gradient-to-l hover:from-yellow-600
            hover:to-blue-900 transition duration-300 ease-in-out "
        >
          |||
        </button>

        {isOpen && (
          <div className="md:hidden absolute top-23  right-0 bg-white shadow-lg rounded-lg w-40 z-10 p-1 flex flex-col items-center space-y-3">
            <nav className="flex flex-col items-center justify-center h-full gap-4 p-2">
              <a
                className="font-bold text-center text-2xl hover:text-gray-600"
                href="#home"
              >
                Home
              </a>
              <a
                className="font-bold text-center text-2xl hover:text-gray-600"
                href="#about"
              >
                About
              </a>
              <a
                className="font-bold text-center text-2xl hover:text-gray-600"
                href="#service"
              >
                Services
              </a>
              <a
                className="font-bold text-center text-2xl hover:text-gray-600"
                href="#news"
              >
                News
              </a>
            </nav>
          </div>
        )}
      </div>
    </>
  );
};

export default Hamburgermenu;
