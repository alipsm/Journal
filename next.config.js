/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash:true,
  reactStrictMode: true,
  // experimental: {
  //   esmExternals: false,
  // },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
}

module.exports = nextConfig
