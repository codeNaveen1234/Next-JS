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
  fallbacks: {document:false},

  // workboxOptions: {
  //   navigateFallback: null
  // },

//   cacheOnFrontEndNav: true,
//   aggressiveFrontEndNavCaching: true,
//   reloadOnOnline: true,
//   swcMinify: true,
//   workboxOptions: {
//     disableDevLogs: true,
//   runtimeCaching: [
//     {
//       urlPattern: /^https:\/\/api\.example\.com\/data.*/i,
//       handler: 'NetworkFirst',
//       options: {
//         cacheName: 'example-api-cache',
//         expiration: {
//           maxEntries: 100,
//           maxAgeSeconds: 60 * 60 * 24 * 7,
//         },
//         cacheableResponse: {
//           statuses: [0, 200],
//         },
//       },
//     },
//     {
//       urlPattern: /.*/i,
//       handler: 'NetworkOnly',
//       options: {
//         cacheableResponse: {
//           statuses: [0, 200],
//         },
//       },
//     },
//   ]
// }
})

export default pwaConfig(nextConfig);