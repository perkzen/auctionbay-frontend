import './src/env.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        port: '',
        hostname: 'auctionbay-bucket.s3.eu-central-1.amazonaws.com',
      },
    ],
  },
};

export default nextConfig;
