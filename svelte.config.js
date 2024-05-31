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
            base: dev ? '' : '/KaPt-website',
            relative: false
        },

        prerender: {
            entries: ['*', '/news/example', '/en/news/example'],
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
