import { getCollection, type CollectionKey } from 'astro:content';

/** Entries of an ordered collection (experience, talks, pillars, skills, about), sorted by `order`. */
export async function getOrdered<C extends 'experience' | 'talks' | 'pillars' | 'skills' | 'about'>(collection: C) {
  const entries = await getCollection(collection);
  return entries.sort((a, b) => a.data.order - b.data.order);
}

/** Published blog posts, newest first. Drafts are included only in dev. */
export async function getPublished<C extends Extract<CollectionKey, 'blog'>>(collection: C) {
  const entries = await getCollection(collection, ({ data }) => import.meta.env.DEV || !data.draft);
  return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(date: Date) {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}

/** Published case studies in their chosen order. Drafts are included only in dev. */
export async function getCaseStudies() {
  const entries = await getCollection('caseStudies', ({ data }) => import.meta.env.DEV || !data.draft);
  return entries.sort((a, b) => a.data.order - b.data.order);
}

/** Years for a role's timetable row ("2023–now"), falling back to its duration until years are filled in. */
export function roleYears({ start, end, period }: { start?: number; end?: number | 'present'; period: string }) {
  if (!start) return period;
  if (end === 'present') return `${start}–now`;
  return end && end !== start ? `${start}–${end}` : String(start);
}
