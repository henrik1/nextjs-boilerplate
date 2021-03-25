import React from "react";
import withMotion from "../../../../motion/withMotion";
import { motion } from "framer-motion";
import { Divider, Container, Typography, Grid } from "../../../atoms";
import { BlockContent } from "../../../molecules";

export const ArticleFull = withMotion(function({ article, motionVariants  }) {
  return (
    <div>
      <br/>
      <br/>
        <Container>
          <Grid container spacing={8}>
            <Grid item xs={12} md={7} lg={8}>
              <motion.div variants={motionVariants}>
                <Typography variant="h2" component="h1" gutterBottom style={{ maxWidth: 720 }}>{article.title}</Typography>
                <Typography variant="subtitle1">{article.subtitle}</Typography>
                <br/>
                <Divider color="secondary"/>
              </motion.div>

              <BlockContent blocks={article.body} />
            </Grid>

          </Grid>
        </Container>
      <br/>
    </div>
  );
}, {});

export default ArticleFull;
