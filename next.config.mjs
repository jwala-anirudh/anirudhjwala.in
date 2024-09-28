/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.svgrepo.com",
      },
    ],
  },
};

export default nextConfig;
