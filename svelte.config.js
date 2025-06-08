import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'out',
			assets: 'out',
			fallback: null,
			precompress: false,
			strict: true,
		}),
		prerender: {
			handleHttpError: ({ path, _referrer, message }) => {
				// Ignore missing assets during prerendering
				if (path === '/favicon.png' || path === '/favicon.svg' || path === '/screenshot.jpeg') {
					console.warn(`Missing asset: ${path}`);
					return;
				}
				throw new Error(message);
			},
		},
	},
};

export default config;
