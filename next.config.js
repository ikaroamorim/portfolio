const path = require('path')

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
}

const sassOptions= {
    includePaths: [path.join(__dirname, 'styles')],
  }

  const images= {
    domains: ['img.youtube.com','firebasestorage.googleapis.com']
  }

module.exports = {nextConfig, sassOptions, images}

