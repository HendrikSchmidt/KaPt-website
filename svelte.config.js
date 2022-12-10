import adapter from '@sveltejs/adapter-static';
import preprocess from "svelte-preprocess";

const dev = process.env.NODE_ENV === 'development';

const config = {
	kit: {
		adapter: adapter(),

		files: {
			assets: 'static',
			basePath: dev ? '' : '/KaPt-website',
		},
	},
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
};

export default config;
