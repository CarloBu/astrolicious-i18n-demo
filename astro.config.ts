import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import i18n from '@astrolicious/i18n';
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
	site: 'https://astro-i18n-demo.netlify.app',
	integrations: [
		i18n({
			defaultLocale: 'en',
			locales: ['en', 'fr', 'it'],
			pages: {
				'/about': {
					fr: '/a-propos',
					it: '/chi-siamo',
				},
				'/blog': {
					fr: '/le-blog',
					it: '/il-blog',
				},
				'/blog/[slug]': {
					fr: '/le-blog/[slug]',
				},
				'/tags': {
					fr: '/le-tags',
					it: '/il-tags',
				},
				'/tags/[tag]': {
					fr: '/le-tags/[tag]',
					it: '/il-tags/[tag]',
				},
				'/authors': {
					fr: '/auteurs',
					it: '/autori',
				},
				'/authors/[author]': {
					fr: '/auteurs/[author]',
					it: '/autori/[author]',
				},
			},
			client: {
				data: true,
				paths: true,
			},
			sitemap: true,
		}),
		tailwind(),
		react(),
	],
	output: 'hybrid',
	adapter: netlify({
		imageCDN: false,
	}),
});
