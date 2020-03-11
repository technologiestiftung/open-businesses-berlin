import React, { useEffect } from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import AppWrapper from "./AppWrapper";
import { useStoreActions } from "easy-peasy";

import history from '../../history';

const NotFoundRoute = () => <Redirect to="/" />;

const App = (p) => {
  const loadData = useStoreActions((action) => action.loadData);

  useEffect(() => {
    loadData();
    console.log('loading data')
  });

  return (
    <Router history={history}>
      <Switch>
        <Route path={["/"]} component={AppWrapper} />
        <Route component={NotFoundRoute} />
      </Switch>
    </Router>
  );
};

export default App;
