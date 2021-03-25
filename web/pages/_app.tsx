import React from "react";
import "../styles/globals.css";
import ThemeProvider from "../lib/themes/ThemeProvider";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;

  return (
    <ThemeProvider>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
