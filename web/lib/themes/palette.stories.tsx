import * as React from "react";
import { Grid, Typography } from "../components/atoms";
import DefaultTheme from "./default";
import { Card, CardContent, CardMedia } from "@material-ui/core";

export default { title: "Styles/Palette" };

const Color = ({ color, name }) => (
  <Grid item component="div" xs={12} sm={6} md={4} lg={3}>
    <Card>
      <CardContent>
        <Typography variant="subtitle1">{name}</Typography>
      </CardContent>
      <CardMedia style={{ backgroundColor: color, paddingTop: "56.25%" }} />
      <CardContent>
        <Typography variant="subtitle1">{color}</Typography>
      </CardContent>
    </Card>
  </Grid>
);

export const Colors = ({ palette, ...rest }) => (
  <Grid container spacing={4} {...rest}>
    {Object.keys(palette).map((color) => (
      <Grid container item xs={12} spacing={4}>
        {Object.keys(palette[color]).map((variant) => {
          if (
            typeof palette[color][variant] === "string" &&
            palette[color][variant] &&
            (palette[color][variant].indexOf("#") === 0 ||
              palette[color][variant].indexOf("rgb") === 0)
          ) {
            return <Color color={palette[color][variant]} name={`${color} - ${variant}`} />;
          }
        })}
      </Grid>
    ))}
  </Grid>
);

Colors.args = {
  palette: DefaultTheme.palette
};
