/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'opengraph.githubassets.com',
            port: '',
            pathname: '/**',
        },]
    }, output: 'export',
}

module.exports = nextConfig
