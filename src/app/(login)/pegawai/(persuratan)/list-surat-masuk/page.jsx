"use client";
import {useSession} from "next-auth/react";
import React, {useEffect} from "react";

import Table from "@/components/table";
import ModalTambahSuratMasuk from "@/components/modal/modalTambahSuratMasuk";

const header = [
 "no",
 "status_persuratan",
 "instansi_pengirim",
 "perihal_surat",
 "tanggal_disposisi",
 "aksi",
];
const Page = () => {
 const {data: session} = useSession();
 const [open, setOpen] = React.useState(false);
 const [dataSuratMasuk, setData] = React.useState([]);

 const getData = async () => {
  await fetch("/api/v1.0.0/disposisi", {
   method: "GET",
   headers: {
    authorization: `Bearer ${session.user.token}`,
   },
  }).then(async (res) => {
   if (res.ok) {
    const resJson = await res.json();
    resJson.map((item, index) => {
     item.no = index + 1;
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
  <div className="relative text-black">
   <div className="h-[250px] bg-[#76B445] p-8 text-white text-3xl font-semibold pt-16">
    Surat Masuk
   </div>
   <div className="absolute flex flex-col w-full gap-8 p-8 top-1/2">
    <Table
     data={dataSuratMasuk}
     header={header}
     color="green"
    />
   </div>
  </div>
 );
};

export default Page;
