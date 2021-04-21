import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap');

  body {
    box-sizing: border-box;
    background-color: #000;
    color:#dedede;
    font-family: 'Courier Prime', monospace;
    height: 100vh;
    line-height: 1.8;
    margin: 0;

  }

  div {
    box-sizing: border-box;
  }
`;
