import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";

const menuSuperAdmin = [
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
  href: "/logout",
  content: "Keluar",
  icon: "PowerIcon",
 },
];
const menuAdminSubag = [
 {
  type: "link",
  href: "/admin-subag",
  content: "Dashboard",
  icon: "LayoutDashboardIcon",
 },
 {
  type: "text",
  content: "MENU UTAMA",
 },
 {
  type: "dropdown",
  content: "Persuratan",
  icon: "LayersIcon",
  items: [
   {
    type: "link",
    href: "/admin-subag/list-surat-masuk",
    content: "Surat Masuk",
   },
   {
    type: "link",
    href: "/admin-subag/list-surat-keluar",
    content: "Surat Keluar",
   },
  ],
 },
 {
  type: "text",
  content: "USER",
 },
 {
  type: "link",
  href: "/logout",
  content: "Keluar",
  icon: "PowerIcon",
 },
];
const menuKepalaSatker = [
 {
  type: "link",
  href: "/kepala-satker",
  content: "Dashboard",
  icon: "LayoutDashboardIcon",
 },
 {
  type: "text",
  content: "MENU UTAMA",
 },
 {
  type: "dropdown",
  content: "Persuratan",
  icon: "LayersIcon",
  items: [
   {
    type: "link",
    href: "/kepala-satker/validasi-disposisi-surat-masuk",
    content: "Validasi/Disposisi Surat Masuk",
   },
   {
    type: "link",
    href: "/kepala-satker/validasi-disposisi-surat-keluar",
    content: "Validasi/Disposisi Surat Keluar",
   },
  ],
 },
 {
  type: "link",
  href: "/kepala-satker/laporan",
  content: "Laporan",
  icon: "BookMarkedIcon",
 },
 {
  type: "text",
  content: "USER",
 },
 {
  type: "link",
  href: "/logout",
  content: "Keluar",
  icon: "PowerIcon",
 },
];
const menuKepalaSubag = [
 {
  type: "link",
  href: "/kepala-subag",
  content: "Dashboard",
  icon: "LayoutDashboardIcon",
 },
 {
  type: "text",
  content: "MENU UTAMA",
 },
 {
  type: "dropdown",
  content: "Persuratan",
  icon: "LayersIcon",
  items: [
   {
    type: "link",
    href: "/kepala-subag/list-surat-masuk",
    content: "Surat Masuk",
   },
   {
    type: "link",
    href: "/kepala-subag/list-surat-keluar",
    content: "Surat Keluar",
   },
  ],
 },
 {
  type: "link",
  href: "/kepala-subag/laporan",
  content: "Laporan",
  icon: "BookMarkedIcon",
 },
 {
  type: "text",
  content: "USER",
 },
 {
  type: "link",
  href: "/logout",
  content: "Keluar",
  icon: "PowerIcon",
 },
];
const menuPegawai = [
 {
  type: "link",
  href: "/pegawai",
  content: "Dashboard",
  icon: "LayoutDashboardIcon",
 },
 {
  type: "text",
  content: "MENU UTAMA",
 },
 {
  type: "dropdown",
  content: "Persuratan",
  icon: "LayersIcon",
  items: [
   {
    type: "link",
    href: "/pegawai/list-surat-masuk",
    content: "Surat Masuk",
   },
   {
    type: "link",
    href: "/pegawai/list-surat-keluar",
    content: "Surat Keluar",
   },
  ],
 },
 {
  type: "text",
  content: "USER",
 },
 {
  type: "link",
  href: "/logout",
  content: "Keluar",
  icon: "PowerIcon",
 },
];

const authOptions = {
 session: {
  strategy: "jwt",
 },
 secret: process.env.NEXTAUTH_SECRET,
 providers: [
  Credentials({
   type: "credentials",
   name: "Credentials",
   credentials: {
    password: {label: "password", type: "password"},
   },
   authorize: async (credentials, req) => {
    const {password} = credentials;
    const userData = await fetch(
     `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1.0.0/auth/signin`,
     {
      method: "POST",
      headers: {
       "Content-Type": "application/json",
      },
      body: JSON.stringify({password}),
     }
    ).then(async (res) => {
     const jsonData = await res.json();
     return {...jsonData, statusCode: res.status};
    });
    if (userData.statusCode === 200) {
     return userData.user;
    } else {
     throw new Error("Password salah");
    }
   },
  }),
 ],
 callbacks: {
  async jwt({token, user, account, profile}) {
   if (account?.provider === "credentials") {
    token.fullname = user.fullname;
    token.email = user.email;
    token.nik = user.nik;
    token.jabatan = user.jabatan;
    token.satker = user.satker;
    token.subag = user.subag;
    token.token = user.token;
    token.expires = Date.now() + 60 * 60 * 12 * 1000; // 12 hours
   }
   return token;
  },
  async session({session, token}) {
   if (Date.now() > token.expires) {
    session = null;
    return session;
   }
   if ("fullname" in token) {
    session.user.fullname = token.fullname;
   }
   if ("email" in token) {
    session.user.email = token.email;
   }
   if ("nik" in token) {
    session.user.nik = token.nik;
   }
   if ("jabatan" in token) {
    session.user.jabatan = token.jabatan;
    if (token.jabatan === "Super Admin") {
     session.user.menuItems = menuSuperAdmin;
     session.user.color = "#005B8A";
    }
    if (token.jabatan === "Admin Subag") {
     session.user.menuItems = menuAdminSubag;
     session.user.color = "#005B8A";
    }
    if (token.jabatan === "Kepala Satker") {
     session.user.menuItems = menuKepalaSatker;
     session.user.color = "#9B4900";
    }
    if (token.jabatan === "Kepala Subag") {
     session.user.menuItems = menuKepalaSubag;
     session.user.color = "#9B4900";
    }
    if (token.jabatan === "Pegawai") {
     session.user.menuItems = menuPegawai;
     session.user.color = "#2B6100";
    }
   }
   if ("token" in token) {
    session.user.token = token.token;
   }
   if ("satker" in token) {
    session.user.satker = token.satker;
   }
   if ("subag" in token) {
    session.user.subag = token.subag;
   }
   return session;
  },
 },
 pages: {
  signIn: "/",
 },
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};
