/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "",
        hostname: "",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
