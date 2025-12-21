import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // For Cloudflare Pages static deployment
  output: "export",
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
