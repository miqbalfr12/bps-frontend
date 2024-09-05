"use client";
import {useSession} from "next-auth/react";
import {FolderOutputIcon, FolderSymlinkIcon} from "lucide-react";
import React, {useEffect} from "react";

const Page = () => {
 const {data: session} = useSession();
 const [data, setData] = React.useState({});
 const getData = async () => {
  await fetch(
   "/api/v1.0.0/dashboard?data=disposisi_surat_masuk,disposisi_surat_keluar",
   {
    method: "GET",
    headers: {
     authorization: `Bearer ${session.user.token}`,
    },
    cache: "no-store",
   }
  ).then(async (res) => {
   if (res.ok) {
    const resJson = await res.json();
    setData(resJson);
   }
  });
 };

 useEffect(() => {
  getData();
 }, []);
 return (
  <div className="relative text-black">
   <div className="h-[250px] bg-[#76B445] p-8 text-white text-3xl font-semibold pt-16">
    Dashboard
   </div>
   <div className="absolute flex flex-col w-full gap-8 p-8 top-1/2">
    <div className="flex flex-wrap gap-8">
     <div className="flex flex-col flex-1 min-w-[250px] gap-4 p-8 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between">
       <h2 className="text-xl">Disposisi Surat Masuk</h2>
       <div className="p-4 bg-[#76B445] rounded-md">
        <FolderSymlinkIcon className="text-white" />
       </div>
      </div>
      <div className="text-3xl font-bold">{data?.surat_masuk}</div>
      <p>Surat</p>
     </div>
     <div className="flex flex-col flex-1 min-w-[250px] gap-4 p-8 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between">
       <h2 className="text-xl">Disposisi Surat Keluar</h2>
       <div className="p-4 bg-[#76B445] rounded-md">
        <FolderOutputIcon className="text-white" />
       </div>
      </div>
      <div className="text-3xl font-bold">{data?.surat_keluar}</div>
      <p>Surat</p>
     </div>
    </div>
    <div className="flex flex-col flex-1 min-w-[250px] gap-4 p-8 bg-white rounded-lg shadow-lg">
     <h3 className="text-2xl font-semibold">Dashboard</h3>
     <p>
      Selamat Datang {session.user.fullname} di Simpel (Sistem Informasi
      Manajemen Pelayanan Elektronik) Badan Pusat Statistik Tasikmalaya! Anda
      login sebagai Pegawai.
     </p>
    </div>
   </div>
  </div>
 );
};

export default Page;
