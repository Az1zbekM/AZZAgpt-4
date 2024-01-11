/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

// // next.config.js
// module.exports = {
//     reactStrictMode: true,
//     webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//         // Add this line
//         config.module.exports = {
//             ...config.module.exports,
//             experiments: {
//                 topLevelAwait: true,
//             },
//         };

//         // Rest of the configuration...

//         return config;
//     },
// };
