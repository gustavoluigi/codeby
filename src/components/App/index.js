import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from '../../assets/styles/global';
import Routes from '../../routes';
import { Container } from './styles';
import Header from '../Header';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Container>
        {/* <Header /> */}
        <Routes />
      </Container>
    </BrowserRouter>
  );
}

export default App;
