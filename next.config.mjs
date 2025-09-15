/** @type {import('next').NextConfig} */

import withPWA from 'next-pwa';

const nextConfig = {
  swcMinify:true,
  reactStrictMode:true,
  experimental: {
    turbo: false,
  }
};

const pwaConfig =withPWA({
  dest:'public',
  register:true,
  skipWaiting:true,
  disable:process.env.NODE_ENV === 'development',
  fallbacks: {},
  workboxOptions: {
    navigateFallback: null,
    runtimeCaching: [],
  },
})

export default pwaConfig(nextConfig);