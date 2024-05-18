/** @type {import('next').NextConfig} */

const isProd = true
//const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  reactStrictMode: true,
  basePath: isProd ? '/portfolio' : '',
  assetPrefix: isProd ? '/portfolio/' : '',
  trailingSlash: true,
};
