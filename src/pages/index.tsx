import type { NextPage } from "next";

import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import SearchInput from "../components/searchInput";
import FilterDropDown from "../components/filterDropDown";
import List from "../components/list";
import Pagination from "../components/pagination";
import Layout from "../components/layout";

const defaultEndpoint = "https://restcountries.com/v3.1/all";
export const getStaticProps = async () => {
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
        svg: string;
      };
      cca2: string;
    }
  ];
}
const Home: NextPage<Props> = ({ data }) => {
  const [fetchedData] = useState(data);
  console.log(fetchedData)
  // Search Keyword State
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<any>([]);
  const searchKeyWordHandler = (searchTerm: string) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newDataList = data.filter((item) => {
        return Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newDataList);
    } else {
      setSearchResults(fetchedData);
    }
  };

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber: number) => {
    console.log(pageNumber);
    setCurrentPage(pageNumber);
  };
  return (
    <MainContainer>
      <MainWrapper>
        <TopMainContainer>
          <SearchInput
            searchKeyWord={searchKeyWordHandler}
            searchTerm={searchTerm}
          />
          <FilterDropDown title={"Filter by Region"} iconSize={"small"} />
        </TopMainContainer>
        <BottomMainContainer>
          {fetchedData && (
            <List
              data={searchTerm.length < 1 ? currentItems : searchResults}
              noDataFoundText={"No Countries Available"}
            />
          )}
        </BottomMainContainer>
      </MainWrapper>
    </MainContainer>
  );
  {
    /* <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={fetchedData.length}
            paginate={paginate}
          /> */
  }
};

export default Home;
const BottomMainContainer = styled.div``;
const TopMainContainer = styled.div`
  max-width: 1440px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const MainContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
`;
const MainWrapper = styled.div`
  width: 90%;
  margin-left: auto;
`;
