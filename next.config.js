/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `${process.env.SERVER_URL}/:path*`,
			},
		];
	},
};

module.exports = nextConfig;
