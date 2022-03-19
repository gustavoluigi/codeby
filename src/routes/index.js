import { Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Abaixo10Reais from '../pages/Abaixo10Reais';
import Acima10Reais from '../pages/Acima10Reais';
import Home from '../pages/Home';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/acima-10-reais">
        <Header />
        <Acima10Reais />
      </Route>
      <Route path="/abaixo-10-reais">
        <Header />
        <Abaixo10Reais />
      </Route>
    </Switch>
  );
}

export default Routes;
