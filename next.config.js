/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  // output: 'export',
  assetPrefix: isProd ? 'https://creekroadauto.com.au/ropetest.com.au/' : undefined,
  //assetPrefix: isProd ? '/ropetest.com.au/' : undefined,
  reactStrictMode: true,
  optimizeFonts: true,
}

module.exports = nextConfig
