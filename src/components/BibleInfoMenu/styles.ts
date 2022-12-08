import styled from 'styled-components';

export const Container = styled.div`
  max-width: 312px;
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  background-color: ${({theme}) => theme.gray.light};
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 4px;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.2);
`;

export const Button = styled.button`
  height: 56px;
  width: 56px;
  background-color: ${({theme}) => theme.background};
  border: none;
  outline: none;
  transition: all 0.2s ease-in-out;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    filter: brightness(1.2);
  }
`;
