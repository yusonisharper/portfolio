/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
//const isProd = true;

module.exports = {
  reactStrictMode: true,
  basePath: isProd ? '/portfolio' : '',
  assetPrefix: isProd ? '/portfolio/' : '',
  trailingSlash: true,
};
