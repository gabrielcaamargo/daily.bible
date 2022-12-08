import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    background-color: ${({theme}) => theme.background};
    color: ${({theme}) => theme.textColor};
    padding: 80px 74px;
  }
`;
