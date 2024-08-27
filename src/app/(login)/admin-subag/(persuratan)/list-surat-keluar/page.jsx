import {
 EyeIcon,
 FolderOutputIcon,
 FolderSymlinkIcon,
 PencilIcon,
 Trash2Icon,
 UsersRoundIcon,
} from "lucide-react";
import React from "react";

const Page = () => {
 return (
  <div className="relative text-black">
   <div className="h-[250px] bg-[#2D95CA] p-8 text-white  pt-16 flex justify-between">
    <p className="text-3xl font-semibold">Surat Keluar</p>
    <button className="text-[#2D95CA] text-xl bg-white rounded-md h-fit p-2 px-4">
     Input Surat Keluar
    </button>
   </div>
   <div className="absolute flex flex-col w-full gap-8 p-8 top-1/2">
    <div className="flex flex-col gap-4 p-8 bg-white rounded-lg shadow-lg">
     <table class="table-fixed border-collapse">
      <thead>
       <tr className="border-b-2 border-[#2D95CA]">
        <th className="p-4">No.</th>
        <th className="p-4">Status Verifikasi</th>
        <th className="p-4">Tanggal Diterima</th>
        <th className="p-4">No. Surat</th>
        <th className="p-4">Perihal</th>
        <th className="p-4">Kepada</th>
        <th className="p-4">Aksi</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td className="p-2">1</td>
        <td className="p-2">Menunggu</td>
        <td className="p-2 text-center">01/02/2024</td>
        <td className="p-2">Menunggu diterbitkan</td>
        <td className="p-2">Pengajuan Izin Pengadaan ...</td>
        <td className="p-2">Kepala Satker</td>
        <td className="flex items-start justify-center gap-2 p-2">
         <button className="bg-[#2D95CA] p-2 rounded-md">
          <EyeIcon className="text-white" />
         </button>
         <button className="bg-[#76B445] p-2 rounded-md">
          <PencilIcon className="text-white" />
         </button>
         <button className="bg-[#E28839] p-2 rounded-md">
          <Trash2Icon className="text-white" />
         </button>
        </td>
       </tr>
       <tr>
        <td className="p-2">2</td>
        <td className="p-2">Menunggu</td>
        <td className="p-2 text-center">01/02/2024</td>
        <td className="p-2">Menunggu diterbitkan</td>
        <td className="p-2">Pengajuan Izin Pengadaan ...</td>
        <td className="p-2">Kepala Satker</td>
        <td className="flex items-start justify-center gap-2 p-2">
         <button className="bg-[#2D95CA] p-2 rounded-md">
          <EyeIcon className="text-white" />
         </button>
         <button className="bg-[#76B445] p-2 rounded-md">
          <PencilIcon className="text-white" />
         </button>
         <button className="bg-[#E28839] p-2 rounded-md">
          <Trash2Icon className="text-white" />
         </button>
        </td>
       </tr>
       <tr className="border-b-2 border-[#2D95CA]">
        <td className="p-2">3</td>
        <td className="p-2">Menunggu</td>
        <td className="p-2 text-center">01/02/2024</td>
        <td className="p-2">Menunggu diterbitkan</td>
        <td className="p-2">Pengajuan Izin Pengadaan ...</td>
        <td className="p-2">Kepala Satker</td>
        <td className="flex items-start justify-center gap-2 p-2">
         <button className="bg-[#2D95CA] p-2 rounded-md">
          <EyeIcon className="text-white" />
         </button>
         <button className="bg-[#76B445] p-2 rounded-md">
          <PencilIcon className="text-white" />
         </button>
         <button className="bg-[#E28839] p-2 rounded-md">
          <Trash2Icon className="text-white" />
         </button>
        </td>
       </tr>
      </tbody>
     </table>
     <div className="flex items-center justify-between">
      <p>Showing 1 to 3 of 3 entries</p>
      <div className="flex items-center gap-4">
       <button>sebelumnya</button>
       <div className="bg-[#2D95CA] p-2 rounded-md text-white">1</div>
       <button>selanjutnya</button>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Page;
