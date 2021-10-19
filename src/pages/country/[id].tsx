import React from "react";
import Button from "../../components/button";
import Image from "next/image";
import { Props } from "..";
import { useRouter } from "next/router";
import { arrayToString } from "../../utilities/functions/stringManipulator.function";
import { numberWithCommas as getNumberWithCommas } from "../../utilities/functions/regex.function";
import  * as S from "../../styles/country/[id].styles";
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
  return (
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
                    <li>
                      <S.Span>
                        <h4>Native Name:</h4>
                        <p>{country.name.official}</p>
                      </S.Span>
                    </li>
                    <li>
                      <S.Span>
                        <h4>Population:</h4>
                        <p>{populationCount}</p>
                      </S.Span>
                    </li>
                    <li>
                      <S.Span>
                        <h4>Region:</h4>
                        <p>{country.region}</p>
                      </S.Span>
                    </li>
                    <li>
                      <S.Span>
                        <h4>Sub Region:</h4>
                        <p>{country.subregion}</p>
                      </S.Span>
                    </li>
                    <li>
                      <S.Span>
                        <h4>Capital:</h4>
                        <p>{country.capital}</p>
                      </S.Span>
                    </li>
                  </ul>
                </S.Content>
                <S.Content right={true}>
                  <ul>
                    <li>
                      <S.Span>
                        <h4>Top Level Domain:</h4>
                        <p>{country.tld}</p>
                      </S.Span>
                    </li>
                    <li>
                      <S.Span>
                        <h4>Currencies:</h4>
                        <p>{currency}</p>
                      </S.Span>
                    </li>
                    <li>
                      <S.Span>
                        <h4>Languages:</h4>
                        <p>{language}</p>
                      </S.Span>
                    </li>
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
                  : "N/a"}
              </S.ListSpan>
            </S.RightContainer>
          </S.BottomWrapper>
        </S.BottomContainer>
      </S.CountryWrapper>
    </S.CountryContainer>
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
