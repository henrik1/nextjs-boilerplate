// .storybook/preview.js
import React from "react";
import ThemeProvider from "../lib/themes/ThemeProvider";
import "../styles/globals.css";

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  )
];
