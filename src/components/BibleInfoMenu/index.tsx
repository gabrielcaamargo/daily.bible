import { Link } from 'react-router-dom';
import { Button, Container } from './styles';

interface BibleInfoMenuProps {
  chapters?: string[];
  chapterLink?: string;
  versions?: string[];
}

export default function BibleInfoMenu ({chapters, chapterLink, versions}: BibleInfoMenuProps) {
  return (
    <Container>
      {chapters && chapters.map(chapter => (
        <Button key={Math.random()}>
          <Link to={`/${chapterLink}`}>
            {chapter}
          </Link>
        </Button>
      ))}

      {versions && versions.map(version => (
        <Button key={Math.random()}>
          {version}
        </Button>
      ))}
    </Container>
  );
}
