import React, { Fragment } from "react";
import { StyledBlogPreview } from "./ArticlePreviewStyles";
import { Redirect, Divider, Media, Tags, Typography } from "../../../atoms";

type ArticlePreviewProps = {
  slug: string;
  title: string;
  media?: string;
  excerpt: string;
  tags: string [];
  format?: "4:3" | "3:4" | "16:10"
};

export const ArticlePreview = function ({
  title,
  media,
  excerpt,
  format = "16:10",
  tags = [],
  slug = null
}: ArticlePreviewProps) {

  return (
    <Redirect href={`/posts/${slug}`}>
      <StyledBlogPreview>
        {media ? (
          <Fragment>
            <Media format={format} media={media} className="post-image" />
            <br/>
          </Fragment>
        ) : (
          <Divider gutterBottom />
        )}

        <Typography variant="h2">{title}</Typography>
        <Divider gutterTop gutterBottom />
        <Typography variant="body2">
          {excerpt}
        </Typography>
        <br />
        <Tags tags={tags}/>
      </StyledBlogPreview>
    </Redirect>
  )

}

export default ArticlePreview;
