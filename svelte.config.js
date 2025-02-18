import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({ layout: join(__dirname, 'src/lib/components/Article.svelte'), extensions: ['.md'] })
	],

	kit: {
		adapter: adapter(),
		prerender: {
			handleHttpError: 'ignore'
		},
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/esapyr.github.io' : ''
		}
	},

	extensions: ['.svelte', '.svx', '.md']
};

export default config;
