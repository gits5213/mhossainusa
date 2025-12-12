import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
// Set basePath for GitHub Pages (use environment variable or default to /mhossainusa)
const basePath = process.env.BASE_PATH || (isProduction ? "/mhossainusa" : "");

const nextConfig: NextConfig = {
  // Only enable static export for production builds (GitHub Pages)
  ...(isProduction && { output: "export" }),
  // Set basePath for GitHub Pages subdirectory
  ...(basePath && { basePath }),
  // Set assetPrefix to match basePath for correct asset loading
  ...(basePath && { assetPrefix: basePath }),
  images: {
    // Only unoptimize for static export (production)
    unoptimized: isProduction,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  // Only add trailing slash for production builds
  ...(isProduction && { trailingSlash: true }),
  // Expose basePath to client-side code
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
