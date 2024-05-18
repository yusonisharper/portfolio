//const isProd = process.env.NODE_ENV === 'production';
const isProd = true

const basePath = isProd ? '/portfolio' : ''; // get `basePath` for your use-case
export { basePath };