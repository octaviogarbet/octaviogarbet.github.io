// @ts-check
import { defineConfig, envField } from 'astro/config';
import { loadEnv } from 'vite';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

/**
 * Feature flags. Off by default; turn them on with `FEATURE_BLOG=true` / `FEATURE_SERVICES=true`
 * in `.env` (local) or in the deploy workflow (prod). Pages read them from `astro:env/server`.
 * Flagged pages live in `src/features/` and are only routed (and built) when their flag is on.
 * @returns {import('astro').AstroIntegration}
 */
function featureRoutes() {
  return {
    name: 'feature-routes',
    hooks: {
      'astro:config:setup': ({ command, injectRoute }) => {
        const env = loadEnv(command === 'dev' ? 'development' : 'production', process.cwd(), '');
        const isOn = (/** @type {string} */ name) => env[name] === 'true';

        if (isOn('FEATURE_BLOG')) {
          injectRoute({ pattern: '/blog', entrypoint: './src/features/blog/index.astro' });
          injectRoute({ pattern: '/blog/[...id]', entrypoint: './src/features/blog/[...id].astro' });
          injectRoute({ pattern: '/rss.xml', entrypoint: './src/features/blog/rss.xml.ts' });
        }
        if (isOn('FEATURE_SERVICES')) {
          injectRoute({ pattern: '/services', entrypoint: './src/features/services/services.astro' });
        }
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://oti.noroof.dev',
  // Emit `about.html` instead of `about/index.html`: GitHub Pages serves it at both
  // `/about` and `/about.html`, so links from the old Jekyll site keep working.
  build: { format: 'file' },
  trailingSlash: 'never',
  // Case studies used to live under /portfolio; keep old links working.
  redirects: {
    '/portfolio': '/case-studies',
    '/portfolio/[...id]': '/case-studies/[...id]',
  },
  // Code blocks take the site's ink and ground; colour stays reserved for the pillar lines.
  markdown: { shikiConfig: { theme: 'css-variables' } },
  env: {
    schema: {
      FEATURE_BLOG: envField.boolean({ context: 'server', access: 'public', default: false }),
      FEATURE_SERVICES: envField.boolean({ context: 'server', access: 'public', default: false }),
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [featureRoutes(), mdx(), sitemap()],
});
