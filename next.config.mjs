import path from "node:path";
import { fileURLToPath } from "node:url";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel-friendly defaults
  reactStrictMode: true,
  turbopack: {
    resolveAlias: {
      "@": path.dirname(fileURLToPath(import.meta.url))
    }
  },
  webpack(config) {
    const rootDir = path.dirname(fileURLToPath(import.meta.url));
    config.resolve.alias["@"] = rootDir;
    return config;
  }
};

export default nextConfig;
