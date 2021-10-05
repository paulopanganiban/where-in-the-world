import { createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`

  body {
    margin: 0; padding: 0;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Nunito Sans', sans-serif;
  }
  `
