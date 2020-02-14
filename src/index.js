import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from 'easy-peasy';

import Store from 'state/Store';
import App from 'modules/App';

ReactDOM.render(
  <StoreProvider store={Store}>
    <App />
  </StoreProvider>,
  document.getElementById('root')
);
