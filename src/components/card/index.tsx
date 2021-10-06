import React from "react";
import styled from "styled-components";
import { numberWithCommas as getNumberWithCommas } from "../../utilities/functions/regex.function";
interface Props {
  countryName: string;
  population: number;
  region?: string;
  capital?: string;
  svg: string;
}
const Card = ({ countryName, population, region, capital, svg }: Props) => {
  const populationCount: string = getNumberWithCommas(population);
  return (
    <CardContainer>
      <StyledImage src={svg} />
      <CardContentContainer>
        <StyledSpan>{countryName}</StyledSpan>
        <StyledTextContainer>
          <StyledText>Population</StyledText>
          <StyledText>{populationCount}</StyledText>
        </StyledTextContainer>
      </CardContentContainer>
    </CardContainer>
  );
};

export default Card;
const StyledTextContainer = styled.div`
display: flex;
`;
const StyledText = styled.p``;
const StyledSpan = styled.span`
  font-size: 18px;
  font-weight: 600;
  margin: 30px 0 0 24px;
`;
const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.background};
  width: 265px;
  height: 335px;
  border-radius: 5px;
`;
const StyledImage = styled.img`
  height: 161px;
  width: 100%;
  object-fit: cover;
`;
const CardContentContainer = styled.div`
  display: flex;
  align-items: center;
`;
