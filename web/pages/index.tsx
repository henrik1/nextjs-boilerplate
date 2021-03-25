import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import { ArticleFeature, ArticlePreviewList } from "../lib/components/organisms";
import { Container } from "../lib/components/atoms";
import { getAllArticles } from "../lib/sanity/api/articles";
import exampleData from "../example-data";

export default function Home({ articles = []}) {
  return (
    <div>
      <ArticleFeature />

      <br />

      <Container>
        <ArticlePreviewList
          title="Recent stories"
          categories
          articles={articles.concat(exampleData)}/>
      </Container>

    </div>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const [articles] = await Promise.all([
    getAllArticles(preview)
  ]);

  return {
    props: {
      preview,
      articles
    },
    revalidate: 60 // In seconds
  };
}

Home.Layout = DefaultLayout;
