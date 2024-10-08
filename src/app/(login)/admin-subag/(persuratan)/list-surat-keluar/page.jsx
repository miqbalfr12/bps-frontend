"use client";
import {useSession} from "next-auth/react";
import React, {useEffect} from "react";

import Table from "@/components/table";
import ModalTambahSuratKeluar from "@/components/modal/modalTambahSuratKeluar";

const header = [
 "no",
 "status_persuratan",
 "tanggal_surat",
 "no_surat",
 "perihal_surat",
 "sifat_tindakan",
 "aksi",
];

const Page = () => {
 const {data: session} = useSession();
 const [open, setOpen] = React.useState(false);
 const [dataSuratKeluar, setData] = React.useState([]);

 const getData = async () => {
  await fetch("/api/v1.0.0/surat-keluar", {
   method: "GET",
   headers: {
    authorization: `Bearer ${session.user.token}`,
   },
   cache: "no-store",
  }).then(async (res) => {
   if (res.ok) {
    const resJson = await res.json();
    resJson.map((item, index) => {
     item.no = index + 1;
     item.tanggal_surat = item.tanggal_surat.split("T")[0];
     item.updated_at = item.updated_at.split("T")[0];
    });
    setData(resJson);
   }
  });
 };

 const refreshData = () => {
  getData();
 };

 useEffect(() => {
  getData();
 }, []);

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
      Input Surat Keluar
     </button>
    </div>
    <div className="absolute flex flex-col w-full gap-8 p-8 top-1/2">
     <Table
      data={dataSuratKeluar}
      header={header}
      color="blue"
     />
    </div>
   </div>

   <ModalTambahSuratKeluar
    open={open}
    handler={handleModal}
    refreshData={refreshData}
    color="blue"
   />
  </>
 );
};

export default Page;
