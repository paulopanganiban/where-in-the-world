import React from "react";
import { CountryInterface } from "../../types/interfaces";
import Card from "../card";
import { ListContainer } from "./list.styles";

interface ListProps {
  data: CountryInterface[];
  noDataFoundText?: string;
}

const List = ({ data, noDataFoundText }: ListProps) => {
  const renderDataList = data.map(
    ({ name, flags, population, region, capital, cca3 }) => (
      <Card
        key={cca3}
        cca3={cca3}
        name={name}
        flags={flags}
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
