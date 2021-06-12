import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Detail from './pages/Detail';
import Create from './pages/Create';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/books" exact component={Create} />
    <Route path="/books/:id" component={Detail} />
  </Switch>
);

export default Routes;
