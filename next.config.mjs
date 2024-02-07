import './src/env.mjs';
import { hostname } from 'node:os';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', port: '', hostname: 's3-alpha-sig.figma.com' },
    ],
  },
};

export default nextConfig;
