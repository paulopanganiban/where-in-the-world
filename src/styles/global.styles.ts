import { createGlobalStyle } from "styled-components"


export const GlobalStyles = createGlobalStyle`
  html,body {
    margin: 0; padding: 0;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Nunito Sans', sans-serif;
  }
  a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

  `
