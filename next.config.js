/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "cpjlcwamma.cloudimg.io",
      "images.unsplash.com",
      "source.unsplash.com",
    ],
  },
}

module.exports = nextConfig
