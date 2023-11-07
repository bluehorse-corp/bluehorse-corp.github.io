const isGithub = process.env.BUILD_ENV === 'github';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: isGithub ? 'https://bluehorse-corp.github.io/event.poomang.com/' : undefined,
}

module.exports = nextConfig
