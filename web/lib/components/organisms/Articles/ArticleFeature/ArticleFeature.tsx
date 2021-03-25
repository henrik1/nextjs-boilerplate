import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { Button, Tags, Media, Container, Typography } from "../../../atoms";
import { motion } from "framer-motion";
import { StyledBlogFeature } from "./ArticleFeature.styles";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import WithMotion from "../../../../motion/withMotion";

type ArticleFeatureProps = { media: string; video?: boolean, motionVariants };

export const ArticleFeature = WithMotion<ArticleFeatureProps>(function({
  motionVariants: itemAnim,
  media = "https://drscdn.500px.org/photo/116608237/q%3D80_m%3D1500/v2?sig=e60261b8b4c5aa1720ace0a4b149a0e671517149918c1526f8c484b02d2df67a"
}: ArticleFeatureProps) {
  const theme = useTheme();
  const compact = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <StyledBlogFeature>
      {compact && (
        <Fragment>
          <Media format="4:3" media={media} />
          <br />
          <br />
          <br />
        </Fragment>
      )}
      <Container>
        <Grid container spacing={10} alignItems="flex-start" direction={compact ? "row-reverse" : undefined}>
          <Grid item xs={12} md={12} lg={5} xl={5}>
            <motion.div variants={itemAnim}>
              <Typography variant="h1" gutterBottom>Lorem ipsum dolar<br/>sit amet.</Typography>
            </motion.div>
            <motion.div variants={itemAnim}>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum elit et nulla lacinia ultricies. Aliquam pharetra rutrum odio eu facilisis. Phasellus feugiat pellentesque ligula, sed eleifend sapien blandit id. Vestibulum facilisis ex et eros elementum consectetur. Sed et risus nibh. Proin bibendum et elit ut cursus. <br/><br/>Morbi vel dictum ligula, eget blandit leo. Praesent tincidunt, risus in aliquet condimentum, erat lectus dapibus turpis, a varius nulla quam vel enim. Nunc ut hendrerit ligula. Nunc arcu turpis, vestibulum eget commodo at, semper in mi. Sed elementum augue lorem, et aliquet nisi pharetra non.
              </Typography>
            </motion.div>
            <br />
            <br />
            <Tags tags={[ "tech", "aerial", "norway"]}/>
            <br />
            <br />
            <motion.div variants={itemAnim}>
              <Button color="primary" variant="contained" href="/">Read full story</Button>
            </motion.div>
          </Grid>

          {!compact && (
            <Grid item xs={12} md={12} lg={7} xl={7}>
              <motion.div variants={itemAnim}>
                <Media format="4:3" media={media} />
              </motion.div>
            </Grid>
          )}
        </Grid>
      </Container>
    </StyledBlogFeature>
  );
},{});

export default ArticleFeature;
