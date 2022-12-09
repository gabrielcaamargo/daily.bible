import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 3fr 1fr;
  animation: showUp 1 0.1s;

  @keyframes showUp {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

`;

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
`;

export const MenuContainer = styled.div`
  background-color: ${({theme}) => theme.background};
  padding: 92px 48px;
  display: flex;
  flex-direction: column;

  button {
    width: fit-content;
    align-self: flex-end;
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export const OptionsContainer = styled.ul`
  margin-top: 144px;
  display: flex;
  flex-direction: column;
  gap: 36px;

  button {
    align-self: flex-start;

    li {
      font-size: 28px;
      font-weight: bold;
      letter-spacing: -2px;
      list-style: none;
    }
  }

`;
