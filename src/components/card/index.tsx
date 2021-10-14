import React from "react";
import Link from "next/link";
import Image from "next/image";
import { numberWithCommas as getNumberWithCommas } from "../../utilities/functions/regex.function";

import {
  CardContainer,
  CardContentContainer,
  Span,
  Text,
  TextContainer,
  TextWrapper,
} from "./card.styles";
interface Props {
  countryName: string;
  population: number;
  region: string;
  capital: string[];
  svg: string;
  cca3: string;
}

const Card = ({
  countryName,
  population,
  region,
  capital,
  svg,
  cca3,
}: Props) => {
  const populationCount: string = getNumberWithCommas(population);
  return (
    <Link href={`country/${cca3.toLowerCase()}`} passHref>
      <CardContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Image
          src={svg}
          alt={countryName}
          height={161}
          width={265}
          objectFit={"cover"}
        />
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
