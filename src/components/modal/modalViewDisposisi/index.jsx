import React from "react";
import Modal from "..";
import {X} from "lucide-react";
import Input from "@/components/input";
import ModalSuccess from "../modalSuccess";
import ModalViewPDF from "../modalViewPDF";

const ModalViewDisposisi = ({open, handler, color, data}) => {
 const [openSub, setOpenSub] = React.useState(false);
 const handleSub = () => {
  setOpenSub((prev) => !prev);
 };
 const [openView, setOpenView] = React.useState(false);
 const handleView = (data) => {
  setOpenView(data);
 };

 return (
  <>
   <Modal
    open={open}
    handler={handler}>
    <div className="w-full px-8">
     <div
      className={`flex justify-between w-full pb-2 border-b-2 ${
       color === "blue"
        ? "border-[#2D95CA]"
        : color === "green"
        ? "border-[#76B445]"
        : color === "yellow"
        ? "border-[#E28839]"
        : "border-black"
      } mb-4 `}>
      <p className="text-xl font-semibold">Detail Surat</p>
      <button onClick={handler}>
       <X />
      </button>
     </div>

     {data && (
      <div>
       <div className="flex flex-col gap-4 mb-4">
        <table className="w-full table-fixed">
         <tbody>
          <tr>
           <td className="w-1/3">Status Persuratan</td>
           <td className="w-1/12">:</td>
           <td className="border-b-2 border-black border-opacity-25">
            {data.status_persuratan}
           </td>
          </tr>
          <tr>
           <td>Tanggal Update</td>
           <td>:</td>
           <td className="border-b-2 border-black border-opacity-25">
            {data.updated_at}
           </td>
          </tr>
         </tbody>
        </table>
       </div>
       <div className="flex flex-col gap-4 mb-4">
        {data.terdisposisi ? (
         data.terdisposisi.map((item, index) => (
          <div
           key={index}
           className="w-full p-4 rounded-md bg-neutral-300">
           <p className="mb-2 text-lg font-semibold text-black">
            {item.penerima.fullname}
           </p>
           <div className="flex gap-4">
            <button
             onClick={() => handleView(item.file)}
             className={`flex items-center justify-center w-full px-4 py-2 text-gray-600 bg-white border-2 border-gray-300 rounded-md cursor-pointer hover:text-white ${
              color === "blue"
               ? "hover:bg-[#2D95CA]"
               : color === "green"
               ? "hover:bg-[#76B445]"
               : color === "yellow"
               ? "hover:bg-[#E28839]"
               : "hover:bg-black"
             }`}>
             View
            </button>
           </div>
          </div>
         ))
        ) : (
         <div className="w-full p-4 rounded-md bg-neutral-300">
          <p className="mb-2 text-lg font-semibold text-black">
           Lembar Disposisi
          </p>
          <div className="flex gap-4">
           <button
            onClick={() => handleView(data.file)}
            className={`flex items-center justify-center w-full px-4 py-2 text-gray-600 bg-white border-2 border-gray-300 rounded-md cursor-pointer hover:text-white ${
             color === "blue"
              ? "hover:bg-[#2D95CA]"
              : color === "green"
              ? "hover:bg-[#76B445]"
              : color === "yellow"
              ? "hover:bg-[#E28839]"
              : "hover:bg-black"
            }`}>
            View
           </button>
          </div>
         </div>
        )}
       </div>
      </div>
     )}

     <div
      className={`pt-2 border-t-2 flex justify-end ${
       color === "blue"
        ? "border-[#2D95CA]"
        : color === "green"
        ? "border-[#76B445]"
        : color === "yellow"
        ? "border-[#E28839]"
        : "border-black"
      } mt-4`}>
      <button
       onClick={handler}
       className={`px-4 py-2 rounded-lg text-white ${
        color === "blue"
         ? "bg-[#2D95CA]"
         : color === "green"
         ? "bg-[#76B445]"
         : color === "yellow"
         ? "bg-[#E28839]"
         : "bg-black"
       } `}>
       Tutup
      </button>
      {/* <button
       onClick={handleSub}
       className={`px-4 py-2 rounded-lg text-white ${
        color === "blue"
         ? "bg-[#2D95CA]"
         : color === "green"
         ? "bg-[#76B445]"
         : color === "yellow"
         ? "bg-[#E28839]"
         : "bg-black"
       } `}>
       Simpan
      </button> */}
     </div>
    </div>
   </Modal>
   <ModalSuccess
    open={openSub}
    handler={() => {
     handleSub();
     handler();
    }}>
    Surat Masuk Berhasilan Disimpan
   </ModalSuccess>
   <ModalViewPDF
    open={openView ? true : false}
    file={openView}
    color={color}
    handler={() => {
     handleView(false);
    }}></ModalViewPDF>
  </>
 );
};

export default ModalViewDisposisi;
