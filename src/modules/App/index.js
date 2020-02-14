import React from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AppWrapper from './AppWrapper';
import { useStoreActions } from 'easy-peasy';

const history = createBrowserHistory();

const NotFoundRoute = () => <Redirect to="/" />;


const App = p => {
  const loadData = useStoreActions(action => action.loadData);
  loadData();

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
