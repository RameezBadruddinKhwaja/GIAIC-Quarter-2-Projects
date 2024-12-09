import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**", // Allow all paths under Unsplash
      },
    ],
  },
  // Add other Next.js configuration options here if needed
};

export default nextConfig;
