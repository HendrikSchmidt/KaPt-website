import adapter from '@sveltejs/adapter-static';
import preprocess from "svelte-preprocess";

const config = {
	kit: {
		adapter: adapter(),

		files: {
			assets: 'static',
		},
	},
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
};

export default config;
