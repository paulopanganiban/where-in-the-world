import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../styles/themes";
import { GlobalStyles } from "../styles/global.styles";
import { useDarkMode } from "../utilities/hooks/darkMode";
import Brightness3OutlinedIcon from "@mui/icons-material/Brightness3Outlined";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import { getServerSideProps } from "../utilities/data.api";
import DarkModeButton from "../components/darkModeButton";

getServerSideProps()
interface Props {
  data: {};
}
const Home: NextPage<Props> = ({ data }) => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  const iconMode =
    theme === "light" ? Brightness3OutlinedIcon : Brightness3Icon;

  useEffect(() => {
    console.log(data);
  }, []);
  if (!mountedComponent) return <div />;
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Head>
          <title>Where in the World</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon-32x32.png" />
        </Head>

        <main className={styles.main}>
        <DarkModeButton
              buttonLabel={"Dark"}
              theme={themeMode}
              toggleTheme={themeToggler}
              Icon={iconMode}
            />
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
        </main>
      </>
    </ThemeProvider>
  );
};

export default Home;
