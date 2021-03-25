import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, StylesProvider } from "@material-ui/core/styles";
import defaultTheme from "./default";

export interface ThemeProviderProps {
  children?: any;
  theme?: any;
}

const ThemeProvider = ({ theme = defaultTheme, children }: ThemeProviderProps) => {
  return (
    <StylesProvider injectFirst>
      <StyledThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </MuiThemeProvider>
      </StyledThemeProvider>
    </StylesProvider>
  );
};

export default ThemeProvider;
