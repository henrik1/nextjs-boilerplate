import React from "react";
import { Typography } from "../../atoms";

const BlockRenderer = ({
  children,
  node,
}) => {
  const style = node.style || "body1";

  if (/^h\d/.test(style)) {
    return (
      <Typography variant={style} component={style} gutttonBottom>
        {children}
      </Typography>
    );
  }

  switch(style) {
    case "blockquote":
      return (
        <blockquote>{children}</blockquote>
      );
    case "normal":
      return (
        <Typography variant="body1">
          {children}
        </Typography>
      );
    default:
      return (
        <Typography variant={node.style}>
          {children}
        </Typography>
      )
  }
};

export default BlockRenderer;
