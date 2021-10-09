import React from "react";
import { Props } from "../../pages";
import Card from "../card";
import styled from 'styled-components'
interface ListProps extends Props {
  noDataFoundText?: string;
}
const List = ({ data, noDataFoundText }: ListProps) => {
  const renderDataList = data.map(
    (
      { name: { common }, flags: { svg }, population, region, capital, cca2 }
    ) => (
      <Card
        key={cca2}
        cca2={cca2}
        countryName={common}
        svg={svg}
        population={population}
        region={region}
        capital={capital}
      />
    )
  );

  return (
      <ListContainer>
        {renderDataList.length > 0 ? (
          renderDataList
        ) : (
          <span>{noDataFoundText}</span>
        )}
      </ListContainer>
  );
};

export default List;
const ListContainer = styled.ul`
max-width: 1440px;
display: flex;
flex-wrap: wrap;
justify-content: center;`