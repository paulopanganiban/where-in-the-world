import type { NextPage } from "next";
import Head from "next/head";

import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../styles/themes";
import { GlobalStyles } from "../styles/global.styles";
import { useDarkMode } from "../utilities/hooks/darkMode";

import Header from "../components/header";
import SearchInput from "../components/searchInput";
import FilterDropDown from "../components/filterDropDown";
import TestComponent from "./test";
// import { searchHandler } from "../utilities/functions/searchHandler";

// fetch data
const defaultEndpoint = "https://restcountries.com/v3.1/all";
export const getServerSideProps = async () => {
  try {
    const res = await fetch(defaultEndpoint);
    const data = await res.json();
    return { props: { data } };
  } catch (err) {
    console.log(err);
  }
};
export interface Props {
  data: [
    {
      name: {
        common: string;
      };
      population: number;
      region: string;
      capital: [];
      flags: {
        png: string;
      }
    }
  ];
}
const Home: NextPage<Props> = ({ data }) => {
  const [fetchedData] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<any>([]);
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const searchHandler = (searchTerm: string) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newDataList = data.filter((item) => {
        return Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newDataList);
      console.log(newDataList);
    } else {
      setSearchResults(fetchedData);
    }
  };
  useEffect(() => {}, []);
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
        <Header
          title={"Where in the world?"}
          theme={theme}
          toggleTheme={themeToggler}
          themeMode={themeMode}
        />
        <main>
          <MainContainer>
            <TopMainContainer>
              <SearchInput searchKeyWord={searchHandler} term={searchTerm} />
              <FilterDropDown title={"Filter by Region"} size={"small"} />
            </TopMainContainer>
            <BottomMainContainer>
              {fetchedData && (
                <TestComponent
                  data={searchTerm.length < 1 ? fetchedData : searchResults}
                  noDataFoundText={"No Countries Available"}
                />
              )}
            </BottomMainContainer>
          </MainContainer>
        </main>
      </>
    </ThemeProvider>
  );
};

export default Home;
const BottomMainContainer = styled.div``;
const TopMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const MainContainer = styled.div``;
