import React from "react";
import { StyledDivider } from "./Divider.styles";

type StyledDividerProps = {
  gutterBottom?: boolean;
  gutterTop?: boolean;
  color?: "primary" | "secondary";
}

export const Divider = function({ gutterTop, gutterBottom, color = "primary", ...rest }:StyledDividerProps) {
  return <StyledDivider $gutterTop={gutterTop} $gutterBottom={gutterBottom} color={color} {...rest } />
}

export default Divider;
