import {NextResponse} from "next/server";
import withAuth from "./app/middlewares/withAuth";

export function mainMiddleware(req) {
 const res = NextResponse.next();
 return res;
}
export default withAuth(mainMiddleware, [
 "/super-admin",
 "/kepala-satker",
 "/kepala-subag",
 "/admin-subag",
 "/pegawai",
]);
