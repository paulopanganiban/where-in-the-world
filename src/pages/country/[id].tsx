import React from "react";
import styled from "styled-components";
import Layout from "../../components/layout";

export const getServerSideProps = async ({ params }: any) => {
  try {
    const res = await fetch(
      `https://restcountries.com/v3.1/name/peru`
    );
    const country = await res.json();
    return { props: { country } };
  } catch (err) {
    console.log(err);
  }
};
interface Props {
  country: any;
}
const Country = ({ country }: Props) => {
  console.log(country);
  return (
    <Layout>
      <H1>{country.status}</H1>
    </Layout>
  );
};

export default Country;

const H1 = styled.h1``;
