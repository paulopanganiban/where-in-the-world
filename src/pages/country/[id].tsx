import React from "react";
import styled from "styled-components";
import Layout from "../../components/layout";

// export const getStaticPaths = async () => {
//   const res = await fetch("https://restcountries.com/v3.1/all");
//   const countries = await res.json();
//   const paths = countries.map((country: {alpha3code: string}) => ({
//     params: { id: country.alpha3code },
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// };
// export const getStaticProps = async ({ params }: any) => {
//   try {
//     const res = await fetch(`https://restcountries.com/v3.1/name/${params}`);
//     const country = await res.json();
//     return { props: { country } };
//   } catch (err) {
//     console.log(err);
//   }
// };
interface Props {
  country: any;
}
const Country = ({ country }: Props) => {
  console.log(country);
  return (
      <H1>test</H1>
  );
};

export default Country;

const H1 = styled.h1``;
