/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash:true,
  experimental: {
    esmExternals: false,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
