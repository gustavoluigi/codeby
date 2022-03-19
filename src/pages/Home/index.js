import { Container, LinkStyled, Title } from './styles';

function Home() {
  return (
    <>
      <Title>
        Meus carrinhos
      </Title>
      <Container>

        <LinkStyled to="/acima-10-reais">
          Acima de 10 reais
        </LinkStyled>
        <LinkStyled to="/abaixo-10-reais">
          Abaixo de 10 reais
        </LinkStyled>
      </Container>
    </>
  );
}

export default Home;
