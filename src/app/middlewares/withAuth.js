import {getToken} from "next-auth/jwt";
import {NextResponse} from "next/server";

export default function withAuth(middleware, requireAuth) {
 return async (req, next) => {
  const pathname = req.nextUrl.pathname;

  const res = NextResponse.next();
  res.headers.set(
   "Cache-Control",
   "no-store, no-cache, must-revalidate, proxy-revalidate"
  );
  res.headers.set("Pragma", "no-cache");
  res.headers.set("Expires", "0");
  res.headers.set("Surrogate-Control", "no-store");

  if (
   pathname !== "/login" &&
   requireAuth.some((route) => pathname.startsWith(route))
  ) {
   const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
   });

   if (!token) {
    const url = new URL("/login", req.url);
    url.searchParams.set("callbackUrl", encodeURI(req.url));
    return NextResponse.redirect(url);
   }

   if (
    token.jabatan === "Super Admin" &&
    !pathname.startsWith("/super-admin")
   ) {
    return NextResponse.redirect(new URL("/super-admin", req.url));
   }

   if (
    token.jabatan === "Kepala Satker" &&
    !pathname.startsWith("/kepala-satker")
   ) {
    return NextResponse.redirect(new URL("/kepala-satker", req.url));
   }

   if (
    token.jabatan === "Kepala Subag" &&
    !pathname.startsWith("/kepala-subag")
   ) {
    return NextResponse.redirect(new URL("/kepala-subag", req.url));
   }

   if (
    token.jabatan === "Admin Subag" &&
    !pathname.startsWith("/admin-subag")
   ) {
    return NextResponse.redirect(new URL("/admin-subag", req.url));
   }

   if (token.jabatan === "Pegawai" && !pathname.startsWith("/pegawai")) {
    return NextResponse.redirect(new URL("/pegawai", req.url));
   }
  }

  return middleware(req, next);
 };
}
