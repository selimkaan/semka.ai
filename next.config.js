/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: false,
    experimental: {
        forceSwcTransforms: false,
    },
    trailingSlash: true,
};

module.exports = nextConfig;