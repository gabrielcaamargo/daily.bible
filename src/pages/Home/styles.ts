import styled from 'styled-components';

export const Container = styled.div`
  h2 {
    font-size: 36px;
    letter-spacing: -2px;
    font-weight: 400;

    span {
      color: ${({theme}) => theme.green};
    }
  }
`;
