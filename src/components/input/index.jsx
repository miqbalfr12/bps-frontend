import React from "react";

const Input = ({
 label,
 color,
 type,
 name,
 required = false,
 selectData,
 caption,
}) => {
 return type === "select" ? (
  <div className="flex flex-col w-full">
   <label>
    {label} <span className="text-red-500">{required ? "*" : ""}</span>
   </label>
   <select
    name={name}
    id={name}
    className={`w-full px-3 py-2 border-b-2 border-gray-300 ${
     color === "blue"
      ? "focus:border-[#2D95CA]"
      : color === "green"
      ? "focus:border-[#76B445]"
      : color === "yellow"
      ? "focus:border-[#E28839]"
      : "focus:border-black"
    } focus:outline-none`}>
    {selectData.map(({value, item}, index) => (
     <option
      key={index}
      value={value}>
      {item}
     </option>
    ))}
   </select>
  </div>
 ) : (
  <div className="w-full">
   <label>
    {label} <span className="text-red-500">{required ? "*" : ""}</span>
   </label>
   <input
    type={type}
    name={name}
    required={required}
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
   {caption && <p className="text-sm text-red-500">{caption}</p>}
  </div>
 );
};

export default Input;
