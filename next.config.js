const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io", // legacy CDN
        pathname: "/f/**",
      },
      {
        protocol: "https",
        hostname: "*.ufs.sh", // new per-app CDN
        pathname: "/f/**",
      },
    ],
  },
};

module.exports = nextConfig;
