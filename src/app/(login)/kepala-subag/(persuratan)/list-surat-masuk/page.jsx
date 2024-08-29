import React from "react";
import Table from "@/components/table";

const data = [
 {
  no: 1,
  status_verifikasi: "Disposisi Kepala SatKer",
  tanggal_diterima: "01/02/2024",
  intansi: "Malcolm Lockyer",
  perihal: "The Sliding Mr. Bones (Next Stop, Pottersville)",
  penerima_tugas: "-",
  aksi: ["view"],
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
 return (
  <div className="relative text-black">
   <div className="h-[250px] bg-[#E28839] p-8 text-white text-3xl font-semibold pt-16">
    Surat Masuk
   </div>
   <div className="absolute flex flex-col w-full gap-8 p-8 top-1/2">
    <Table
     data={data}
     header={header}
     color="yellow"
    />
   </div>
  </div>
 );
};

export default Page;
