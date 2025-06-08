import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { isDevelopment } from 'std-env';
import Icons from 'unplugin-icons/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		Icons({
			compiler: 'svelte',
			autoInstall: isDevelopment,
		}),
		sveltekit(),
	],
});
