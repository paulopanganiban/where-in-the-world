import React from "react";
import Link from "next/link";
import Image from "next/image";
import { numberWithCommas as getNumberWithCommas } from "../../utilities/functions/regex.function";
import * as S from "./card.styles";

import { CountryInterface } from "../../types/interfaces";

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
    <Link href={`country/${cca3?.toLowerCase()}`} passHref>
      <S.CardContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Image
          src={flags.svg}
          alt={name?.common}
          height={161}
          width={265}
          objectFit={"cover"}
        />
        <S.CardContentContainer>
          <span className="countryName">{name?.common}</span>
          <span className="text__container">
            <p>
              <strong>Population:</strong> {populationCount}
            </p>
            <p>
              <strong>Region:</strong> {region}
            </p>
            <p>
              <strong>Capital:</strong> {capital ? capital[0] : "N/a"}
            </p>
          </span>
        </S.CardContentContainer>
      </S.CardContainer>
    </Link>
  );
};

export default Card;
