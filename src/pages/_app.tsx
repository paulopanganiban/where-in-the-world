import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { GlobalStyles } from "../styles/global.styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />

      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
