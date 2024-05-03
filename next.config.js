/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "i.ibb.co"], // Add "i.ibb.co" to the list of allowed domains
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
