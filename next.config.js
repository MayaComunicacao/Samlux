/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['painel.samlux.com.br']
  }
};

module.exports = nextConfig;
