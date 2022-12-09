import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { MenuContext } from '../../contexts/MenuContext';

import ReactDOM from 'react-dom';
import { Container, MenuContainer, Overlay, OptionsContainer } from './styles';

import menu from '../../assets/icons/menu-opened.svg';

const portalRoot = document.getElementById('menu-root') as HTMLElement;

export default function Menu() {
  const {language, setLanguage} = useContext(LanguageContext);
  const { setIsMenuOpen } = useContext(MenuContext);

  function handleCloseMenu() {
    setIsMenuOpen(false);
  }

  function handleChangeLanguage() {
    setLanguage(prevState => setLanguage(prevState === 'en' ? 'pt' : 'en'));
  }

  return ReactDOM.createPortal(
    <Container>
      <Overlay />
      <MenuContainer>
        <button onClick={handleCloseMenu}>
          <img src={menu} alt="menu" />
        </button>

        <OptionsContainer>
          <button onClick={handleChangeLanguage}><li>{language === 'en' ? 'Change language' : 'Mudar idioma'}</li></button>
          <button><li>{language === 'en' ? 'Support me' : 'Me apoie'}</li></button>
        </OptionsContainer>
      </MenuContainer>
    </Container>,
    portalRoot
  );
}
