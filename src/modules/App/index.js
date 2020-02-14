import React from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AppWrapper from './AppWrapper';

const history = createBrowserHistory();

const NotFoundRoute = () => <Redirect to="/" />;

const App = p => {
  return (
    <Router history={history}>
      <Switch>
        <Route
          path={['/']}
          component={AppWrapper}
        />
        <Route component={NotFoundRoute} />
      </Switch>
    </Router>
  );
}

export default App;
