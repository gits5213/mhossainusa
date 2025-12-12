import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Only enable static export for production builds (GitHub Pages)
  ...(process.env.NODE_ENV === "production" && { output: "export" }),
  images: {
    // Only unoptimize for static export (production)
    unoptimized: process.env.NODE_ENV === "production",
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  // Only add trailing slash for production builds
  ...(process.env.NODE_ENV === "production" && { trailingSlash: true }),
  // basePath and assetPrefix will be set via environment variables for custom domain
};

export default nextConfig;
