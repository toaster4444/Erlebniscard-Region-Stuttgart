import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel-friendly defaults
  reactStrictMode: true,
  webpack(config) {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  }
};

export default nextConfig;
