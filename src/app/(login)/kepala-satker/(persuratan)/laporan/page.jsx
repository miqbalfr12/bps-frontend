import {
 FolderOutputIcon,
 FolderSymlinkIcon,
 UsersRoundIcon,
} from "lucide-react";
import React from "react";

const Page = () => {
 return (
  <div className="relative text-black">
   <div className="h-[250px] bg-[#E28839] p-8 text-white text-3xl font-semibold pt-16">
    Laporan
   </div>
   <div className="absolute flex flex-col w-full gap-8 p-8 top-1/2">
    <div className="grid grid-cols-3 gap-8">
     <div className="flex flex-col gap-4 p-8 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between">
       <h2 className="text-xl">Surat Masuk</h2>
       <div className="p-4 bg-[#E28839] rounded-md">
        <FolderSymlinkIcon className="text-white" />
       </div>
      </div>
      <div className="text-3xl font-bold">123</div>
      <p>Surat</p>
     </div>
     <div className="flex flex-col gap-4 p-8 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between">
       <h2 className="text-xl">Surat Keluar</h2>
       <div className="p-4 bg-[#E28839] rounded-md">
        <FolderOutputIcon className="text-white" />
       </div>
      </div>
      <div className="text-3xl font-bold">123</div>
      <p>Surat</p>
     </div>
     <div className="flex flex-col gap-4 p-8 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between">
       <h2 className="text-xl">Pegawai</h2>
       <div className="p-4 bg-[#E28839] rounded-md">
        <UsersRoundIcon className="text-white" />
       </div>
      </div>
      <div className="text-3xl font-bold">123</div>
      <p>Surat</p>
     </div>
    </div>
    <div className="flex flex-col gap-4 p-8 bg-white rounded-lg shadow-lg">
     <h3 className="text-2xl font-semibold">Dashboard</h3>
     <p>
      Selamat Datang :Nama Lengkap: di E-Surat Badan Pusat Statistik Indonesia!
      Anda login sebagai Kepala Satker.
     </p>
    </div>
   </div>
  </div>
 );
};

export default Page;
