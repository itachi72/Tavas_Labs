/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",      // Emit a fully static site into /out
  trailingSlash: true,   // GitHub Pages needs index.html in each folder

  basePath: "/Tavas_Labs",
  assetPrefix: "/Tavas_Labs/",
};

export default nextConfig;
