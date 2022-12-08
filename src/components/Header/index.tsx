import menu from '../../assets/icons/menu.svg';
import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <h1>
        DAILY
        <span>.</span>
        BIBLE</h1>

      <button>
        <img src={menu} alt="menu" />
      </button>
    </Container>
  );
}
