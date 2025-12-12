import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for static export
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  trailingSlash: true, // Helps with GitHub Pages routing
  // basePath and assetPrefix will be set via environment variables for custom domain
};

export default nextConfig;
