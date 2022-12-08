import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 424px;
  border-radius: 8px;
  background: url('src/assets/images/new-converted.jpg');
  background-size: cover;
  background-position: center center;
  overflow: hidden;
  display: flex;
  justify-content: start;
  align-items: center;
  backdrop-filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.25));
  margin-top: 80px;

  .container-text {
    padding: 0 56px;

    p {
      font-weight: bold;
      font-size: 42px;
      letter-spacing: -2px;
      &:first-of-type {
        color: ${({theme}) => theme.green};
      }

      &:last-of-type {
        color: #FFF;
      }
    }
  }
`;
