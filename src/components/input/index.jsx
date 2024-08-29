import React from "react";

const Input = ({label, color, type}) => {
 return (
  <div className="w-full">
   <label>{label}</label>
   <input
    type={type}
    className={`w-full px-3 py-2 border-b-2 border-gray-300 ${
     color === "blue"
      ? "focus:border-[#2D95CA]"
      : color === "green"
      ? "focus:border-[#76B445]"
      : color === "yellow"
      ? "focus:border-[#E28839]"
      : "focus:border-black"
    } focus:outline-none`}
   />
  </div>
 );
};

export default Input;
