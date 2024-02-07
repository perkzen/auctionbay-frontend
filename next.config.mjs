import './src/env.mjs';
import { hostname } from 'node:os';

/** @type {import('next').NextConfig} */
const nextConfig = {
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
