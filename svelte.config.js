import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		adapter: adapter(),

		files: {
			assets: 'static',
		},
	},
};

export default config;
