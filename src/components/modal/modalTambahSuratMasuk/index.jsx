import React from "react";
import Modal from "..";
import {X} from "lucide-react";
import Input from "@/components/input";
import ModalSuccess from "../modalSuccess";

const ModalTambahSuratMasuk = ({open, handler, color}) => {
 const [openSub, setOpenSub] = React.useState(false);
 const handleSub = () => {
  setOpenSub((prev) => !prev);
 };

 return (
  <>
   <Modal
    open={open}
    handler={handler}>
    <div className="px-8">
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
      <p className="text-xl font-semibold">TAMBAH SURAT MASUK</p>
      <button onClick={handler}>
       <X />
      </button>
     </div>
     <div className="flex flex-col gap-4 mb-4">
      <div>
       <p className="text-xl font-semibold">Informasi Umum</p>
       <p>Lengkapi Informasi pada Surat Masuk</p>
      </div>
      <div className="flex flex-wrap w-full gap-2 md:flex-nowrap">
       <Input
        label="Nomor Surat"
        color={color}
        type="text"
       />
       <Input
        label="Tanggal Surat"
        color={color}
        type="date"
       />
       <Input
        label="Tanggal Diterima"
        color={color}
        type="date"
       />
      </div>
      <div className="flex flex-wrap w-full gap-2 md:flex-nowrap">
       <Input
        label="Instansi Pengirim"
        color={color}
        type="text"
       />
       <Input
        label="No. Agenda"
        color={color}
        type="text"
       />
       <Input
        label="Klasifikasi"
        color={color}
        type="text"
       />
      </div>
      <Input
       label="Perihal Surat"
       color={color}
       type="text"
      />
     </div>
     <div className="flex flex-col gap-4 mb-4">
      <div>
       <p className="text-xl font-semibold">Informasi Tambahan</p>
       <p>Silahkan Lengkapi Informasi Tambahan dibawah ini</p>
      </div>
      <div className="flex flex-wrap w-full gap-2 md:flex-nowrap">
       <Input
        label="Jumlah Lampiran"
        color={color}
        type="text"
       />
       <Input
        label="Status Surat"
        color={color}
        type="text"
       />
       <Input
        label="Sifat Tindakan"
        color={color}
        type="text"
       />
      </div>
     </div>
     <div className="flex flex-col gap-4 mb-4">
      <div>
       <p className="text-xl font-semibold">UNGGAH FILE SURAT</p>
       <p>Silahkan unggah file surat dalam satu file</p>
      </div>
      <div className="w-full p-4 rounded-md bg-neutral-300">
       <p className="mb-2 text-lg font-semibold text-black">UPLOAD FILE</p>
       <label
        htmlFor="file-upload"
        className={`flex items-center justify-center w-full px-4 py-2 text-gray-600 bg-white border-2 border-gray-300 rounded-md cursor-pointer hover:text-white ${
         color === "blue"
          ? "hover:bg-[#2D95CA]"
          : color === "green"
          ? "hover:bg-[#76B445]"
          : color === "yellow"
          ? "hover:bg-[#E28839]"
          : "hover:bg-black"
        }`}>
        <span>Choose file</span>
        <input
         id="file-upload"
         type="file"
         className="hidden"
        />
       </label>
      </div>
     </div>
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
       className="px-4 py-2">
       Tutup
      </button>
      <button
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
      </button>
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
  </>
 );
};

export default ModalTambahSuratMasuk;
