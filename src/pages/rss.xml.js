import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: 'titoworlddev | Blog',
    description: 'Mi viaje de aprendizaje de Astro',
    site: 'https://titoworlddev-blog.netlify.app',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>es-ES</language>`
  });
}
