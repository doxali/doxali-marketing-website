import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  eslint: {
    // This disables ESLint errors from breaking the production buildddd
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
