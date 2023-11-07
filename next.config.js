const isGithub = process.env.BUILD_ENV === 'github';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isGithub ? '/event.poomang.com/' : undefined,
  assetPrefix: isGithub ? '/event.poomang.com/' : undefined,
}

module.exports = nextConfig
