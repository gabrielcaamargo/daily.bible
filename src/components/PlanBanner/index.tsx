import { useTranslate } from '../../hooks/useTranslate';
import { Container } from './styles';

export default function PlanBanner( ) {
  return (
    <Container>
      <div className="container-text">
        {useTranslate(<p>New converted?</p>, <p>Novo convertido?</p>)}
        {useTranslate(<p>Try a Bible reading plan to know more about God!</p>, <p>Teste um plano de leitura Bíblico para aprender mais sobre Deus!</p>)}
      </div>
    </Container>
  );
}
