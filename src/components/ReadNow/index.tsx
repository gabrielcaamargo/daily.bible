import { useState } from 'react';
import { useTranslate } from '../../hooks/useTranslate';
import BibleInfoMenu from '../BibleInfoMenu';
import { Container, SelectBibleInfo, Text } from './styles';


export default function ReadNow() {
  const [isChapterMenuOpen, setisChapterMenuOpen] = useState<boolean>(false);
  const [isVersionMenuOpen, setIsVersionMenuOpen] = useState<boolean>(false);

  function handleOpenChapterMenu() {
    setisChapterMenuOpen(prevState => !prevState);
    setIsVersionMenuOpen(false);
  }

  function handleOpenVersionMenu() {
    setIsVersionMenuOpen(prevState => !prevState);
    setisChapterMenuOpen(false);
  }

  return (
    <Container>
      {useTranslate(
        <h3>Read now</h3>,
        <h3>Leia agora</h3>
      )}

      <SelectBibleInfo>
        <button onClick={handleOpenChapterMenu}>
          Genesis 1
          {isChapterMenuOpen && <BibleInfoMenu />}
        </button>
        <button onClick={handleOpenVersionMenu}>
          NIV
          {isVersionMenuOpen && <BibleInfoMenu />}
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
