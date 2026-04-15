/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/Tavas_Labs" : "";

const nextConfig = {
  output: "export",
  trailingSlash: true,

  // Only apply basePath in production (GitHub Pages).
  // Locally (npm run dev) the site is served at localhost:3000
  basePath,
  assetPrefix: isProd ? "/Tavas_Labs/" : "",

  // Expose basePath to client components so plain <img>/<video> can prefix paths
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
