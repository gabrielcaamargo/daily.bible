import { useContext } from 'react';
import menu from '../../assets/icons/menu-closed.svg';
import { Container } from './styles';

import { MenuContext } from '../../contexts/MenuContext';
import Menu from '../Menu';

export default function Header() {
  const {isMenuOpen, setIsMenuOpen} = useContext(MenuContext);

  function handleOpenMenu() {
    setIsMenuOpen(true);
  }

  return (
    <Container>
      <h1>
        DAILY
        <span>.</span>
        BIBLE</h1>

      <button onClick={handleOpenMenu}>
        <img src={menu} alt="menu" />
      </button>

      {isMenuOpen && <Menu />}
    </Container>
  );
}
