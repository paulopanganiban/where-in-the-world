import React from "react";
import Button from "../../components/button";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { CountryInterface } from "../../types/interfaces";
import { numberWithCommas as getNumberWithCommas } from "../../utilities/functions/regex.function";
import * as S from "../../styles/country/[id].styles";
import { ListItem } from "../../components/countryPage/listItem";

interface CountryProps {
  data: CountryInterface[];
  noDataFoundText?: string;
}

const Country = ({ data }: CountryProps) => {
  const router = useRouter();
  const country = data[0];
  const populationCount: string = getNumberWithCommas(country.population);
  const currency = Object.keys(country?.currencies!).join(", ");
  const language = Object.values(country.languages!).join(", ");

  return (
    <div>
      <Head>
        <title> Country | {data[0].name.official}</title>
      </Head>
      <S.CountryContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <S.CountryWrapper>
          <S.TopContainer>
            <Button
              label={"Back"}
              width={"137px"}
              height={"42px"}
              onClick={() => {
                router.push("/");
              }}
            ></Button>
          </S.TopContainer>
          <S.BottomContainer>
            <S.BottomWrapper>
              <S.LeftContainer>
                <Image
                  width={560}
                  height={401}
                  src={country.flags.svg}
                  alt={country.name.common}
                  objectFit={"cover"}
                />
              </S.LeftContainer>
              <S.RightContainer>
                <h1>{country.name.common}</h1>
                <S.Wrapper>
                  <S.Content>
                    <ul>
                      <ListItem
                        name="Native Name"
                        data={country.name.official}
                      />
                      <ListItem name="Population" data={populationCount} />
                      <ListItem name="Region" data={country.region} />
                      <ListItem
                        name="Sub Region"
                        data={country.subregion ?? "N/A"}
                      />
                      <ListItem name="Capital" data={country.capital} />
                    </ul>
                  </S.Content>
                  <S.Content right={true}>
                    <ul>
                      <ListItem name="Top Level Domain" data={country.tld!} />
                      <ListItem name="Currencies" data={currency} />
                      <ListItem name="Languages" data={language} />
                    </ul>
                  </S.Content>
                </S.Wrapper>
                <S.ListSpan>
                  <h4>Border Countries:</h4>
                  {"    "}
                  {country.borders
                    ? country.borders.map((item: string) => (
                        <S.ButtonWrapper key={item}>
                          <Button
                            width={"98px"}
                            height={"30px"}
                            onClick={() =>
                              router.push(`/country/${item.toLowerCase()}`)
                            }
                            label={item}
                            margin={"5px"}
                          />
                        </S.ButtonWrapper>
                      ))
                    : "N/A"}
                </S.ListSpan>
              </S.RightContainer>
            </S.BottomWrapper>
          </S.BottomContainer>
        </S.CountryWrapper>
      </S.CountryContainer>
    </div>
  );
};

export default Country;

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
