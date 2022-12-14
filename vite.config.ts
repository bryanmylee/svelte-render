import {defineConfig} from 'vitest/config';
import {sveltekit} from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['vitest.setup.ts'],
		coverage: {reporter: 'lcov'},
	},
});
