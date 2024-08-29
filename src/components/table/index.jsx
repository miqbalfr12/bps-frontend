import {EyeIcon, PencilIcon, Trash2Icon} from "lucide-react";
import React from "react";

const Table = ({data, header, color}) => {
 return (
  <div className="flex flex-col flex-1 min-w-[250px] gap-4 p-8 bg-white rounded-lg shadow-lg">
   <table className="border-collapse table-fixed">
    <thead className="hidden md:table-header-group">
     <tr>
      {header.map((item, index) => (
       <th
        key={index}
        className="p-4">
        {item
         .split("_")
         .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
         .join(" ")}
       </th>
      ))}
     </tr>
    </thead>
    <tbody
     className={`border-y-2 ${
      color === "blue"
       ? "border-[#2D95CA]"
       : color === "green"
       ? "border-[#76B445]"
       : color === "yellow"
       ? "border-[#E28839]"
       : "border-black"
     } md:table-row-group flex flex-col gap-4`}>
     {data.map((itemd, indexd) => {
      return (
       <tr
        key={indexd}
        className="flex flex-col border-b-2 md:border-b-0 md:table-row">
        {header.map((itemh, indexh) =>
         itemh === "aksi" ? (
          <td
           key={indexh}
           className="flex items-start justify-center gap-2 p-2">
           {itemd[itemh].map((item, index) => {
            switch (item) {
             case "view":
              return (
               <button
                key={index}
                className="bg-[#2D95CA] p-2 rounded-md">
                <EyeIcon className="text-white" />
               </button>
              );
             case "edit":
              return (
               <button
                key={index}
                className="bg-[#76B445] p-2 rounded-md">
                <PencilIcon className="text-white" />
               </button>
              );
             case "delete":
              return (
               <button
                key={index}
                className="bg-[#E28839] p-2 rounded-md">
                <Trash2Icon className="text-white" />
               </button>
              );
            }
           })}
          </td>
         ) : (
          <td
           key={indexh}
           className="p-2">
           <div className="flex flex-wrap gap-2">
            <span className="font-semibold md:hidden">
             {itemh
              .split("_")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
             {" : "}
            </span>
            <span>{itemd[itemh]}</span>
           </div>
          </td>
         )
        )}
       </tr>
      );
     })}
    </tbody>
   </table>
   <div className="flex flex-col items-center gap-4 md:justify-between md:flex-row">
    <p>Showing 1 to 3 of 3 entries</p>
    <div className="flex items-center gap-4">
     <button>sebelumnya</button>
     <div
      className={`${
       color === "blue"
        ? "bg-[#2D95CA]"
        : color === "green"
        ? "bg-[#76B445]"
        : color === "yellow"
        ? "bg-[#E28839]"
        : "bg-black"
      } p-2 rounded-md text-white`}>
      1
     </div>
     <button>selanjutnya</button>
    </div>
   </div>
  </div>
 );
};

export default Table;
