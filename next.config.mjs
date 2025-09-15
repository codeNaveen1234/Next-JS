/** @type {import('next').NextConfig} */

import withPWA from 'next-pwa';

const nextConfig = {
  distDir:'build',
  swcMinify:true,
  reactStrictMode:true,
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  nx: {
    svgr: false,
  },
  basePath: '',
};

const pwaConfig =withPWA({
  dest:'public',
  register:true,
  skipWaiting:true,
  disable:process.env.NODE_ENV === 'development',
})

export default pwaConfig(nextConfig);