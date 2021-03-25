import React from "react";
import { StyledDefaultLayout, StyledLayoutContent } from "./DefaultLayout.styles";
import {AppBar} from "../lib/components/atoms";

type LayoutProps = {
  children: any;
};

export const DefaultLayout = function DefaultLayout({
  children,
  ...rest
}: LayoutProps) {
  return (
    <StyledDefaultLayout {...rest}>
      <AppBar>
        My nextjs site
      </AppBar>
      <StyledLayoutContent>
        {children}
      </StyledLayoutContent>
    </StyledDefaultLayout>
  );
}

export default DefaultLayout;
