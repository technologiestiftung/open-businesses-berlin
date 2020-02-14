import React from 'react';
import { Box } from 'rebass/styled-components';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
// import { useStoreState, useStoreActions } from 'easy-peasy';
import GlobalStyle from 'styles/GlobalStyle';
import { withRouter } from 'react-router-dom';
import Theme from 'styles/DefaultTheme';

const DynamicGlobalStyle = createGlobalStyle``;

const StyledWrapper = styled(Box)`
  width: 100%;
  height: 100%;
  transition: all .25s ease-in-out;
`;

const AppWrapper = () => {

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <DynamicGlobalStyle />
      <StyledWrapper>
      </StyledWrapper>
    </ThemeProvider>
  );
};

export default withRouter(AppWrapper);
