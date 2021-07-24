import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
      height: 100vh;
  }

  body {
      margin: 0;
      padding: 0;
      font-family: Helvetica, Arial, sans-serif;
      background-color: #f9f9f9;
  }
`;

export const theme = {
  appBg: '#f9f9f9',
  darkBg: '#eaeaea',
  orange: '#ff801a',
  grey: '#eee',
  whiteBgBorder: '#e9e9e9',
  greyBgBorder: '#d0d0d0',
  font: '#828282',
};
