import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
  }
  #root {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 1440px) {
    html {
      /* font-size: 20px; */
    }
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
