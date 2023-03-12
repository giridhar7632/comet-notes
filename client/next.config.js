// /** @type {import('next').NextConfig} */
// const withPWA = require('next-pwa')({
// 	dest: 'public',
// 	register: true,
// 	disable: process.env.NODE_ENV === 'development',
// 	skipWaiting: true,
// })

// module.exports = withPWA()
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	output: 'export',
	images: {
		unoptimized: true,
	},
}

module.exports = nextConfig
