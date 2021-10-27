import React from 'react'
// import Button from '../../components/button'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { CountryInterface } from '../../types/interfaces'
import { numberWithCommas as getNumberWithCommas } from '../../utilities/functions/regex.function'
import * as S from '../../styles/country/[id].styles'
import { ListItem } from '../../components/countryPage/listItem'

interface CountryProps {
  data: CountryInterface[]
  noDataFoundText?: string
}

const Country = ({ data }: CountryProps) => {
  const router = useRouter()
  const country = data[0]
  const populationCount: string = getNumberWithCommas(country.population)
  const currency = Object.keys(country?.currencies).join(', ')
  const language = Object.values(country?.languages ?? { 'N/A': 'N/A' }).join(
    ', '
  )

  return (
    <div>
      <Head>
        <title> Country | {data[0].name.official}</title>
      </Head>
      <S.RootContainer>
        <S.BackButtonContainer>
          <S.BackBtn onClick={() => {
            router.back()
          }} >
            Back
          </S.BackBtn>
        </S.BackButtonContainer>
        <S.CountryContainer>
          <S.CountryImage>
            <Image
              width={560}
              height={401}
              src={country.flags.svg}
              alt={country.name.common}
              layout="intrinsic"
            />
          </S.CountryImage>
          <S.CountryDetailsContainer>
            <S.TitleContainer>
              <h1> {country.name.common} </h1>
            </S.TitleContainer>
            <S.CountryInfos>
              <S.LeftContent>
                <ListItem margin="8px" name="Native Name" data={country.name.official} />
                <ListItem margin="8px" name="Population" data={populationCount} />
                <ListItem margin="8px" name="Region" data={country.region} />
                <ListItem margin="8px" name="Sub Region" data={country.subregion ?? 'N/A'} />
                <ListItem margin="8px" name="Capital" data={country.capital} />
              </S.LeftContent>
              <S.RightContent>
                <ListItem margin="8px" name="Top Level Domain" data={country?.tld ?? ['N/A']} />
                <ListItem margin="8px" name="Currencies" data={currency} />
                <ListItem margin="8px" name="Languages" data={language} />
              </S.RightContent>
            </S.CountryInfos>
            <S.CountryBorders>
              <h4> Border Countries: </h4>
              { country.borders?.map(country => {
                return <S.BorderItem onClick={() => {
                  router.push(`/country/${country.toLowerCase()}`)
                }} key={country}>
                  { country }
                </S.BorderItem>
              }) }
            </S.CountryBorders>
          </S.CountryDetailsContainer>
        </S.CountryContainer>
      </S.RootContainer>
    </div>
  )
}

export default Country

export const getStaticProps = async (context: { params: { id: string } }) => {
  try {
    const id = context.params.id
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${id}`)
    const data = await res.json()
    return { props: { data } }
  } catch (err) {
    console.log(err)
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`https://restcountries.com/v3.1/all`)
  const data = await res.json()

  const paths = data.map((item: { cca3: string }) => {
    const { cca3: cca2 } = item
    return {
      params: { id: cca2.toLowerCase() }
    }
  })
  return {
    paths,
    fallback: false
  }
}
