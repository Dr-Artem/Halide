import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	cacheComponents: true,
	partialPrefetching: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'image.tmdb.org',
				pathname: '/t/p/**',
			},
			{
				protocol: 'https',
				hostname: 'img.youtube.com',
				pathname: '/vi/**',
			},
			// {
			// 	protocol: 'https',
			// 	hostname: 'img.clerk.com',
			// 	pathname: '/**',
			// },
			// {
			// 	protocol: 'https',
			// 	hostname: 'api.dicebear.com',
			// 	pathname: '/7.x/**',
			// },
			// {
			// 	protocol: 'https',
			// 	hostname: 'picsum.photos',
			// 	pathname: '/400/600',
			// },
			// {
			// 	protocol: 'https',
			// 	hostname: 'img.freepik.com',
			// 	pathname: '/free-vector/**',
			// },
			// {
			// 	protocol: 'https',
			// 	hostname: 'images.unsplash.com',
			// 	pathname: '/**',
			// },
		],
	},
	turbopack: {
		rules: {
			'*.css': {
				loaders: ['@tailwindcss/turbopack'],
				as: '*.css',
			},
		},
	},
};

export default nextConfig;
