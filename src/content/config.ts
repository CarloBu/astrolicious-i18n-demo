import { defineCollection, reference, z } from 'astro:content';

export const collections = {
	posts: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string(),
			author: reference('author'),
			defaultLocaleVersion: reference('posts').optional(),
			tags: z.array(reference('tags')),
		}),
	}),
	tags: defineCollection({
		type: 'data',
		schema: z.object({
			defaultLocaleVersion: reference('tags').optional(),
			title: z.string(),
			description: z.string(),
		}),
	}),
	author: defineCollection({
		type: 'data',
		schema: z.object({
			name: z.string(),
		}),
	}),
};
