/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/English-Portal',
  assetPrefix: '/English-Portal/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
