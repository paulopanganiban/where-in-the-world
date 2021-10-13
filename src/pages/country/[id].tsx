import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Button from "../../components/button";
import Image from "next/image";
import { Props } from "..";
import { useRouter } from "next/router";
import { arrayToString } from "../../utilities/functions/stringManipulator.function";
import { numberWithCommas as getNumberWithCommas } from "../../utilities/functions/regex.function";

import { motion } from "framer-motion";
interface CountryProps extends Props {
  noDataFoundText?: string;
}
const Country = ({ data }: CountryProps) => {
  const router = useRouter();
  const country = data[0];
  const populationCount: string = getNumberWithCommas(country.population);
  const currency = country.currencies
    ? [Object.keys(country?.currencies)[0]]
    : [];
  const language = country.languages
    ? arrayToString(Object.values(country.languages))
    : [];
  console.log(country);
  console.log(country.borders);
  console.log();
  return (
    <CountryContainer>
      <CountryWrapper>
        <TopContainer>
          <Button
            label={"Back"}
            width={"137px"}
            height={"42px"}
            onClick={() => {
              router.back();
            }}
          ></Button>
        </TopContainer>
        <BottomContainer>
          <BottomWrapper>
            <LeftContainer>
              <Image
                width={560}
                height={401}
                src={country.flags.svg}
                alt={country.name.common}
                objectFit={"cover"}
              />
            </LeftContainer>
            <RightContainer>
              <h1>{country.name.common}</h1>
              <Wrapper>
                <Content>
                  <Ul>
                    <li>
                      <Span>
                        <H4>Native Name:</H4>
                        <p>{country.name.official}</p>
                      </Span>
                    </li>
                    <li>
                      <Span>
                        <H4>Population:</H4>
                        <p>{populationCount}</p>
                      </Span>
                    </li>
                    <li>
                      <Span>
                        <H4>Region:</H4>
                        <p>{country.region}</p>
                      </Span>
                    </li>
                    <li>
                      <Span>
                        <H4>Sub Region:</H4>
                        <p>{country.subregion}</p>
                      </Span>
                    </li>
                    <li>
                      <Span>
                        <H4>Capital:</H4>
                        <p>{country.capital}</p>
                      </Span>
                    </li>
                  </Ul>
                </Content>
                <Content right={true}>
                  <Ul>
                    <li>
                      <Span>
                        <H4>Top Level Domain:</H4>
                        <p>{country.tld}</p>
                      </Span>
                    </li>
                    <li>
                      <Span>
                        <H4>Currencies:</H4>
                        <p>{currency}</p>
                      </Span>
                    </li>
                    <li>
                      <Span>
                        <H4>Languages:</H4>
                        <p>{language}</p>
                      </Span>
                    </li>
                  </Ul>
                </Content>
              </Wrapper>
              <ListSpan
              >
                <h4>Border Countries:</h4>
                {"    "}
                {country.borders
                  ? country.borders.map((item: string) => (
                      <ButtonWrapper key={item}>
                        <Button
                          width={"98px"}
                          height={"30px"}
                          onClick={() =>
                            router.push(`/country/${item.toLowerCase()}`)
                          }
                          label={item}
                          margin={"5px"}
                        />
                      </ButtonWrapper>
                    ))
                  : "N/a"}
              </ListSpan>
            </RightContainer>
          </BottomWrapper>
        </BottomContainer>
      </CountryWrapper>
    </CountryContainer>
  );
};

export default Country;
const ListSpan = styled.span`
  width: "100%";
  display: "flex";
  flex-wrap: "wrap";
  align-items: "center";
  h4 {
    margin-top: 77px;
  }
`;
const H4 = styled.h4`
  margin-right: 3px;
`;
const ButtonWrapper = styled.span`
  margin: 5px;
`;
const Ul = styled.ul`
  list-style-type: none;
`;
const Span = styled.span<{ margin?: string }>`
  display: flex;
  margin: 8px 0;
  margin: ${({ margin }) => margin};
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 30px;
`;
const BottomWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
interface ContentProps {
  right?: boolean;
}
const Content = styled.div<ContentProps>`
  margin-right: 20px;
`;
const CountryContainer = styled.div`
  display: block;
`;
const CountryWrapper = styled.div`
  width: 80%;
  right: 0;
  margin: 0 auto;
`;
const TopContainer = styled.div`
  height: 112px;
  display: flex;
  align-items: center;
`;
const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const LeftContainer = styled.div`
  max-width: 560px;
  max-height: 401px;
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 625px;
  
  @media all and (max-width: 1000px) {
  }
`;
export const getStaticProps = async (context: { params: { id: string } }) => {
  try {
    const id = context.params.id;
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
    const data = await res.json();
    return { props: { data } };
  } catch (err) {
    console.log(err);
  }
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://restcountries.com/v3.1/all`);
  const data = await res.json();

  const paths = data.map((item: { cca3: string }) => {
    const { cca3: cca2 } = item;
    return {
      params: { id: cca2.toLowerCase() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
