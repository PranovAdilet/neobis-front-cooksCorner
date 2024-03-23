/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['res.cloudinary.com'],
    },
    env: {
        SERVER_URL: process.env.SERVER_URL,
        ENDPOINT: process.env.ENDPOINT
    }
};

export default nextConfig;

