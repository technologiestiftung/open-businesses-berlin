import React from 'react';
import { Box } from 'rebass/styled-components';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import { withRouter } from 'react-router-dom';
import Theme from 'styles/DefaultTheme';

import Map from 'modules/Map';
import LoadingOverlay from 'components/LoadingOverlay';

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
        <LoadingOverlay loading={true} />
        <Map />
      </StyledWrapper>
    </ThemeProvider>
  );
};

export default withRouter(AppWrapper);
