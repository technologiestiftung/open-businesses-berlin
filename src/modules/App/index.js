import React, { useEffect } from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import AppWrapper from "./AppWrapper";
import { useStoreActions, useStoreState } from "easy-peasy";
import queryString from 'query-string';

import history from '../../history';

const NotFoundRoute = () => <Redirect to="/" />;

const App = (p) => {
  const loadData = useStoreActions((action) => action.loadData);
  const data = useStoreState(state => state.data);
  const highlightData = useStoreState(state => state.highlightData);

  history.listen(location => updateLocation(location));

  const updateLocation = location => {
    console.log('location updated', highlightData)
  }

  useEffect(() => {
    loadData();
  }, []);

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
