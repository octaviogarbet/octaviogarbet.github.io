import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPublished } from '../../lib/content';
import { SITE } from '../../site';

export async function GET(context: APIContext) {
  const posts = await getPublished('blog');
  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.id}`,
    })),
  });
}
