const defaultEndpoint = "https://restcountries.com/v3.1/all";
export const getServerSideProps = async () => {
  const res = await fetch(defaultEndpoint);
  const data = await res.json();
  return { props: { data } };
};