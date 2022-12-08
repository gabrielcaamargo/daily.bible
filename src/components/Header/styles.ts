import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-family: 'Merriweather Sans', sans-serif;
    letter-spacing: -2px;
    font-size: 48px;
    span {
      color: ${({theme}) => theme.green};
    }
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }
`;
