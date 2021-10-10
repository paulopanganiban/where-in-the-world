import React from "react";
import styled from "styled-components";
import Layout from "../../components/layout";
import Link from "next/link";
import Button from "../../components/button";
import Image from "next/image";
import { Props } from "..";
import { useRouter } from "next/router";
import { arrayToString } from "../../utilities/functions/stringManipulator.function";
interface CountryProps extends Props {
  noDataFoundText?: string;
}
const Country = ({ data }: CountryProps) => {
  const router = useRouter();

  const country = data[0];
  const currency = [Object.keys(country.currencies)[0]];
  const language = arrayToString(Object.values(country.languages));
  return (
    <CountryContainer>
      <CountryWrapper>
        <TopContainer>
          <Button
            label={"Back"}
            width={"137px"}
            height={"42px"}
            onClick={() => {
              router.push("/");
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
              />
            </LeftContainer>
            <RightContainer>
              <h1>{country.name.common}</h1>
              <Wrapper>
                <Content>
                  <Ul>
                    <li>
                      <Span>
                        <h4>Native Name:</h4>
                        <p>{country.name.official}</p>
                      </Span>
                    </li>
                    <li>
                      <Span>
                        <h4>Population:</h4>
                        <p>{country.population}</p>
                      </Span>
                    </li>
                    <li>
                      <Span>
                        <h4>Region:</h4>
                        <p>{country.region}</p>
                      </Span>
                    </li>
                    <li>
                      <Span>
                        <h4>Sub Region:</h4>
                        <p>{country.subregion}</p>
                      </Span>
                    </li>
                    <li>
                      <Span>
                        <h4>Capital:</h4>
                        <p>{country.capital}</p>
                      </Span>
                    </li>
                  </Ul>
                </Content>
                <Content right={true}>
                  <Ul>
                    <li>
                      <Span>
                        <h4>Top Level Domain:</h4>
                        <p>{country.tld}</p>
                      </Span>
                    </li>
                    <li>
                      <Span>
                        <h4>Currencies:</h4>
                        <p>{currency}</p>
                      </Span>
                    </li>
                    <li>
                      <Span>
                        <h4>Languages:</h4>
                        <p>{language}</p>
                      </Span>
                    </li>
                  </Ul>
                </Content>
              </Wrapper>
            </RightContainer>
          </BottomWrapper>
        </BottomContainer>
      </CountryWrapper>
    </CountryContainer>
  );
};

export default Country;
const Ul = styled.ul`
list-style-type: none;
`
const ButtonsWrapper = styled.div``;
const Span = styled.span`
  display: flex;
`;
const Wrapper = styled.div`
  display: flex;
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
  margin-left: ${({ right }) => (right ? "14px" : "0")};
`;
const CountryContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const CountryWrapper = styled.div`
  max-width: 1440px;
  padding: 0 10px;
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
  margin-left: 117px;
  max-width: 625px;
`;
export const getStaticProps = async (context: { params: { id: string } }) => {
  const id = context.params.id;
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
  const data = await res.json();
  return { props: { data } };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://restcountries.com/v3.1/all`);
  const data = await res.json();

  const paths = data.map((item: { cca2: string }) => {
    const { cca2 } = item;
    return {
      params: { id: cca2.toLowerCase() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
