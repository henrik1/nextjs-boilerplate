import { createMuiTheme } from "@material-ui/core/styles";

export const themeOverrides = {
  name: "Commercial theme",
  palette: {
    common: {
      black: "#1B1A1A"
    },
    primary: {
      main: "#1B1A1A"
    },
    secondary: {
      main: "#1B1A1A"
    },
    info: {
      main: "#F4F3ED"
    }
  },
  text: {
    primary: "#1B1A1A",
    secondary: "#676767"
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    fontWeightRegular: 400,
    h1: {
      fontFamily: "Cormorant Garamond, serif",
      fontSize: "3.5rem",
      fontWeight: 400,
      "@media (min-width:720px)": {
        fontSize: "4rem"
      },
    },
    h2: {
      fontFamily: "Cormorant Garamond, serif",
      fontSize: "2.25rem",
      fontWeight: 400,
      "@media (min-width:720px)": {
        fontSize: "2.5rem"
      }
    },
    h3: {
      fontFamily: "Cormorant Garamond, serif",
      fontSize: "2rem",
      fontWeight: 400
    },
    h4: {
      fontFamily: "Roboto, sans-serif",
      fontSize: "1.75rem",
      fontWeight: 400,
      lineHeight: 1.5
    },
    h5: {
      fontFamily: "Roboto, sans-serif",
      fontSize: "1.5rem",
      fontWeight: 500
    },
    h6: {
      fontFamily: "Roboto, sans-serif",
      fontSize: "1.275rem",
      fontWeight: 500,
    },
    body1: {
      fontFamily: "Roboto, sans-serif",
      fontSize: "1.15rem",
      fontWeight: 400,
      lineHeight: 2.25,
      color: "#3d3d4e"
    },
    body2: {
      fontFamily: "Roboto, sans-serif",
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 2,
      color: "#3d3d4e"
    },
    subtitle1: {
      fontFamily: "Roboto, sans-serif",
      fontSize: "1.25rem",
      fontWeight: 300,
      color: "#7d7d8e"
    },
    subtitle2: {
      fontFamily: "Roboto, sans-serif",
      fontSize: ".75rem",
      fontWeight: 400,
    },
    button: {
      fontFamily: "Roboto, sans-serif",
      fontSize: ".875rem",
      fontWeight: 600,
    },
    overline: {
      fontFamily: "Cormorant Garamond, serif",
      fontSize: "1rem",
      lineHeight: 1.375,
      fontWeight: 400
    },

  }
};

export default createMuiTheme(themeOverrides);
