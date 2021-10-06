import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Open Sans', sans-serif;
  }
  body {
    margin: 0;
    width: 100%;
    position: relative;
    padding: 0;
    height: 100vh;
    letter-spacing: 1px;
  }
  h1,h2,h3,h4,h5,h6,p,ol,ul {
    padding: 0;
    margin: 0;
  }
  img {
    width: 100%;
  }
`;
