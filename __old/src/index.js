import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from 'easy-peasy';
import { ThemeProvider } from 'styled-components';

import Store from './state/Store';
import GlobalStyle from './styles/Global';
import defaultTheme from './styles/DefaultTheme';
// import App from '~/containers/App';

ReactDOM.render(
  <StoreProvider store={Store}>
    <ThemeProvider theme={defaultTheme}>
      <>
        <GlobalStyle />
        {/* <DynamicGlobalStyle /> */}
        {/* <App /> */}
      </>
    </ThemeProvider>
  </StoreProvider>,
  document.getElementById('root')
);
