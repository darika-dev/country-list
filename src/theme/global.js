import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: all .3s linear;
  }

`;
