import React from "react";
import styled from "styled-components";
interface Props {
  countryName: string;
  population?: number;
  region?: string;
  capital?: string;
}
const Card = ({ countryName, population, region, capital }: Props) => {
  return (
    <CardContainer>
      <h1>{countryName}</h1>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.background};
  width: 265px;
  height: 335px;
  border-radius: 5px;
`;
