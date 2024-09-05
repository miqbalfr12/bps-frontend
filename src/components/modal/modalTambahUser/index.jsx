"use client";
import {useSession} from "next-auth/react";
import React from "react";
import Modal from "..";
import {X} from "lucide-react";
import Input from "@/components/input";
import ModalSuccess from "../modalSuccess";
import ModalFailed from "../modalFailed";

const ModalTambahUser = ({open, handler, color, refreshData}) => {
 const {data: session} = useSession();
 const [openSub, setOpenSub] = React.useState(false);
 const [failMsg, setFailMsg] = React.useState("Buat Akun User Gagal Disimpan");
 const handleSub = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const dataObj = {};
  formData.forEach((value, key) => {
   if (value) dataObj[key] = value;
  });
  const createUser = await fetch(`/api/v1.0.0/auth/register`, {
   method: "POST",
   headers: {
    "Content-Type": "application/json",
   },
   body: JSON.stringify(dataObj),
  });
  if (createUser.ok) {
   setOpenSub("Success");
   refreshData();
  } else {
   const err = await createUser.json();
   setOpenSub("Failed");
   setFailMsg(err.message);
  }
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
      <p className="text-xl font-semibold">TAMBAH USER</p>
      <button
       type="button"
       onClick={handler}>
       <X />
      </button>
     </div>
     <div className="flex flex-col gap-4 mb-4">
      <div>
       <p className="text-xl font-semibold">Informasi User</p>
       <p>Lengkapi Informasi User</p>
      </div>
      <div className="flex flex-wrap w-full gap-2 md:flex-nowrap">
       <Input
        label="Nama Lengkap"
        name="fullname"
        required
        color={color}
        type="text"
       />
       <Input
        label="Tanggal Lahir"
        name="birth_date"
        color={color}
        type="date"
       />
      </div>
      <div className="flex flex-wrap w-full gap-2 md:flex-nowrap">
       <Input
        label="NIK"
        name="nik"
        required
        color={color}
        type="text"
       />
       <Input
        label="Email"
        name="email"
        required
        color={color}
        type="email"
       />
       <Input
        label="No. WhatsApp"
        name="phone_number"
        required
        color={color}
        type="text"
       />
      </div>
     </div>
     <div className="flex flex-col gap-4 mb-4">
      <div>
       <p className="text-xl font-semibold">Informasi Kepegawaian</p>
       <p>
        Silahkan isi Informasi Kepegawaian dibawah ini, jika tidak perlu
        kosongkan.
       </p>
      </div>
      <div className="flex flex-wrap w-full gap-2 md:flex-nowrap">
       <Input
        label="Jabatan"
        name="jabatan"
        required
        color={color}
        type="select"
        selectData={[
         "Pegawai",
         "Kepala Satker",
         "Kepala Subag",
         "Admin Subag",
         "Super Admin",
        ]}
       />
       <Input
        label="Satuan Kerja"
        name="satker"
        color={color}
        type="text"
       />
       <Input
        label="Sub Bagian"
        name="subag"
        color={color}
        type="text"
       />
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
       Simpan
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
    Buat Akun User Berhasilan Disimpan
   </ModalSuccess>
   <ModalFailed
    open={openSub === "Failed"}
    handler={() => {
     setOpenSub(false);
     handler();
    }}>
    {failMsg}
   </ModalFailed>
  </>
 );
};

export default ModalTambahUser;
