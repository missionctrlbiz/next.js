/** @type {import('next').NextConfig} */
const nextConfig = {};

const basePath = process.env.NODE_ENV === 'production' ? '/dashboard' : '';

module.exports = {
  basePath,
};