import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import { remarkReadingTime } from './src/utils/remarkReadingTime.ts'
import remarkUnwrapImages from 'remark-unwrap-images'
import rehypeExternalLinks from 'rehype-external-links'
import expressiveCode from 'astro-expressive-code'
import { expressiveCodeOptions } from './src/site.config'
import icon from 'astro-icon'

import vercel from '@astrojs/vercel/serverless'

// Only bundle Simple Icons used on /tools (see src/pages/tools/index.astro).
const simpleIconsInclude = [
	'typescript',
	'python',
	'go',
	'react',
	'nextdotjs',
	'fastapi',
	'nestjs',
	'django',
	'langchain',
	'langgraph',
	'amazonaws',
	'kubernetes',
	'docker',
	'terraform',
	'apachekafka',
	'githubactions',
	'grafana',
	'prometheus',
	'datadog',
	'postgresql',
	'redis',
	'mongodb',
	'amazondynamodb',
	'cursor',
	'anthropic'
]

// https://astro.build/config
export default defineConfig({
	site: 'https://example.me',
	integrations: [
		expressiveCode(expressiveCodeOptions),
		tailwind({
			applyBaseStyles: false
		}),
		sitemap(),
		mdx(),
		icon({
			include: {
				'simple-icons': simpleIconsInclude
			}
		})
	],
	markdown: {
		remarkPlugins: [remarkUnwrapImages, remarkReadingTime],
		rehypePlugins: [
			[
				rehypeExternalLinks,
				{
					target: '_blank',
					rel: ['nofollow, noopener, noreferrer']
				}
			]
		],
		remarkRehype: {
			footnoteLabelProperties: {
				className: ['']
			}
		}
	},
	prefetch: true,
	output: 'server',
	adapter: vercel({
		webAnalytics: { enabled: true }
	})
})
