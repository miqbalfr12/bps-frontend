"use client";

import {
 useEditor,
 EditorProvider,
 useCurrentEditor,
 EditorContent,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import {Color} from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";

import {useSession} from "next-auth/react";
import React from "react";
import Modal from "..";
import {X} from "lucide-react";
import Input from "@/components/input";
import ModalSuccess from "../modalSuccess";
import ModalFailed from "../modalFailed";

const MenuBar = ({editor}) => {
 //  const {editor} = useCurrentEditor();

 if (!editor) {
  return null;
 }

 const activeStyle = "bg-neutral-500 text-white rounded px-2 py-1";
 const normalStyle = "bg-neutral-300 text-black rounded px-2 py-1";

 return (
  <div className="bg-neutral-200 rounded-md p-2 mb-2">
   <div className="flex gap-2 flex-wrap">
    <button
     type="button"
     onClick={() => editor.chain().focus().toggleBold().run()}
     disabled={!editor.can().chain().focus().toggleBold().run()}
     className={editor.isActive("bold") ? activeStyle : normalStyle}>
     Bold
    </button>
    <button
     type="button"
     onClick={() => editor.chain().focus().toggleItalic().run()}
     disabled={!editor.can().chain().focus().toggleItalic().run()}
     className={editor.isActive("italic") ? activeStyle : normalStyle}>
     Italic
    </button>
    <button
     type="button"
     onClick={() => editor.chain().focus().toggleStrike().run()}
     disabled={!editor.can().chain().focus().toggleStrike().run()}
     className={editor.isActive("strike") ? activeStyle : normalStyle}>
     Strike
    </button>
    <button
     type="button"
     onClick={() => editor.chain().focus().toggleCode().run()}
     disabled={!editor.can().chain().focus().toggleCode().run()}
     className={editor.isActive("code") ? activeStyle : normalStyle}>
     Code
    </button>
    <button
     type="button"
     onClick={() => editor.chain().focus().unsetAllMarks().run()}
     className={normalStyle}>
     Clear marks
    </button>
    <button
     type="button"
     onClick={() => editor.chain().focus().clearNodes().run()}
     className={normalStyle}>
     Clear nodes
    </button>
    <button
     type="button"
     onClick={() => editor.chain().focus().setParagraph().run()}
     className={editor.isActive("paragraph") ? activeStyle : normalStyle}>
     Paragraph
    </button>
    <button
     type="button"
     onClick={() => editor.chain().focus().toggleHeading({level: 1}).run()}
     className={
      editor.isActive("heading", {level: 1}) ? activeStyle : normalStyle
     }>
     H1
    </button>
    <button
     type="button"
     onClick={() => editor.chain().focus().toggleHeading({level: 2}).run()}
     className={
      editor.isActive("heading", {level: 2}) ? activeStyle : normalStyle
     }>
     H2
    </button>
    <button
     type="button"
     onClick={() => editor.chain().focus().toggleHeading({level: 3}).run()}
     className={
      editor.isActive("heading", {level: 3}) ? activeStyle : normalStyle
     }>
     H3
    </button>
    <button
     type="button"
     onClick={() => editor.chain().focus().toggleHeading({level: 4}).run()}
     className={
      editor.isActive("heading", {level: 4}) ? activeStyle : normalStyle
     }>
     H4
    </button>
    <button
     type="button"
     onClick={() => editor.chain().focus().toggleHeading({level: 5}).run()}
     className={
      editor.isActive("heading", {level: 5}) ? activeStyle : normalStyle
     }>
     H5
    </button>
    <button
     type="button"
     onClick={() => editor.chain().focus().toggleHeading({level: 6}).run()}
     className={
      editor.isActive("heading", {level: 6}) ? activeStyle : normalStyle
     }>
     H6
    </button>
    <button
     type="button"
     onClick={() => editor.chain().focus().toggleBulletList().run()}
     className={editor.isActive("bulletList") ? activeStyle : normalStyle}>
     Bullet list
    </button>
    <button
     type="button"
     onClick={() => editor.chain().focus().toggleOrderedList().run()}
     className={editor.isActive("orderedList") ? activeStyle : normalStyle}>
     Ordered list
    </button>

    <button
     type="button"
     onClick={() => editor.chain().focus().toggleBlockquote().run()}
     className={editor.isActive("blockquote") ? activeStyle : normalStyle}>
     Blockquote
    </button>
    <button
     type="button"
     onClick={() => editor.chain().focus().setHardBreak().run()}
     className={normalStyle}>
     Hard break
    </button>
    <button
     type="button"
     onClick={() => editor.chain().focus().toggleHighlight().run()}
     className={editor.isActive("highlight") ? activeStyle : normalStyle}>
     Highlight
    </button>
    <button
     type="button"
     onClick={() => editor.chain().focus().setTextAlign("left").run()}
     className={
      editor.isActive({textAlign: "left"}) ? activeStyle : normalStyle
     }>
     Left
    </button>
    <button
     type="button"
     onClick={() => editor.chain().focus().setTextAlign("center").run()}
     className={
      editor.isActive({textAlign: "center"}) ? activeStyle : normalStyle
     }>
     Center
    </button>
    <button
     type="button"
     onClick={() => editor.chain().focus().setTextAlign("right").run()}
     className={
      editor.isActive({textAlign: "right"}) ? activeStyle : normalStyle
     }>
     Right
    </button>
    <button
     type="button"
     onClick={() => editor.chain().focus().setTextAlign("justify").run()}
     className={
      editor.isActive({textAlign: "justify"}) ? activeStyle : normalStyle
     }>
     Justify
    </button>
    <button
     type="button"
     onClick={() => editor.chain().focus().undo().run()}
     className={normalStyle}
     disabled={!editor.can().chain().focus().undo().run()}>
     Undo
    </button>
    <button
     type="button"
     onClick={() => editor.chain().focus().redo().run()}
     className={normalStyle}
     disabled={!editor.can().chain().focus().redo().run()}>
     Redo
    </button>
    <button
     type="button"
     onClick={() => editor.chain().focus().setColor("#958DF1").run()}
     className={
      editor.isActive("textStyle", {color: "#958DF1"})
       ? activeStyle
       : normalStyle
     }>
     Purple
    </button>
   </div>
  </div>
 );
};

const extensions = [
 Color.configure({types: [TextStyle.name, ListItem.name]}),
 TextAlign.configure({
  types: ["heading", "paragraph"],
 }),
 Highlight,
 TextStyle.configure({types: [ListItem.name]}),

 StarterKit.configure({
  bulletList: {
   keepMarks: true,
   keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
  },
  orderedList: {
   keepMarks: true,
   keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
  },
 }),
];

const content = `
<h2 style="text-align: center">Hi there,</h2>
<p>
  this is a <em>basic</em> example of <strong>Tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
</p>
<ul>
  <li>
    That’s a bullet list with one …
  </li>
  <li>
    … or two list items.
  </li>
</ul>


<p>
  I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
</p>
<blockquote>
  Wow, that’s amazing. Good work, boy! 👏
  <br />
  — Mom
</blockquote>
`;

const ModalTambahSuratKeluar = ({open, handler, color, refreshData}) => {
 const {data: session} = useSession();
 const [loading, setLoading] = React.useState(false);
 const [openSub, setOpenSub] = React.useState(false);
 const [uploadSurat, setUploadSurat] = React.useState("Buat Surat");

 const editor = useEditor({
  extensions,
  content,
 });

 const handleSub = async (e) => {
  e.preventDefault();
  if (loading) {
   return;
  }
  setLoading(true);
  const formData = new FormData(e.target);

  if (uploadSurat === "Buat Surat") {
   const isi_surat = editor.getHTML();
   formData.append("isi_surat", isi_surat);
  }

  const uploadSuratKeluar = await fetch(`/api/v1.0.0/surat-keluar`, {
   method: "POST",
   headers: {
    authorization: `Bearer ${session.user.token}`,
   },
   cache: "no-store",
   body: formData,
  });
  if (uploadSuratKeluar.ok) {
   setOpenSub("Success");
   refreshData();
   console.log(uploadSuratKeluar);
   console.log(await uploadSuratKeluar.json());
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
     <script src="https://cdn.tailwindcss.com?plugins=typography"></script>
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
      <p className="text-xl font-semibold">TAMBAH SURAT KELUAR</p>
      <button
       type="button"
       onClick={handler}>
       <X />
      </button>
     </div>
     <div className="flex flex-col gap-4 mb-4">
      <div className="flex flex-wrap w-full gap-2 md:flex-nowrap">
       <Input
        label="Tanggal Surat"
        name="tanggal_surat"
        required
        color={color}
        type="date"
       />
       <Input
        label="No. Urut"
        name="no_urut"
        required
        color={color}
        type="number"
       />
       <Input
        label="Jenis Surat"
        name="jenis_surat"
        required
        color={color}
        type="select"
        selectData={[
         {item: "Surat keputusan (SK)", value: "01"},
         {item: "Surat undangan (SU)", value: "02"},
         {item: "Surat permohonan (SPm)", value: "03"},
         {item: "Surat pemberitahuan (SPb)", value: "04"},
         {item: "Surat peminjaman (SPp)", value: "05"},
         {item: "Surat pernyataan (SPn)", value: "06"},
         {item: "Surat mandat (SM)", value: "07"},
         {item: "Surat tugas (ST)", value: "08"},
         {item: "Surat keterangan (SKet)", value: "09"},
         {item: "Surat rekomendasi (SR)", value: "10"},
         {item: "Surat balasan (SB)", value: "11"},
         {item: "Surat perintah perjalanan dinas (SPPD)", value: "12"},
         {item: "Sertifikat (SRT)", value: "13"},
         {item: "Perjanjian kerja (PK)", value: "14"},
         {item: "Surat pengantar (SPeng)", value: "15"},
        ]}
       />
       <Input
        label="Klasifikasi"
        name="klasifikasi"
        required
        color={color}
        type="text"
       />
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
        label="Sifat Tindakan"
        name="sifat_tindakan"
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
      <div className="flex flex-wrap w-full gap-2 md:flex-nowrap">
       <Input
        label="Kepada"
        name="kepada"
        required
        color={color}
        type="text"
        caption="Pisahkan dengan titik koma (;) jika penerima lebih dari satu."
       />
       <Input
        label="Tembusan"
        name="tembusan"
        required
        color={color}
        type="text"
        caption="Pisahkan dengan titik koma (;) jika penerima lebih dari satu."
       />
      </div>
     </div>
     <div className="flex flex-col gap-4 mb-4 ">
      <div className="w-full p-4 rounded-md bg-neutral-300">
       <p className="mb-2 text-lg font-semibold text-black">Isi Surat</p>
       <div className="w-full">
        <div className="my-2 w-full">
         <select
          id="surat"
          name="surat"
          autocomplete="surat"
          onChange={(e) => {
           setUploadSurat(e.target.value);
          }}
          className="block w-full rounded-md border-0 py-2 text-gray-900">
          <option selected>Buat Surat</option>
          <option>Upload Surat</option>
         </select>
        </div>
       </div>
       {uploadSurat === "Upload Surat" && (
        <div className="flex flex-col gap-4  bg-white rounded-lg p-2 ">
         <div>
          <p className="text-xl font-semibold">UNGGAH FILE SURAT</p>
          <p>Silahkan unggah file surat dalam satu file</p>
         </div>
         <div className="w-full p-4 rounded-md bg-neutral-300">
          <p className="mb-2 text-lg font-semibold text-black">UPLOAD FILE</p>
          <label className="block">
           <span className="sr-only">Choose file</span>
           <input
            required={uploadSurat === "Upload Surat" ? true : false}
            type="file"
            name="file"
            className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-50 file:text-gray-600 hover:file:bg-gray-100"
           />
          </label>
         </div>
        </div>
       )}
       {uploadSurat === "Buat Surat" && (
        <div className="bg-white rounded-lg p-2">
         <MenuBar editor={editor} />
         <div className="w-full text-black flex  justify-center items-center prose prose-xs sm:prose-base lg:prose-lg xl:prose-2xl mx-auto border-b-4 border-b-black">
          <div className="w-[20%] h-full p-0 m-0">
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Lambang_Badan_Pusat_Statistik_%28BPS%29_Indonesia.svg/1160px-Lambang_Badan_Pusat_Statistik_%28BPS%29_Indonesia.svg.png" />
          </div>
          <div className="w-full h-full flex flex-col text-center justify-center items-center ">
           <h3 className="text-lg font-bold !m-0 !p-0">
            BADAN PUSAT STATISTIK KOTA TASIKMALAYA
           </h3>
           <p className="text-sm">
            Jl. Sukarindik No.71, Sukarindik, Kec. Bungursari, Kab. Tasikmalaya,
            Jawa Barat 46151 <br />
            Website : https://tasikmalayakota.bps.go.id
           </p>
          </div>
         </div>
         <table className="prose prose-xs sm:prose-base lg:prose-lg xl:prose-2xl mx-auto ">
          <tbody>
           <tr className="!p-0 !m-0 ">
            <td className="text-base p-2 m-0 w-[20%] !border-none !border-0">
             No. Surat
            </td>
            <td className="text-base p-2 m-0  !border-none !border-0">:</td>
            <td className="text-base w-[50%] p-2 m-0 !border-none !border-0">
             ..........
            </td>
            <td className="text-base p-2 m-0 w-[30%] !border-none !border-0 ">
             Tanggal ...........
            </td>
           </tr>
           <tr className="!p-0 !m-0 ">
            <td className="text-base p-2 m-0 !border-none !border-0 w-[20%]">
             Sifat
            </td>
            <td className="text-base p-2 m-0 !border-none !border-0">:</td>
            <td className="w-[50%] text-base p-2 m-0 !border-none !border-0">
             ..........
            </td>
           </tr>
           <tr className="!p-0 !m-0 ">
            <td className="text-base p-2 m-0 !border-none !border-0 w-[20%]">
             Lampiran
            </td>
            <td className="text-base p-2 m-0 !border-none !border-0">:</td>
            <td className="w-[50%] text-base p-2 m-0 !border-none !border-0">
             ..........
            </td>
           </tr>
           <tr className="!p-0 !m-0 ">
            <td className="text-base p-2 m-0 !border-none !border-0 w-[20%]">
             Perihal
            </td>
            <td className="text-base p-2 m-0 !border-none !border-0">:</td>
            <td className="w-[50%] text-base p-2 m-0 !border-none !border-0">
             ..........
            </td>
           </tr>
          </tbody>
         </table>
         <div className="prose prose-xs sm:prose-base lg:prose-lg xl:prose-2xl mx-auto mt-8">
          <p className="text-base">Kepada Yth.</p>
          <p className="text-base">..........</p>
         </div>
         <EditorContent
          className="prose prose-xs sm:prose-base lg:prose-lg xl:prose-2xl mx-auto"
          editor={editor}
          slotBefore={<MenuBar />}
          extensions={extensions}
         />
         <div className="prose prose-xs sm:prose-base lg:prose-lg xl:prose-2xl mx-auto flex justify-end items-end">
          <div>
           <p className="text-base">Kepala</p>
           <p className="text-base pt-20">(Nama Kepala Instansi)</p>
          </div>
         </div>
         <div className="prose prose-xs sm:prose-base lg:prose-lg xl:prose-2xl mx-auto my-8 ">
          <p className="text-base">Tembusan : ......</p>
         </div>
         <div className="w-full p-4 rounded-md bg-neutral-300">
          <p className="mb-2 text-lg font-semibold text-black">
           UPLOAD FILE LAMPIRAN
          </p>
          <label className="block">
           <span className="sr-only">Choose file</span>
           <input
            required={uploadSurat === "Upload Surat" ? true : false}
            type="file"
            name="file"
            className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-50 file:text-gray-600 hover:file:bg-gray-100"
           />
          </label>
         </div>
        </div>
       )}
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
    Surat Keluar Berhasilan Disimpan
   </ModalSuccess>
   <ModalFailed
    open={openSub === "Failed"}
    handler={() => {
     setOpenSub(false);
     handler();
    }}>
    Surat Keluar Gagal Disimpan
   </ModalFailed>
  </>
 );
};

export default ModalTambahSuratKeluar;
