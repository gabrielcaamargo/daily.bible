import { useContext } from 'react';
import { MenuContext } from '../../contexts/MenuContext';

import ReactDOM from 'react-dom';
import { Container, MenuContainer, Overlay, OptionsContainer } from './styles';

import menu from '../../assets/icons/menu-opened.svg';

const portalRoot = document.getElementById('menu-root') as HTMLElement;

export default function Menu() {
  const { setIsMenuOpen } = useContext(MenuContext);

  function handleCloseMenu() {
    setIsMenuOpen(false);
  }

  return ReactDOM.createPortal(
    <Container>
      <Overlay />
      <MenuContainer>
        <button onClick={handleCloseMenu}>
          <img src={menu} alt="menu" />
        </button>

        <OptionsContainer>
          <button><li>Change language</li></button>
          <button><li>Support me</li></button>
        </OptionsContainer>
      </MenuContainer>
    </Container>,
    portalRoot
  );
}
