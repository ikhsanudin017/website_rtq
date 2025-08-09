import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Use standalone output for Vercel deployment with API routes
  output: 'standalone',
  images: {
    unoptimized: true,
  },
}

export default nextConfig;
