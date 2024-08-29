"use client";
import React from "react";

import Table from "@/components/table";
import ModalTambahSuratMasuk from "@/components/modal/modalTambahSuratMasuk";

const data = [
 {
  no: 1,
  status_verifikasi: "Disposisi Kepala SatKer",
  tanggal_diterima: "01/02/2024",
  intansi: "Malcolm Lockyer",
  perihal: "The Sliding Mr. Bones (Next Stop, Pottersville)",
  penerima_tugas: "-",
  aksi: ["view", "disposisi"],
 },
 {
  no: 2,
  status_verifikasi: "Disposisi Kepala SatKer",
  tanggal_diterima: "01/02/2024",
  intansi: "The Eagles",
  perihal: "Witchy Woman",
  penerima_tugas: "-",
  aksi: ["view"],
 },
 {
  no: 3,
  status_verifikasi: "Disposisi Kepala SatKer",
  tanggal_diterima: "01/02/2024",
  intansi: "Shining",
  perihal: "Earth, Wind, and Fire",
  penerima_tugas: "-",
  aksi: ["view"],
 },
];

const header = [
 "no",
 "status_verifikasi",
 "tanggal_diterima",
 "intansi",
 "perihal",
 "penerima_tugas",
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
    <div className="h-[250px] bg-[#2D95CA] p-8 text-white pt-16 flex justify-between">
     <p className="text-3xl font-semibold">Surat Masuk</p>
     <button
      onClick={() => handleModal()}
      className="text-[#2D95CA] text-xl bg-white rounded-md h-fit p-2 px-4">
      Input Surat Masuk
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

   <ModalTambahSuratMasuk
    open={open}
    handler={handleModal}
    color="blue"
   />
  </>
 );
};

export default Page;
