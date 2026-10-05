# oti.noroof.dev

Personal site of Octavio Garbarino: resume, portfolio, blog and services. Built with [Astro](https://astro.build) and Tailwind CSS, deployed to GitHub Pages.

## Development

```sh
npm install
npm run dev      # http://localhost:4321 (drafts are visible here)
npm run build    # static output in dist/
npm run check    # type-check .astro and .ts files
```

## Feature flags

Some sections are hidden until their content is ready. Each flag defaults to `false`; when off, its pages aren't built at all and every link to them (nav, footer, home page) is hidden.

| Flag               | Controls                                              |
| ------------------ | ----------------------------------------------------- |
| `FEATURE_BLOG`     | `/blog`, posts, `/rss.xml`, "Latest writing" on home  |
| `FEATURE_SERVICES` | `/services`, the "Work with me" button on home        |

- **Locally:** `cp .env.example .env` (gitignored) and set the flags you want, then restart `npm run dev`.
- **In prod:** add the flag to the build step in `.github/workflows/deploy.yml`, e.g.

  ```yaml
  - uses: withastro/action@v6
    env:
      FEATURE_BLOG: true
  ```

Flagged pages live in `src/features/` and are routed from `astro.config.mjs`.

## Content

All content is Markdown in `src/content/`, validated by the schemas in `src/content.config.ts`.

| Folder        | Used on             | Frontmatter                                                           |
| ------------- | ------------------- | --------------------------------------------------------------------- |
| `experience/` | `/resume`, `/` (home) | `role`, `company`, `period`, `order`, `line?`                       |
| `skills/`     | `/resume`           | `title`, `order`                                                      |
| `pillars/`    | `/` (home)          | `title`, `order`, `code` (route letter), `short` (line name)          |
| `talks/`      | `/` (home)          | `title`, `order`, `venue?`, `line?`, `featured?`                      |
| `blog/`       | `/blog`, RSS        | `title`, `description`, `date`, `tags?`, `draft?`                     |
| `portfolio/`  | `/portfolio`        | `title`, `summary`, `date`, `role?`, `stack?`, `url?`, `repo?`, `draft?` |
| `about.md`    | `/about`            | none                                                                   |

Entries with `draft: true` only appear in `npm run dev`.

On the home page each pillar is a transit "line" (`leadership`, `product`, `architecture`, the pillar file names). Talks and roles with a matching `line` become stops on it: featured talks as filled stops, roles as hollow ones. Non-featured talks are listed under "More talks".

Site-wide settings (email, social links, nav, Formspree id, booking link) live in `src/site.ts`. The services copy is in `src/features/services/services.astro`.

## Deploy

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. The custom domain comes from `public/CNAME`.
