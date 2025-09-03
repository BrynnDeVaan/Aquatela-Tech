/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/Aquatela-Tech",
  assetPrefix: "/Aquatela-Tech/",
  trailingSlash: true,
  eslint: { ignoreDuringBuilds: true },
};
export default nextConfig;
