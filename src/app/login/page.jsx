"use client";
import Image from "next/image";
import {signIn} from "next-auth/react";
import ModalFailed from "@/components/modal/modalFailed";
import {useState} from "react";

export default function Home() {
 const [openSub, setOpenSub] = useState(false);
 const onHandlerSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  try {
   const ress = await signIn("credentials", {
    redirect: false,
    password: formData.get("password"),
    callbackUrl: "/pegawai",
   });
   if (ress.error) {
    setOpenSub(ress.error);
   }
   if (ress.ok) {
    window.location.href = ress.url;
   }
  } catch (error) {
   setOpenSub(error);
  }
 };

 return (
  <main className="min-h-screen bg-[url('/img/bps-tasik.png')] bg-cover bg-center lg:bg-left-bottom min-w-screen">
   <div className="flex justify-center w-full h-full md:justify-end ">
    <div className="lg:relative p-8 flex flex-col justify-center items-center lg:w-[30%] h-screen ">
     <form
      onSubmit={onHandlerSubmit}
      className="flex flex-col items-center w-full h-auto gap-4 p-10 text-black bg-white lg:absolute left-1/2 rounded-xl justiitems-start">
      <Image
       src="/svg/bps.svg"
       alt="logo"
       width={200}
       height={200}></Image>
      <div className="flex flex-col items-center">
       <p className="text-3xl font-bold">SIMPEL</p>
       <p className="text-2xl font-bold">BPS TASIKMALAYA</p>
      </div>
      <div className="w-full">
       <p className="text-lg">Password</p>
       <input
        className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-[#2D95CA] focus:outline-none"
        type="password"
        name="password"
        placeholder="Password"></input>
      </div>
      <div className="w-full">
       <button className="w-full px-3 py-2 bg-[#2D95CA] text-white rounded-md">
        Login
       </button>
      </div>
     </form>
    </div>
    <div className="hidden lg:flex flex-col w-[30%] min-h-screen ">
     <div className="bg-[#2D95CA] grow"></div>
     <div className="bg-[#76B445] grow"></div>
     <div className="bg-[#E28839] grow"></div>
    </div>
   </div>
   <ModalFailed
    open={openSub ? true : false}
    handler={() => {
     setOpenSub(false);
    }}>
    {openSub}
   </ModalFailed>
  </main>
 );
}
