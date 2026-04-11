import type { CollectionEntry } from 'astro:content'
import { getCollection } from 'astro:content'

/** Filters draft work entries in production (same pattern as blog posts). */
export async function getAllWork() {
	return await getCollection('work', ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true
	})
}

export function sortWorkByStartDate(entries: Array<CollectionEntry<'work'>>) {
	return entries.sort((a, b) => b.data.startDate.valueOf() - a.data.startDate.valueOf())
}
