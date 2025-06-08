import { defineWorkspace } from 'vitest/config';

export default defineWorkspace([
	{
		extends: './vitest.config.ts',
		test: {
			name: 'unit',
			include: ['src/**/*.{test,spec}.{js,ts}'],
		},
	},
	{
		extends: './vitest.config.ts',
		test: {
			name: 'browser',
			include: ['src/**/*.browser.{test,spec}.{js,ts}'],
			browser: {
				enabled: true,
				name: 'chromium',
				provider: 'playwright',
				headless: true,
			},
		},
	},
]);
