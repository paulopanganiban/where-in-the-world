import React from "react";
import Link from "next/link";
import Image from "next/image";
import { numberWithCommas as getNumberWithCommas } from "../../utilities/functions/regex.function";
import { CountryInterface } from '../../types/interfaces'
import * as S from "./card.styles";

const Card = ({
  name,
  population,
  region,
  capital,
  flags,
  cca3,
}: CountryInterface) => {
  const populationCount: string = getNumberWithCommas(population);
  return (
    <Link href={`country/${cca3.toLowerCase()}`} passHref>
      <S.CardContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Image
          src={flags.svg}
          alt={name.common}
          height={161}
          width={265}
          objectFit={"cover"}
        />
        <S.CardContentContainer>
          <S.TitleContainer>
            <h3> {name.common} </h3>
          </S.TitleContainer>
          <S.DetailsContainer>
            <S.InfoTag>
              <strong>Population:</strong> {populationCount}
            </S.InfoTag>
            <S.InfoTag>
              <strong>Region:</strong> {region}
            </S.InfoTag>
            <S.InfoTag>
              <strong>Capital:</strong> {capital ? capital[0] : "N/a"}
            </S.InfoTag>
          </S.DetailsContainer>
        </S.CardContentContainer>
      </S.CardContainer>
    </Link>
  );
};

export default Card;
