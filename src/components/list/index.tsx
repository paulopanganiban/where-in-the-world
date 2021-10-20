import React, { FC } from "react";
import { CountryInterface } from "../../types/interfaces";
import Card from "../card";
import { ListContainer } from "./list.styles";

type Props = {
  data: CountryInterface[]
  noDataFoundText: string
}

const List: FC<Props> = ({data, noDataFoundText}) => {
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
