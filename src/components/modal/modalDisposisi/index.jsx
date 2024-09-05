import React from "react";
import Modal from "..";
import {X} from "lucide-react";
import ModalSuccess from "../modalSuccess";
import ModalViewPDF from "../modalViewPDF";
import Select from "react-select";
import {useSession} from "next-auth/react";
import ModalFailed from "../modalFailed";

const ModalDisposisi = ({
 open,
 handler,
 color,
 data,
 dataPegawai,
 handleRefresh,
}) => {
 const {data: session} = useSession();
 const [openSub, setOpenSub] = React.useState(false);
 const [failMsg, setFailMsg] = React.useState("");

 const [openView, setOpenView] = React.useState(false);
 const handleView = () => {
  setOpenView((prev) => !prev);
 };

 const [selectedOptions, setSelectedOptions] = React.useState(null);

 const setHandle = (e) => {
  setSelectedOptions(Array.isArray(e) ? e.map((d) => d.value) : []);
 };

 const handleSub = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  const payload = {
   disposisi: selectedOptions,
   surat_masuk_id: data.surat_masuk_id,
   catatan: formData.get("catatan"),
  };

  const kirimDisposisi = await fetch("/api/v1.0.0/disposisi", {
   method: "POST",
   headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${session.user.token}`,
   },
   cache: "no-store",
   body: JSON.stringify(payload),
  });

  if (kirimDisposisi.ok) {
   setOpenSub("Success");
   handleRefresh();
  } else {
   setOpenSub("Failed");
   const err = await kirimDisposisi.json();
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
     className="w-full px-8">
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
      <p className="text-xl font-semibold">Disposisi Surat</p>
      <button
       type="button"
       onClick={handler}>
       <X />
      </button>
     </div>

     {data && (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
       <div>
        <div className="flex flex-col gap-4 mb-4">
         <p className="text-xl font-semibold">Informasi Persuratan</p>
         <table className="w-full table-fixed">
          <tbody>
           <tr>
            <td className="w-1/3">No. Agenda</td>
            <td className="w-1/12">:</td>
            <td className="border-b-2 border-black border-opacity-25">
             {data.no_agenda}
            </td>
           </tr>
           <tr>
            <td>Kode Klasifikasi</td>
            <td>:</td>
            <td className="border-b-2 border-black border-opacity-25">
             {data.klasifikasi}
            </td>
           </tr>
           <tr>
            <td>Sifat Tindakan</td>
            <td>:</td>
            <td className="border-b-2 border-black border-opacity-25">
             {data.sifat_tindakan}
            </td>
           </tr>
           <tr>
            <td>Diterima Tanggal</td>
            <td>:</td>
            <td className="border-b-2 border-black border-opacity-25">
             {data.tanggal_diterima}
            </td>
           </tr>
          </tbody>
         </table>
        </div>
        <div className="flex flex-col gap-4 mb-4">
         <p className="text-xl font-semibold">Informasi Persuratan</p>
         <table className="w-full table-fixed">
          <tbody>
           <tr>
            <td className="w-1/3">No. Surat</td>
            <td className="w-1/12">:</td>
            <td className="border-b-2 border-black border-opacity-25">
             {data.no_surat}
            </td>
           </tr>
           <tr>
            <td>Instansi</td>
            <td>:</td>
            <td className="border-b-2 border-black border-opacity-25">
             {" "}
             {data.instansi_pengirim}
            </td>
           </tr>
           <tr>
            <td>Perihal</td>
            <td>:</td>
            <td className="border-b-2 border-black border-opacity-25">
             {data.perihal_surat}
            </td>
           </tr>
           <tr>
            <td>Tanggal Surat</td>
            <td>:</td>
            <td className="border-b-2 border-black border-opacity-25">
             {data.tanggal_surat}
            </td>
           </tr>
           <tr>
            <td>Lampiran</td>
            <td>:</td>
            <td className="border-b-2 border-black border-opacity-25">
             {data.jumlah_lampiran}
            </td>
           </tr>
          </tbody>
         </table>
        </div>
        <div className="flex flex-col gap-4 mb-4">
         <div className="w-full p-4 rounded-md bg-neutral-300">
          <p className="mb-2 text-lg font-semibold text-black">File</p>
          <div className="flex gap-4">
           <button
            type="button"
            onClick={handleView}
            className={`flex items-center justify-center w-full px-4 py-2 text-gray-600 bg-white border-2 border-gray-300 rounded-md cursor-pointer hover:text-white ${
             color === "blue"
              ? "hover:bg-[#2D95CA]"
              : color === "green"
              ? "hover:bg-[#76B445]"
              : color === "yellow"
              ? "hover:bg-[#E28839]"
              : "hover:bg-black"
            }`}>
            Preview
           </button>
          </div>
         </div>
        </div>
       </div>
       <div className="flex flex-col justify-end">
        <div className="flex flex-col gap-4 mb-4">
         <table className="w-full table-fixed">
          <tbody>
           <tr>
            <td className="w-1/3">Status Persuratan</td>
            <td className="w-1/12">:</td>
            <td className="border-b-2 border-black border-opacity-25">
             {data.status_persuratan}
            </td>
           </tr>
           <tr>
            <td>Tanggal Update</td>
            <td>:</td>
            <td className="border-b-2 border-black border-opacity-25">
             {data.updated_at}
            </td>
           </tr>
          </tbody>
         </table>
        </div>
        <div className="flex flex-col gap-4 mb-4">
         <div className="w-full p-4 rounded-md bg-neutral-300">
          <p className="mb-2 text-lg text-black">Disposisi</p>
          <div className="flex gap-4 mb-2">
           <Select
            options={dataPegawai}
            onChange={setHandle}
            isMulti
            required
            className={`w-full  ${
             color === "blue"
              ? "!focus:border-[#2D95CA]"
              : color === "green"
              ? "!focus:border-[#76B445]"
              : color === "yellow"
              ? "!focus:border-[#E28839]"
              : "!focus:border-black"
            } focus:outline-none`}
           />
          </div>
         </div>
         <div className="w-full p-4 rounded-md bg-neutral-300">
          <p className="mb-2 text-lg text-black">Catatan</p>
          <div className="flex gap-4">
           <textarea
            name="catatan"
            id="catatan"
            className={`flex items-center justify-center w-full px-4 py-2 text-gray-600 bg-white border-2 border-gray-300 rounded-md   `}></textarea>
          </div>
         </div>
        </div>
       </div>
      </div>
     )}

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
     setOpenSub((prev) => !prev);
     handler();
    }}>
    Surat Masuk Berhasilan Disimpan
   </ModalSuccess>
   <ModalFailed
    open={openSub === "Failed"}
    handler={() => {
     setOpenSub((prev) => !prev);
    }}>
    {failMsg}
   </ModalFailed>
   <ModalViewPDF
    open={openView}
    file={data?.file}
    color={color}
    handler={() => {
     handleView();
    }}></ModalViewPDF>
  </>
 );
};

export default ModalDisposisi;
