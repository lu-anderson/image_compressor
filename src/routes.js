import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import GeneretedImages from './pages/GeneretedImages';

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" component={ Login } />
      <Route path="/images" component={ GeneretedImages } />
      <Route path="/" component={ Home } />
    </Switch>
  );
}
