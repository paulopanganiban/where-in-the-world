import React from "react";
import Card from "../card";
import { CountryInterface } from "../../types/interfaces";
import { ListContainer } from "./list.styles";

interface ListProps {
  data: CountryInterface[]
  noDataFoundText?: string;
}

const List = ({ data, noDataFoundText }: ListProps) => {
  const renderDataList = data.map(
    ({
      name: { common },
      flags: { svg },
      population,
      region,
      capital,
      cca3,
    }) => (
      <Card
        key={cca3}
        cca3={cca3}
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
