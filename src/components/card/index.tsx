import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from 'next/image';
import { numberWithCommas as getNumberWithCommas } from "../../utilities/functions/regex.function";
interface Props {
  countryName: string;
  population: number;
  region: string;
  capital: string[];
  svg: string;
  cca2: string;
}
interface TextProps {
  thin?: boolean;
}
const Card = ({ countryName, population, region, capital, svg, cca2 }: Props) => {
  const populationCount: string = getNumberWithCommas(population);
  console.log(cca2)
  return (
    // <Link href={`country/${countryName.toLowerCase()}`} passHref>
    <Link href={`country/${cca2.toLowerCase()}`} passHref>
      <CardContainer>
        <Image src={svg} alt={countryName} height={161} width={265} objectFit={'cover'}/>
        <CardContentContainer>
          <Span>{countryName}</Span>
          <TextContainer>
            <TextWrapper>
              <Text>Population: </Text>
              <Text thin={true}>{populationCount}</Text>
            </TextWrapper>
            <TextWrapper>
              <Text>Region: </Text>
              <Text thin={true}>{region}</Text>
            </TextWrapper>
            <TextWrapper>
              <Text>Capital: </Text>
              <Text thin={true}>{capital ? capital[0] : "N/a"}</Text>
            </TextWrapper>
          </TextContainer>
        </CardContentContainer>
      </CardContainer>
    </Link>
  );
};

export default Card;
const TextContainer = styled.div`
  margin: 25px 0 0 24px;
  padding: 0;
`;
const TextWrapper = styled.div`
  display: flex;
  margin: 0 4px 14px 0;
  padding: 0;
`;
const Text = styled.p<TextProps>`
  margin: 0 4px 0 0;
  font-size: 14px;
  font-style: normal;
  font-weight: ${({ thin }) => (thin ? 0 : 300)};
`;
const Span = styled.span`
  text-overflow: ellipsis;
  font-size: 18px;
  font-weight: 600;
  margin: 25px 0 0 24px;
`;
const CardContainer = styled.div`
overflow: hidden;
white-space: nowrap;
  margin: 0px 38px 38px 38px;
  background-color: ${({ theme }) => theme.background};
  width: 265px;
  height: 335px;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;
// const NextImage = styled(Image)`
//   height: 161px;
//   width: 100%;
//   object-fit: cover;
//   border-radius: 5px 5px 0 0;
// `;
const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
