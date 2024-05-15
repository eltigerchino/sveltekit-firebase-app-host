import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	optimizeDeps: {
		entries: ['src/routes/**/+*.{svelte,js,ts}']
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
