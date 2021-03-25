import client, { previewClient } from "../client";

const getUniqueArticles = (articles) => {
  const slugs = new Set();
  return articles.filter((article) => {
    if (slugs.has(article.slug)) {
      return false;
    } else {
      slugs.add(article.slug);
      return true;
    }
  });
};

const articleFields = `
  _id,
  title,
  subtitle,
  excerpt,
  body,
  categories[]->,
  'slug': slug.current,
  publishedAt,
  'mainImage': mainImage.asset->url,
`;

const getClient = (preview) => (preview ? previewClient : client);

export async function getArticleWithSlug(slug, preview) {
  const curClient = getClient(preview);

  const article = await
    curClient.fetch(`
      *[_type == "article" && slug.current == $slug] | order(publishedAt desc) {
        ${articleFields}
      }[0]
    `, { slug });
  return article;
}


export async function getAllArticlesWithSlug() {
  const data = await client.fetch(`*[_type == "article"]{ 'slug': slug.current }`);
  return data;
}

export async function getAllArticles(preview) {
  const curClient = getClient(preview);

  const articles = await
    curClient.fetch(`
      *[_type == "article"] | order(publishedAt desc) {
        ${articleFields}
      }
    `);
  return getUniqueArticles(articles);
}
