import React from "react";

import Table from "@/components/table";

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
 return (
  <div className="relative text-black">
   <div className="h-[250px] bg-[#2D95CA] p-8 text-white text-3xl font-semibold pt-16">
    Pengaturan Lembaga
   </div>
   <div className="absolute flex flex-col w-full gap-8 p-8 top-1/2">
    <Table
     data={data}
     header={header}
     color="blue"
    />
   </div>
  </div>
 );
};

export default Page;
