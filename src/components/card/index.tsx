import React from "react";
import styled from "styled-components";
import Link from 'next/link'
import { numberWithCommas as getNumberWithCommas } from "../../utilities/functions/regex.function";
interface Props {
  countryName: string;
  population: number;
  region: string;
  capital: string[];
  svg: string;
}
interface StyledTextProps {
  thin?: boolean;
}
const Card = ({ countryName, population, region, capital, svg }: Props) => {
  const populationCount: string = getNumberWithCommas(population);
  return (<Link href={`country/${countryName.toLowerCase()}`} passHref>

    <CardContainer>
      <StyledImage src={svg} />
      <CardContentContainer>
        <StyledSpan>{countryName}</StyledSpan>
        <StyledTextContainer>
          <StyledTextWrapper>
            <StyledText>Population: </StyledText>
            <StyledText thin={true}>{populationCount}</StyledText>
          </StyledTextWrapper>
          <StyledTextWrapper>
            <StyledText>Region: </StyledText>
            <StyledText thin={true}>{region}</StyledText>
          </StyledTextWrapper>
          <StyledTextWrapper>
            <StyledText>Capital: </StyledText>
            <StyledText thin={true}>{capital ? capital[0] : "N/a"}</StyledText>
          </StyledTextWrapper>
        </StyledTextContainer>
      </CardContentContainer>
    </CardContainer>
    </Link>
  );
};

export default Card;
const StyledTextContainer = styled.div`
  margin: 25px 0 0 24px;
  padding: 0;
`;
const StyledTextWrapper = styled.div`
  display: flex;
  margin: 0 4px 14px 0;
  padding: 0;
`;
const StyledText = styled.p<StyledTextProps>`
  margin: 0 4px 0 0;
  font-size: 14px;
  font-style: normal;
  font-weight: ${({ thin }) => (thin ? 0 : 300)};
`;
const StyledSpan = styled.span`
  font-size: 18px;
  font-weight: 600;
  margin: 25px 0 0 24px;
`;
const CardContainer = styled.div`
  margin: 0px 38px 38px 38px;
  background-color: ${({ theme }) => theme.background};
  width: 265px;
  height: 335px;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;
const StyledImage = styled.img`
  height: 161px;
  width: 100%;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
`;
const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
