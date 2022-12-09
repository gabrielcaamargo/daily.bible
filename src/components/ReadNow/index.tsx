import { useReducer } from 'react';
import BibleInfoMenu from '../BibleInfoMenu';
import { Container, SelectBibleInfo, Text } from './styles';

interface State {
  isChapterMenuOpen: boolean;
  isVersionMenuOpen: boolean;
}

interface Action {
  type: string
}

export default function ReadNow() {
  function isMenuOpenDispatch(state: State, action: Action) {
    console.log(action);
    switch(action.type) {
    case 'chapter':
      return {
        isChapterMenuOpen: !state.isChapterMenuOpen
      };

    case 'version':
      return {
        isVersionMenuOpen: !state.isVersionMenuOpen
      };
    }
  }

  const menuInitialValue = {
    isChapterMenuOpen: false,
    isVersionMenuOpen: false,
  };

  const [state, dispatch] = useReducer(isMenuOpenDispatch, menuInitialValue);
  console.log(state.isChapterMenuOpen);
  return (
    <Container>
      <h3>Read now</h3>

      <SelectBibleInfo>
        <button onClick={() => dispatch({type: 'chapter'})}>
          Genesis 1
          {state.isChapterMenuOpen && <BibleInfoMenu />}
        </button>
        <button  onClick={() => dispatch({type: 'version'})}>
          NIV
          {state.isVersionMenuOpen && <BibleInfoMenu />}
        </button>
        <button>Aa</button>
      </SelectBibleInfo>

      <Text>
        <p><strong>1</strong> Lorem ipsum dolor sit amet.</p>
        <p><strong>2</strong> Lorem ipsum dolor sit amet.</p>
        <p><strong>3</strong> Lorem ipsum dolor sit amet.</p>
        <p><strong>4</strong> Lorem ipsum dolor sit amet.</p>
        <p><strong>5</strong> Lorem ipsum dolor sit amet.</p>
        <p><strong>6</strong> Lorem ipsum dolor sit amet.</p>
        <p><strong>7</strong> Lorem ipsum dolor sit amet.</p>
      </Text>
    </Container>
  );
}
