import type { NextConfig } from "next";

const config: NextConfig = {
  output: "export",        
  basePath: "",             
  assetPrefix: "",           
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  trailingSlash: true        
};
export default config;
