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
  grey: '#eee',
  border: '#e9e9e9',
  font: '#828282',
};
