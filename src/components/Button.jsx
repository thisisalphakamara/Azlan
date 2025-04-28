import React from "react";

const Button = () => {
  return (
    <button
      className=" bg-gradient-to-r from-blue-900 to-yellow-600 p-2 rounded-lg
       text-white font-bold hover:bg-gradient-to-l hover:from-yellow-600
        hover:to-blue-900 transition duration-300 ease-in-out"
    >
      Get Started
    </button>
  );
};

export default Button;
