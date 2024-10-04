/** @type {import('next').NextConfig} */
const nextConfig = {
 async rewrites() {
  return [
   {
    source: "/api/v1.0.0/:path*",
    destination: `https://bps-backend.reidteam.web.id/api/v1.0.0/:path*`,
   },
  ];
 },
};

export default nextConfig;
