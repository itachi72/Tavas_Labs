/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",      // Emit a fully static site into /out
  trailingSlash: true,   // GitHub Pages needs index.html in each folder

  // If this is a PROJECT page (username.github.io/repo-name), uncomment and
  // replace YOUR_REPO_NAME with your exact GitHub repository name:
  // basePath: "/YOUR_REPO_NAME",
  // assetPrefix: "/YOUR_REPO_NAME/",

  // If this is a USER page (repo is named username.github.io), leave those
  // two lines commented out — no basePath is needed.
};

export default nextConfig;
