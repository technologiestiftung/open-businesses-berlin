import React from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from "easy-peasy";
import { ThemeProvider } from "styled-components";
import App from "./App";
// import * as serviceWorker from './serviceWorker';

import Store from "./state/Store";
import GlobalStyle from "./styles/Global";
import defaultTheme from "./styles/DefaultTheme";
// import App from '~/containers/App';

ReactDOM.render(
  <StoreProvider store={Store}>
    <ThemeProvider theme={defaultTheme}>
      <>
        <GlobalStyle />
        {/* <DynamicGlobalStyle /> */}
        <App />
      </>
    </ThemeProvider>
  </StoreProvider>,
  document.getElementById("root")
);

//  Warning Firefox throw an error with this on localhost

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
