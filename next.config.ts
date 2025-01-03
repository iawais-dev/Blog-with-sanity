import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.sanity.io'], // Add Sanity's CDN as an allowed image source
  },
};

export default nextConfig;
