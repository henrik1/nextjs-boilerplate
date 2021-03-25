import * as React from "react";
import { Divider } from "../components/atoms";
import Typography from "@material-ui/core/Typography";
import DefaultTheme from "./default";

export default { title: "Styles/Typography" };

const Text = ({ variant = "body1", value = "Lorem ipsum dolar sit amet" }) => (
  <div style={{ marginBottom: 20 }}>
    <div>
      <Typography variant="button">{variant}</Typography>
    </div>
    <div>
      <Typography variant={variant}>{value}</Typography>
    </div>
    <Divider />
  </div>
);

export const Examples = ({ typography, ...rest }) => (
  <div {...rest}>
    {Object.keys(typography)
      .filter((s) => ["round", "pxToRem", "htmlFontSize"].indexOf(s) < 0)
      .map((variant) => {
        if (typeof typography[variant] === "string" || typeof typography[variant] === "number") {
          return <Text key={variant} variant={variant} value={typography[variant]} />;
        }
        return <Text key={variant} variant={variant} />;
      })}
  </div>
);
Examples.displayName = "Typography";

Examples.args = {
  typography: DefaultTheme.typography
};
