"use client";
import React, {useEffect} from "react";
import Table from "@/components/table";
import {useSession} from "next-auth/react";

const header = [
 "no",
 "status_persuratan",
 "tanggal_diterima",
 "instansi_pengirim",
 "perihal_surat",
 "penerima_tugas",
 "aksi",
];

const Page = () => {
 const {data: session} = useSession();
 const [dataSuratMasuk, setData] = React.useState([]);

 const getData = async () => {
  await fetch("/api/v1.0.0/surat-masuk", {
   method: "GET",
   headers: {
    authorization: `Bearer ${session.user.token}`,
   },
  }).then(async (res) => {
   if (res.ok) {
    const resJson = await res.json();
    resJson.map((item, index) => {
     item.no = index + 1;
     item.tanggal_diterima = item.tanggal_diterima.split("T")[0];
     item.tanggal_surat = item.tanggal_surat.split("T")[0];
     item.updated_at = item.updated_at.split("T")[0];
    });
    setData(resJson);
   }
  });
 };

 const [dataPegawai, setDataPegawai] = React.useState([]);
 const getUserData = async () => {
  console.log("getUserData");
  await fetch("/api/v1.0.0/users", {
   method: "GET",
   headers: {
    authorization: `Bearer ${session.user.token}`,
   },
  }).then(async (res) => {
   if (res.ok) {
    const resJson = await res.json();
    const select = await Promise.all(
     resJson.map((item) => {
      return {
       value: item.user_id,
       label: `${item.jabatan}${item.satker ? ` - ${item.satker}` : ""}${
        item.subag ? ` - ${item.subag}` : ""
       } - ${item.fullname}`,
      };
     })
    );
    setDataPegawai(select);
   }
  });
 };

 useEffect(() => {
  getData();
  getUserData();
 }, []);

 const handleRefresh = () => {
  getData();
  getUserData();
 };

 return (
  <div className="relative text-black">
   <div className="h-[250px] bg-[#E28839] p-8 text-white text-3xl font-semibold pt-16">
    Validasi/Disposisi Surat Masuk
   </div>
   <div className="absolute flex flex-col w-full gap-8 p-8 top-1/2">
    <Table
     data={dataSuratMasuk}
     handleRefresh={handleRefresh}
     header={header}
     dataPegawai={dataPegawai}
     color="yellow"
    />
   </div>
  </div>
 );
};

export default Page;
