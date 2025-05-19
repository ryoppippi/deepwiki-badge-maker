import type { KnipConfig } from "knip";

export default {
	next: {
		config: ["next.config.{js,ts,cjs,mjs}"],
		entry: [
			"app/**/*.{js,ts,jsx,tsx}",
			"./postcss.config.mjs",
			"./tailwind.config.ts",
		],
	},
} satisfies KnipConfig;
