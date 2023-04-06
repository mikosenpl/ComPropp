import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
    /*font-family: 'Roboto Mono', monospace;*/
    margin: 0;
    padding: 0;
    overflow-y: hidden;
  }
`;
