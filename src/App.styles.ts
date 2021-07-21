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
  orange: '#ff801a',
  veggieGreen: '#39a15f',
  cheese: '#f6921e',
  meatRed: '#b73733',
  chicken: '#a56536',
  grey: '#eee',
  border: '#e9e9e9',
  font: '#828282',
};
