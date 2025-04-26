/** @type {import('next').NextConfig} */
const nextConfig = {
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
}

export default nextConfig
