/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  trailingSlash: true,

  // Only apply basePath in production (GitHub Pages).
  // Locally (npm run dev) the site is served at localhost:3000
  basePath:    isProd ? "/Tavas_Labs" : "",
  assetPrefix: isProd ? "/Tavas_Labs/" : "",
};

export default nextConfig;
