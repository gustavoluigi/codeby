import { Link } from 'react-router-dom';
import { Title } from './style';

function Header() {
  return (
    <Title>
      <Link to="/">
        Voltar
      </Link>
      Meu carrinho
    </Title>
  );
}

export default Header;
