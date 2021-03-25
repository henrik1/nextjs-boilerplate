import React from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import DefaultLayout from "../../layouts/DefaultLayout";
import { getArticleWithSlug, getAllArticlesWithSlug } from "../../lib/sanity/api/articles";
import { ArticleFull } from "../../lib/components/organisms";

export default function Article({ article }) {
  const router = useRouter();
  if ((!router.isFallback && !article?.slug) || !article) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div>
      <ArticleFull post={article} />
    </div>
  );
}

Article.Layout = DefaultLayout;

export async function getStaticProps({ params, preview = false }) {
  const [post] = await Promise.all([
    getArticleWithSlug(params.slug, preview),
  ]);

  return {
    props: {
      preview,
      post
    },
    revalidate: 60 // In seconds
  };
}

export async function getStaticPaths() {
  const allArticles = await getAllArticlesWithSlug();
  return {
    paths:
      allArticles?.map((article) => ({
        params: {
          slug: article.slug
        }
      })) || [],
    fallback: true
  };
}
