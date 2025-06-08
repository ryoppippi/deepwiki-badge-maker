import path from 'node:path';
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
		typescript: {
			config(config) {
				config.include.push(path.join(import.meta.dirname, 'vite.config.ts'));
				config.include.push(path.join(import.meta.dirname, 'vitest.config.ts'));
				config.include.push(path.join(import.meta.dirname, 'vitest.browser.config.ts'));
			},
		},
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
