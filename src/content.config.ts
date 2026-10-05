import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// The three pillars double as "lines" on the home page map; roles and talks are stops served by one or more lines.
const line = z.enum(['leadership', 'product', 'architecture']);

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    period: z.string(),
    // Years shown in the resume's timetable gutter; `period` is the fallback until they are filled in.
    start: z.number().int().optional(),
    end: z.union([z.number().int(), z.literal('present')]).optional(),
    order: z.number(),
    // Every line (pillar) this role served; a role is an interchange, not a stop on one line.
    lines: z.array(line).default([]),
    // Featured roles are stops on the home page strip; the rest are listed under "Other roles".
    featured: z.boolean().default(false),
  }),
});

const talks = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/talks' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    venue: z.string().optional(),
    lines: z.array(line).default([]),
    // Featured talks are stops on the home page strip; the rest are listed under "Other talks".
    featured: z.boolean().default(false),
  }),
});

// "What I bring to the table" pillars on the home page.
const pillars = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pillars' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    // Route bullet letter and short line name used on the map.
    code: z.string().length(1),
    short: z.string(),
  }),
});

const skills = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/skills' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    lines: z.array(line).default([]),
  }),
});

// About page sections, in order. Sections with a `line` sit on that line; the rest are "off the map".
const about = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/about' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    line: line.optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    // Drafts are visible in `npm run dev` but excluded from production builds.
    draft: z.boolean().default(false),
  }),
});

// Case studies: each carries its system map (stations on a grid, links between them) and optional screenshots.
const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/case-studies' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      role: z.string(),
      order: z.number(),
      start: z.number().int().optional(),
      end: z.union([z.number().int(), z.literal('present')]).optional(),
      // Free-text years when start–end can't tell the story (e.g. "2021–2023, relaunched 2026").
      timeline: z.string().optional(),
      lines: z.array(line).default([]),
      stack: z.array(z.string()).default([]),
      scope: z.array(z.string()).default([]),
      url: z.url().optional(),
      repo: z.url().optional(),
      map: z
        .object({
          stations: z.array(
            z.object({
              id: z.string(),
              label: z.string(),
              sub: z.string().optional(),
              // Grid position: [column, row]. Links route horizontally, then at 45°.
              at: z.tuple([z.number().int().min(0), z.number().int().min(0)]),
              // Which part of the story covers this component.
              section: z.enum(['context', 'original', 'ai', 'outcomes']),
              // Where the label sits, in clear space away from the lines that meet this station.
              side: z.enum(['below', 'above', 'left', 'right', 'below-right']).default('below'),
            }),
          ),
          links: z.array(z.tuple([z.string(), z.string()])),
        })
        .optional(),
      // Real screenshots: desktop ~16:10, mobile ~9:19.5. Blur any personal data first.
      images: z
        .array(z.object({ src: image(), alt: z.string(), caption: z.string().optional(), kind: z.enum(['desktop', 'mobile']) }))
        .default([]),
      draft: z.boolean().default(false),
    }),
});

export const collections = { experience, talks, pillars, skills, about, blog, caseStudies };
