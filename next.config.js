const isGithub = process.env.BUILD_ENV === 'github' || true;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // basePath: isGithub ? '/event.poomang.com' : undefined,
  assetPrefix: isGithub ? '/event.poomang.com/' : undefined,
}

module.exports = nextConfig
