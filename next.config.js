const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Hostinger's Git integration serves this directory.
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  // Stray lockfiles above this directory make Next infer the user's home
  // folder as the workspace root. Pin it to the project instead.
  outputFileTracingRoot: path.join(__dirname),
}

module.exports = nextConfig
