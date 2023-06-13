import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { postcss } from './postcss.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess({ postcss }),

	kit: {
		adapter: adapter()
	}
};

export default config;
