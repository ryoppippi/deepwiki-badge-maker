import process from 'node:process';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { isDevelopment } from 'std-env';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'out',
			assets: 'out',
		}),
		paths: {
			/**
			  @see https://developers.cloudflare.com/pages/configuration/build-configuration#environment-variables
			  @see https://kit.svelte.jp/docs/configuration#paths
			 */
			assets: (isDevelopment
				? ''
				: process.env.CF_PAGES_BRANCH !== 'main'
					? process.env.CF_PAGES_URL
					: undefined) ?? 'https://deepwiki.ryoppippi.com',
		},
	},
};

export default config;
