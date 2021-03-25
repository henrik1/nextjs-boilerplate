import React from "react";
import { ArticlePreview } from "../../index";
import { motion } from "framer-motion";
import { StyledColumns, StyledItem } from "./ArticlePreviewList.styles";
import { Divider, Typography } from "../../../atoms";
import WithMotion from "../../../../motion/withMotion";

type ArticlePreviewListType = {
  title: string,
  categories: any [],
  articles: any [];
  columns: "auto" | number;
  motionVariants?: any,
};

export const ArticlePreviewList = WithMotion(function({
  title,
  categories,
  motionVariants: itemAnim,
  articles = [],
  ...rest
}: ArticlePreviewListType) {

  return (
    <div {...rest}>
      <motion.div variants={itemAnim}>
        <Typography variant="h3" component="h2" gutterBottom>{title}</Typography>
        <Divider color="secondary" />
      </motion.div>

      <br/>

      <StyledColumns>
        {articles.map((article, idx) => (
          <StyledItem key={article._id} variants={itemAnim}>
            <ArticlePreview
              title={article.title}
              excerpt={article.excerpt}
              media={article.media}
              format={article.format}
              tags={article.tags}
              slug={article.slug}
            />
          </StyledItem>
        ))}
      </StyledColumns>
    </div>
  );
}, {});

export default ArticlePreviewList;

