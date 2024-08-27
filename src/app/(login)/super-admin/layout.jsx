"use client";
import iconMap from "@/components/icon";
import {ChevronDown, ChevronUp, MenuIcon} from "lucide-react";
import Link from "next/link";
import React, {useState} from "react";

const menuItems = [
 {
  type: "link",
  href: "/super-admin",
  content: "Dashboard",
  icon: "LayoutDashboardIcon",
 },
 {
  type: "text",
  content: "MENU UTAMA",
 },
 {
  type: "dropdown",
  content: "Pengaturan",
  icon: "SettingsIcon",
  items: [
   {
    type: "link",
    href: "/super-admin/lembaga",
    content: "Lembaga",
   },
   {
    type: "link",
    href: "/super-admin/list-jabatan",
    content: "Jabatan",
   },
   {
    type: "link",
    href: "/super-admin/list-users",
    content: "Users",
   },
  ],
 },
 {
  type: "dropdown",
  content: "Persuratan",
  icon: "LayersIcon",
  items: [
   {
    type: "link",
    href: "/super-admin/list-surat-masuk",
    content: "Surat Masuk",
   },
   {
    type: "link",
    href: "/super-admin/list-surat-keluar",
    content: "Surat Keluar",
   },
  ],
 },
 {
  type: "link",
  href: "/super-admin/laporan",
  content: "Laporan",
  icon: "BookMarkedIcon",
 },
 {
  type: "text",
  content: "USER",
 },
 {
  type: "link",
  href: "/",
  content: "Keluar",
  icon: "PowerIcon",
 },
];

const Layout = ({children}) => {
 const [isAsideVisible, setIsAsideVisible] = useState(true);

 const toggleAside = () => {
  setIsAsideVisible(!isAsideVisible);
 };

 const [openIndexes, setOpenIndexes] = useState({});

 const toggleDropdown = (index) => {
  setOpenIndexes((prevState) => ({
   ...prevState,
   [index]: !prevState[index],
  }));
 };

 return (
  <div className="flex w-full h-screen overflow-hidden bg-[#005B8A]">
   <aside
    className={`bg-[#005B8A] overflow-y-auto  text-white transition-all duration-300 ease-in-out ${
     isAsideVisible ? "w-[350px] translate-x-0" : "w-0 -translate-x-full"
    }`}>
    <div className="h-[87px] flex items-center px-8">
     <p className="text-2xl font-bold">SIMPEL</p>
    </div>
    <ul className="flex flex-col gap-8 px-8 mb-20">
     {menuItems.map((item, index) => {
      const IconComponent = iconMap[item.icon];
      if (item.type === "link") {
       return (
        <li key={index}>
         <Link
          href={item.href}
          className="flex gap-2">
          {IconComponent} {item.content}
         </Link>
        </li>
       );
      }
      if (item.type === "text") {
       return (
        <li key={index}>
         <p className="ml-4 text-lg font-bold opacity-50">{item.content}</p>
        </li>
       );
      }
      if (item.type === "dropdown") {
       const isOpen = openIndexes[index];
       return (
        <li key={index}>
         <button
          className="flex justify-between w-full"
          onClick={() => toggleDropdown(index)}>
          <span className="flex gap-2">
           {iconMap[item.icon]} {item.content}
          </span>
          {isOpen ? <ChevronUp /> : <ChevronDown />}
         </button>
         <ul
          className={`flex flex-col gap-6 mt-6 ${isOpen ? "block" : "hidden"}`}>
          {item.items.map((subItem, subIndex) => (
           <li key={subIndex}>
            <Link
             href={subItem.href}
             className="flex gap-2 ml-8">
             {subItem.content}
            </Link>
           </li>
          ))}
         </ul>
        </li>
       );
      }
      return null;
     })}
    </ul>
   </aside>
   <div className="flex flex-col flex-1">
    <header className="h-[87px] w-full text-black bg-white flex-shrink-0 shadow-sm px-8">
     <nav className="flex items-center justify-between h-full">
      <button onClick={toggleAside}>
       <MenuIcon />
      </button>
      <div className="flex items-center gap-4">
       <div className="flex flex-col items-end">
        <p className="text-lg font-semibold">:Nama Lengkap:</p>
        <p>:Jabatan:</p>
       </div>
      </div>
     </nav>
    </header>
    <main className="flex-1 overflow-y-auto bg-[#ebebeb]">{children}</main>
   </div>
  </div>
 );
};

export default Layout;
