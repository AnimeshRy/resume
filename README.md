# Personal Portfolio & Blog

A modern, responsive portfolio and blog site built with Astro v4, showcasing my professional experience as a Full Stack Software Engineer.

## Live Demo
[Add your deployed site URL here]

## Features

- **Modern Tech Stack:**
  - Built with Astro v4 and TailwindCSS
  - TypeScript support
  - ESLint / Prettier pre-configured

- **Professional Portfolio:**
  - Clean, responsive resume-style layout
  - Dark / Light mode support
  - Skills showcase with categorization (Frontend, Backend, Others)
  - Project showcase with links
  - Experience timeline
  - Certifications section

- **Integrated Blog Platform:**
  - MD & MDX support for blog posts
  - Optimized images via Astro Assets Integration
  - Syntax highlighting with Expressive Code
  - Automatic pagination
  - RSS feed generation
  - SEO-friendly with auto-generated sitemap

## Quick Start

```bash
# Clone this repository
git clone [your-repo-url]

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```text
├── public/
├── src/
    ├── assets/          # Images and static assets
│   ├── components/      # Reusable UI components
│   ├── content/        # Blog posts and content
│   ├── layouts/        # Page layouts
|   ├── pages/          # Route components
|   ├── styles/         # Global styles
|   ├── utils/          # Helper functions
|   ├── site.config.ts  # Site configuration
│   └── types.ts        # TypeScript types
├── astro.config.mjs
├── tailwind.config.js
└── tsconfig.json
```

## Customization

### Site Configuration
Edit `src/site.config.ts` to update:
- Site metadata (title, description)
- Social media links
- Navigation menu

### Content Management
- **Portfolio Content**: Update `src/pages/index.astro` to modify your professional information
- **Blog Posts**: Add `.md` or `.mdx` files to `src/content/`
- **Project Cards**: Modify project components in `src/components/`

### Styling
- Theme colors: Edit `src/styles/app.css`
- Typography: Update fonts in `tailwind.config.js` and `src/styles/app.css`
- Layout: Modify base layouts in `src/layouts/`

## Credits

- Design inspired by [astro-theme-cactus](https://github.com/chrismwilliams/astro-theme-cactus) and [minirezume-framer](https://minirezume.framer.website/)
- Built with [Astro](https://astro.build)

## License

[Add your chosen license]
