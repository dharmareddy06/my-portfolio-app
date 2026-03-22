import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/my-portfolio-app',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
