import { getCollection, type CollectionKey } from 'astro:content';

/** Entries of an ordered collection (experience, talks, skills), sorted by `order`. */
export async function getOrdered<C extends 'experience' | 'talks' | 'skills'>(collection: C) {
  const entries = await getCollection(collection);
  return entries.sort((a, b) => a.data.order - b.data.order);
}

/** Published entries of a dated collection, newest first. Drafts are included only in dev. */
export async function getPublished<C extends Extract<CollectionKey, 'blog' | 'portfolio'>>(collection: C) {
  const entries = await getCollection(collection, ({ data }) => import.meta.env.DEV || !data.draft);
  return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(date: Date) {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}
