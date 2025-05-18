import withRspack from 'next-rspack';
import type { NextConfig } from 'next';

const nextConfig  = {
  output: 'export',
  experimental: {
    reactCompiler: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
} satisfies NextConfig;

export default withRspack(nextConfig);
