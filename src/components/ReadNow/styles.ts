import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 98px;

  h3 {
    font-family: 'Merriweather Sans', sans-serif;
    font-size: 48px;
    letter-spacing: -2%;
  }
`;

export const SelectBibleInfo = styled.div`
  margin: 56px 0;
  gap: 42px;
  height: 40px;
  display: flex;
  align-items: center;

  button {
    background: none;
    border: none;
    border-bottom: 1px solid #000;
    width: 184px;
    font-size: 24px;
    letter-spacing: -2%;
    font-weight: bold;
  }
`;

export const Text = styled.div`
  font-size: 24px;
`;
