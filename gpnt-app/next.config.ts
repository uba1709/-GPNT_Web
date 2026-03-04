import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: '/-GPNT_Web',
  images: {
    unoptimized: true, // Wymagane na GitHub Pages
  },
};

export default nextConfig;
