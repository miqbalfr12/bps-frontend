"use client";
import {useSession} from "next-auth/react";
import React from "react";
import Modal from "..";
import {X} from "lucide-react";
import Input from "@/components/input";
import ModalSuccess from "../modalSuccess";
import ModalFailed from "../modalFailed";

const ModalTambahSuratMasuk = ({open, handler, color, refreshData}) => {
 const {data: session} = useSession();
 const [loading, setLoading] = React.useState(false);
 const [openSub, setOpenSub] = React.useState(false);
 const handleSub = async (e) => {
  e.preventDefault();
  if (loading) {
   return;
  }
  setLoading(true);
  const formData = new FormData(e.target);
  const uploadSuratMasuk = await fetch(`/api/v1.0.0/surat-masuk`, {
   method: "POST",
   headers: {
    authorization: `Bearer ${session.user.token}`,
   },
   cache: "no-store",
   body: formData,
  });
  if (uploadSuratMasuk.ok) {
   setOpenSub("Success");
   refreshData();
  } else {
   setOpenSub("Failed");
  }
  setLoading(false);
 };

 return (
  <>
   <Modal
    open={open}
    handler={handler}>
    <form
     onSubmit={handleSub}
     className="px-8">
     <div
      className={`flex justify-between w-full pb-2 border-b-2 ${
       color === "blue"
        ? "border-[#2D95CA]"
        : color === "green"
        ? "border-[#76B445]"
        : color === "yellow"
        ? "border-[#E28839]"
        : "border-black"
      } mb-4 `}>
      <p className="text-xl font-semibold">TAMBAH SURAT MASUK</p>
      <button
       type="button"
       onClick={handler}>
       <X />
      </button>
     </div>
     <div className="flex flex-col gap-4 mb-4">
      <div>
       <p className="text-xl font-semibold">Informasi Umum</p>
       <p>Lengkapi Informasi pada Surat Masuk</p>
      </div>
      <div className="flex flex-wrap w-full gap-2 md:flex-nowrap">
       <Input
        label="Nomor Surat"
        name="no_surat"
        required
        color={color}
        type="text"
       />
       <Input
        label="Tanggal Surat"
        name="tanggal_surat"
        required
        color={color}
        type="date"
       />
       <Input
        label="Tanggal Diterima"
        name="tanggal_diterima"
        required
        color={color}
        type="date"
       />
      </div>
      <div className="flex flex-wrap w-full gap-2 md:flex-nowrap">
       <Input
        label="Instansi Pengirim"
        name="instansi_pengirim"
        required
        color={color}
        type="text"
       />
       <Input
        label="No. Agenda"
        name="no_agenda"
        required
        color={color}
        type="text"
       />
       <Input
        label="Klasifikasi"
        name="klasifikasi"
        required
        color={color}
        type="text"
       />
      </div>
      <Input
       label="Perihal Surat"
       name="perihal_surat"
       required
       color={color}
       type="text"
      />
     </div>
     <div className="flex flex-col gap-4 mb-4">
      <div>
       <p className="text-xl font-semibold">Informasi Tambahan</p>
       <p>Silahkan Lengkapi Informasi Tambahan dibawah ini</p>
      </div>
      <div className="flex flex-wrap w-full gap-2 md:flex-nowrap">
       <Input
        label="Jumlah Lampiran"
        name="jumlah_lampiran"
        required
        color={color}
        type="number"
       />
       <Input
        label="Status Surat"
        name="status_surat"
        required
        color={color}
        type="text"
       />
       <Input
        label="Sifat Tindakan"
        name="sifat_tindakan"
        required
        color={color}
        type="text"
       />
      </div>
     </div>
     <div className="flex flex-col gap-4 mb-4">
      <div>
       <p className="text-xl font-semibold">UNGGAH FILE SURAT</p>
       <p>Silahkan unggah file surat dalam satu file</p>
      </div>
      <div className="w-full p-4 rounded-md bg-neutral-300">
       <p className="mb-2 text-lg font-semibold text-black">UPLOAD FILE</p>
       <label className="block">
        <span className="sr-only">Choose file</span>
        <input
         required
         type="file"
         name="file"
         className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-50 file:text-gray-600 hover:file:bg-gray-100"
        />
       </label>
      </div>
     </div>
     <div
      className={`pt-2 border-t-2 flex justify-end ${
       color === "blue"
        ? "border-[#2D95CA]"
        : color === "green"
        ? "border-[#76B445]"
        : color === "yellow"
        ? "border-[#E28839]"
        : "border-black"
      } mt-4`}>
      <button
       onClick={handler}
       type="button"
       className="px-4 py-2">
       Tutup
      </button>
      <button
       type="submit"
       className={`px-4 py-2 rounded-lg text-white ${
        color === "blue"
         ? "bg-[#2D95CA]"
         : color === "green"
         ? "bg-[#76B445]"
         : color === "yellow"
         ? "bg-[#E28839]"
         : "bg-black"
       } `}>
       {loading ? "Loading" : "Simpan"}
      </button>
     </div>
    </form>
   </Modal>
   <ModalSuccess
    open={openSub === "Success"}
    handler={() => {
     setOpenSub(false);
     handler();
    }}>
    Surat Masuk Berhasilan Disimpan
   </ModalSuccess>
   <ModalFailed
    open={openSub === "Failed"}
    handler={() => {
     setOpenSub(false);
     handler();
    }}>
    Surat Masuk Gagal Disimpan
   </ModalFailed>
  </>
 );
};

export default ModalTambahSuratMasuk;
