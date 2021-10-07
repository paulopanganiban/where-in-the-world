import React from "react";
import Head from "next/head";
import Header from "../header";
import { darkTheme, lightTheme } from "../../styles/themes";
import { useDarkMode } from "../../utilities/hooks/darkMode";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../styles/global.styles";
interface Props {
  title?: string;
}
const Layout: React.FC<Props> = ({
  children,
  title = "Where in the world?",
}) => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  if (!mountedComponent) return <div />;
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Head>
          <title>{title}d</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon-32x32.png" />
        </Head>
        <Header
          title={title}
          theme={theme}
          toggleTheme={themeToggler}
          themeMode={themeMode}
        />
        <main>{children}</main>
      </>
    </ThemeProvider>
  );
};

export default Layout;
