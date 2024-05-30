/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/dashboard' : ''
};

module.exports = nextConfig;
