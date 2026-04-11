import { defineCollection, z } from 'astro:content'

function removeDupsAndLowerCase(array: string[]) {
	if (!array.length) return array
	const lowercaseItems = array.map((str) => str.toLowerCase())
	const distinctItems = new Set(lowercaseItems)
	return Array.from(distinctItems)
}

const post = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string().max(200),
			description: z.string().min(4).max(200),
			publishDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			updatedDate: z
				.string()
				.optional()
				.transform((str) => (str ? new Date(str) : undefined)),
			coverImage: z
				.object({
					src: image(),
					alt: z.string()
				})
				.optional(),
			draft: z.boolean().default(false),
			tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
			ogImage: z.string().optional()
		})
})

/** Job history: frontmatter for home + directory; markdown body = detail writeup on /work/[slug]. */
const work = defineCollection({
	type: 'content',
	schema: z.object({
		role: z.string(),
		company: z.string(),
		dateRange: z.string(),
		startDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		summaryBullets: z.array(z.string()).min(1).max(8),
		/** Used in meta + /work directory line; falls back in pages if omitted. */
		description: z.string().min(4).max(300).optional(),
		draft: z.boolean().default(false)
	})
})

export const collections = { post, work }
