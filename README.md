# oti.noroof.dev

Personal site of Octavio Garbarino: resume, portfolio, blog and services. Built with [Astro](https://astro.build) and Tailwind CSS, deployed to GitHub Pages.

## Development

```sh
npm install
npm run dev      # http://localhost:4321 (drafts are visible here)
npm run build    # static output in dist/
npm run check    # type-check .astro and .ts files
```

## Content

All content is Markdown in `src/content/`, validated by the schemas in `src/content.config.ts`.

| Folder        | Used on             | Frontmatter                                                           |
| ------------- | ------------------- | --------------------------------------------------------------------- |
| `experience/` | `/resume`           | `role`, `company`, `period`, `order`                                  |
| `skills/`     | `/resume`           | `title`, `order`                                                      |
| `talks/`      | `/` (home)          | `title`, `order`                                                      |
| `blog/`       | `/blog`, RSS        | `title`, `description`, `date`, `tags?`, `draft?`                     |
| `portfolio/`  | `/portfolio`        | `title`, `summary`, `date`, `role?`, `stack?`, `url?`, `repo?`, `draft?` |
| `about.md`    | `/about`            | none                                                                   |

Entries with `draft: true` only appear in `npm run dev`.

Site-wide settings (email, social links, nav, Formspree id, booking link) live in `src/site.ts`. The services copy is in `src/pages/services.astro`.

## Deploy

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. The custom domain comes from `public/CNAME`.
