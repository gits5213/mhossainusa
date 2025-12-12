/**
 * Get image path with basePath support for GitHub Pages
 */
export function getImagePath(path: string): string {
  // In production with basePath, Next.js should handle this automatically
  // But for static export with unoptimized images, we need to handle it manually
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  // Ensure path starts with / and basePath doesn't end with /
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const cleanBasePath = basePath.endsWith("/") ? basePath.slice(0, -1) : basePath;
  return `${cleanBasePath}${cleanPath}`;
}

