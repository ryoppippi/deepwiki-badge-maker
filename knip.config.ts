import type { KnipConfig } from "knip";

export default {
	ignoreDependencies: ["tailwindcss", "@sveltejs/adapter-static"],
	svelte: true,
	entry: [
		"src/**/*.{js,ts,svelte}",
		"./postcss.config.mjs",
		"./tailwind.config.ts",
		"./vite.config.ts",
		"./vitest.config.ts"
	]
} satisfies KnipConfig;
