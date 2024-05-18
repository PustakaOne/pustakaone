/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.springernature.com',
      },
    ],
  },
};

export default nextConfig;
