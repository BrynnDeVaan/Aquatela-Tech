/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: basePath || undefined,
  assetPrefix: basePath ? basePath + "/" : undefined,
  trailingSlash: true,
};

module.exports = nextConfig;
