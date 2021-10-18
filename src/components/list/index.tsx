import React from "react";
import { Props } from "../../pages";
import Card from "../card";
import { ListContainer } from "./list.styles";
interface ListProps extends Props {
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
