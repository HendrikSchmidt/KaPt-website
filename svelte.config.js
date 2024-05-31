import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

const config = {
    kit: {
        adapter: adapter(),

        files: {
            assets: 'static'
        },

        paths: {
            relative: false
        },

        prerender: {
            entries: ['*'],
            handleHttpError: 'warn'
        }
    },
    preprocess: [
        preprocess({
            postcss: true
        })
    ]
};

export default config;
