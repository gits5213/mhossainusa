import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
// Set basePath for GitHub Pages (use environment variable or default to /mhossainusa)
// Empty string means custom domain (no basePath), undefined/null means use default
const basePathEnv = process.env.BASE_PATH;
const basePath = basePathEnv !== undefined 
  ? basePathEnv 
  : (isProduction ? "/mhossainusa" : "");

const nextConfig: NextConfig = {
  // Only enable static export for production builds (GitHub Pages)
  ...(isProduction && { output: "export" }),
  // Set basePath for GitHub Pages subdirectory (empty string = no basePath for custom domain)
  // Only set basePath if it's explicitly provided (even if empty)
  ...(basePathEnv !== undefined && { basePath }),
  // Set assetPrefix to match basePath for correct asset loading
  ...(basePathEnv !== undefined && basePath && { assetPrefix: basePath }),
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
