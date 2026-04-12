/**
 * Reading list / bookmarks shown on the blog index page.
 * - `text`: line label (required). Shown as plain text when `href` is omitted.
 * - `href`: optional URL; when set, `text` is the visible link label.
 */
export type BookmarkItem = {
	text: string
	href?: string
}

export const BOOKMARKS: BookmarkItem[] = [
	{
		text: 'Thoughts on slowing the fuck down',
		href: 'https://mariozechner.at/posts/2026-03-25-thoughts-on-slowing-the-fuck-down/'
	},
	{
		text: 'How React Re-renders Components',
		href: 'https://felixgerschau.com/react-rerender-components/'
	}
]
