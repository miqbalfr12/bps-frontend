import {
 EyeIcon,
 FolderOutputIcon,
 FolderSymlinkIcon,
 UsersRoundIcon,
} from "lucide-react";
import React from "react";

const Page = () => {
 return (
  <div className="relative text-black">
   <div className="h-[250px] bg-[#2D95CA] p-8 text-white text-3xl font-semibold pt-16">
    Laporan
   </div>
   <div className="absolute flex flex-col w-full gap-8 p-8 top-1/2">
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
     <div className="flex flex-col flex-1 min-w-[250px] gap-4 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl">Tanggal Awal</h2>
      <input
       type="date"
       className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-[#2D95CA] focus:outline-none"
      />
     </div>
     <div className="flex flex-col flex-1 min-w-[250px] gap-4 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl">Tanggal Akhir</h2>
      <input
       type="date"
       className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-[#2D95CA] focus:outline-none"
      />
     </div>
     <div className="flex flex-col flex-1 min-w-[250px] gap-4 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl">Jenis Surat</h2>
      <select className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-[#2D95CA] focus:outline-none">
       <option>Surat Keluar</option>
       <option>Surat Masuk</option>
      </select>
     </div>
    </div>
    <div className="grid grid-cols-2 gap-8">
     <button className="flex flex-col flex-1 min-w-[250px] gap-4 p-4 bg-[#2D95CA] text-white text-center rounded-lg shadow-lg items-center text-xl font-semibold">
      Filter
     </button>
     <button className="flex flex-col flex-1 min-w-[250px] gap-4 p-4 bg-[#2D95CA] text-white text-center rounded-lg shadow-lg items-center text-xl font-semibold">
      Cetak
     </button>
    </div>
    <div className="flex flex-col flex-1 min-w-[250px] gap-4 p-8 bg-white rounded-lg shadow-lg">
     <table class="table-fixed border-collapse">
      <thead>
       <tr className="border-b-2 border-[#2D95CA]">
        <th className="p-4">No.</th>
        <th className="p-4">Status Verifikasi</th>
        <th className="p-4">Tanggal Diterima</th>
        <th className="p-4">Intansi</th>
        <th className="p-4">Perihal</th>
        <th className="p-4">Penerima Tugas</th>
        <th className="p-4">Aksi</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td className="p-2">1</td>
        <td className="p-2">Disposisi Kepala SatKer</td>
        <td className="p-2 text-center">01/02/2024</td>
        <td className="p-2">Malcolm Lockyer</td>
        <td className="p-2">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
        <td className="p-2">-</td>
        <td className="flex items-start justify-center p-2">
         <button className="bg-[#2D95CA] p-2 rounded-md">
          <EyeIcon className="text-white" />
         </button>
        </td>
       </tr>
       <tr>
        <td className="p-2">2</td>
        <td className="p-2">Disposisi Kepala SatKer</td>
        <td className="p-2 text-center">01/02/2024</td>
        <td className="p-2">The Eagles</td>
        <td className="p-2">Witchy Woman</td>
        <td className="p-2">-</td>
        <td className="flex items-start justify-center p-2">
         <button className="bg-[#2D95CA] p-2 rounded-md">
          <EyeIcon className="text-white" />
         </button>
        </td>
       </tr>
       <tr className="border-b-2 border-[#2D95CA]">
        <td className="p-2">3</td>
        <td className="p-2">Disposisi Kepala SatKer</td>
        <td className="p-2 text-center">01/02/2024</td>
        <td className="p-2">Shining</td>
        <td className="p-2">Earth, Wind, and Fire</td>
        <td className="p-2">-</td>
        <td className="flex items-start justify-center p-2">
         <button className="bg-[#2D95CA] p-2 rounded-md">
          <EyeIcon className="text-white" />
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
