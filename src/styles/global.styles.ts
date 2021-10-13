import { createGlobalStyle } from "styled-components"


export const GlobalStyles = createGlobalStyle`
  html,body {
    overflow-x: hidden;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Nunito Sans', sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  
  * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
  `
