/** @type {import('next').NextConfig} */

// import withPWA from 'next-pwa';
import withPWAInit from "@ducanh2912/next-pwa";

const nextConfig = {
  swcMinify:true,
  reactStrictMode:true,
  experimental: {
    turbo: false,
  }
};

const pwaConfig =withPWAInit({
  dest:'public',
  register:true,
  skipWaiting:true,
  disable:process.env.NODE_ENV === 'development',
  fallbacks:{
    document:false
  }
  // fallbacks: {
  //   // Failed page requests fallback to this.
  //   document: "/~offline",
  //   // This is for /_next/.../.json files.
  //   data: "/fallback.json",
  //   // This is for images.
  //   image: "/fallback.webp",
  //   // This is for audio files.
  //   audio: "/fallback.mp3",
  //   // This is for video files.
  //   video: "/fallback.mp4",
  //   // This is for fonts.
  //   font: "/fallback-font.woff2",
  // },

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

// const withPWA = require("@ducanh2912/next-pwa").default({
//   dest: "public",
//   // ... other options
//   fallbacks: {
//     document: "/_offline", 
//   },
// });

export default pwaConfig(nextConfig);