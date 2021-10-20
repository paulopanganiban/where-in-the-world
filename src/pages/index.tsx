import type { NextPage } from "next";

import React, { useState } from "react";
import styled from "styled-components";
import SearchInput from "../components/searchInput";
import FilterDropDown from "../components/filterDropDown";
import List from "../components/list";
import BasicPagination from "../components/pagination";
const defaultEndpoint = "https://restcountries.com/v3.1/all";

import { CountryInterface } from "../types/interfaces";

export const getStaticProps = async () => {
  try {
    const res = await fetch(defaultEndpoint);
    const data = await res.json();
    return { props: { data } };
  } catch (err) {
    console.log(err);
  }
};

const Home = ({ data }: {data: CountryInterface[]}) => {
  const [fetchedData] = useState(data);
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
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
  const [itemsPerPage] = useState(12);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = fetchedData.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber: number) => {
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
          <FilterDropDown
            regions={regions}
            title={"Filter by Region"}
            iconSize={"small"}
            searchKeyWord={searchKeyWordHandler}
          />
        </TopMainContainer>
        <BottomMainContainer>
          {fetchedData && (
            <List
              data={searchTerm.length < 1 ? currentItems : searchResults}
              noDataFoundText={"No Countries Available"}
            />
          )}
        </BottomMainContainer>
        {!searchTerm && (
          <>
            <BasicPagination
              itemsPerPage={itemsPerPage}
              totalItems={fetchedData.length}
              paginate={paginate}
            />
          </>
        )}
      </MainWrapper>
    </MainContainer>
  );
};

export default Home;
const BottomMainContainer = styled.div``;
const TopMainContainer = styled.div`
  max-width: 1440px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const MainContainer = styled.div``;
const MainWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;
