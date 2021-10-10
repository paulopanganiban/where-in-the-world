import React from "react";
import styled from "styled-components";
import Layout from "../../components/layout";
import { useRouter } from "next/router";
import Link from "next/link";
import { Props } from "..";


const Country = ({ data }: Props) => {
  const { name: {common }} = data[0]
  console.log(data[0])
  return (
    <CountryContainer>
      <p>this is article {common}</p>
      <Link href="/">Go Back</Link>
    </CountryContainer>
  );
};

export default Country;
const CountryContainer = styled.div`

`
const H1 = styled.h1``;

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
