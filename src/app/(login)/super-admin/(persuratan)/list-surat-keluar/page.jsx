"use client";
import React from "react";

import Table from "@/components/table";
import Modal from "@/components/modal";

const data = [
 {
  no: 1,
  status_verifikasi: "Menunggu",
  tanggal_diterima: "01/02/2024",
  no_surat: "Menunggu diterbitkan",
  perihal: "Pengajuan Izin Pengadaan ...",
  kepada: "Kepala Satker",
  aksi: ["view", "edit", "delete"],
 },
 {
  no: 2,
  status_verifikasi: "Menunggu",
  tanggal_diterima: "01/02/2024",
  no_surat: "Menunggu diterbitkan",
  perihal: "Pengajuan Izin Pengadaan ...",
  kepada: "Kepala Satker",
  aksi: ["view", "edit", "delete"],
 },
 {
  no: 3,
  status_verifikasi: "Menunggu",
  tanggal_diterima: "01/02/2024",
  no_surat: "Menunggu diterbitkan",
  perihal: "Pengajuan Izin Pengadaan ...",
  kepada: "Kepala Satker",
  aksi: ["view", "edit", "delete"],
 },
];

const header = [
 "no",
 "status_verifikasi",
 "tanggal_diterima",
 "no_surat",
 "perihal",
 "kepada",
 "aksi",
];

const Page = () => {
 const [open, setOpen] = React.useState(false);

 const handleModal = () => {
  setOpen((prev) => !prev);
 };

 return (
  <>
   <div className="relative text-black">
    <div className="h-[250px] bg-[#2D95CA] p-8 text-white  pt-16 flex justify-between">
     <p className="text-3xl font-semibold">Surat Keluar</p>
     <button
      onClick={() => handleModal()}
      className="text-[#2D95CA] text-xl bg-white rounded-md h-fit p-2 px-4">
      Buat Surat Keluar
     </button>
    </div>
    <div className="absolute flex flex-col w-full gap-8 p-8 top-1/2">
     <Table
      data={data}
      header={header}
      color="blue"
     />
    </div>
   </div>

   <Modal
    open={open}
    handler={handleModal}>
    <div className="mt-3 text-center">
     <div className="flex items-center justify-center w-12 h-12 mx-auto bg-purple-100 rounded-full">
      <svg
       className="w-6 h-6 text-[#2D95CA]"
       fill="none"
       stroke="currentColor"
       viewBox="0 0 24 24"
       xmlnx="http://www.w.org/2000/svg">
       <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 13l4 4L19 7"></path>
      </svg>
     </div>
     <h3 className="text-lg font-medium leading-6 text-gray-900">
      Successfull
     </h3>
     <div className="py-3 mt-2 px-7">
      <p className="text-sm text-gray-500">
       Account has been Successful registered.
      </p>
     </div>
     <div className="items-center px-4 py-3">
      <button
       onClick={() => handleModal()}
       className="w-full px-4 py-2 text-base font-medium text-white bg-[#2D95CA] rounded-md shadow-sm hover:bg-[#1b678d] focus:outline-none focus:ring-2 focus:ring-purple-300">
       OK
      </button>
     </div>
    </div>
   </Modal>
  </>
 );
};

export default Page;
