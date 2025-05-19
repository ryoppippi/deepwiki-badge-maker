import type { KnipConfig } from "knip";

export default {
	ignoreDependencies: ["tailwindcss"],
	next: {
		config: ["next.config.{js,ts,cjs,mjs}"],
		entry: [
			"app/**/*.{js,ts,jsx,tsx}",
			"./postcss.config.mjs",
			"./tailwind.config.ts",
		],
	},
} satisfies KnipConfig;
