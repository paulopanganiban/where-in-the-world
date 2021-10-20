import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle(({theme}) => ({
  'html, body': {
    overflowX: 'hidden',
    backgroundColor: theme.body,
    color: theme.text,
    fontFamily: 'Nunito Sans, sans-serif'
  },

  'a': {
    color: 'inherit',
    textDecoration: 'none'
  },

  '*': {
    padding: '0',
    margin: '0',
    boxSizing: 'border-box'
  }
}))
