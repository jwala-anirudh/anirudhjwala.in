/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.svgrepo.com",
      },
    ],
  },
  output: "export",
};

export default nextConfig;
