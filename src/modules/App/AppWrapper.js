import React from "react";
import { Box } from "rebass/styled-components";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import { withRouter, Route } from "react-router-dom";
import Theme from "styles/DefaultTheme";
import { useStoreState } from "easy-peasy";

import Map from "modules/Map";
import Sidebar from "modules/Sidebar";
import Nav from "components/Nav";
import LoadingOverlay from "components/LoadingOverlay";

const DynamicGlobalStyle = createGlobalStyle``;

const StyledWrapper = styled(Box)`
  width: 100%;
  height: 100%;
  transition: all 0.25s ease-in-out;
`;

const AppWrapper = () => {
  const isLoading = useStoreState((state) => state.isLoading);
  const data = useStoreState((state) => state.data);
  const mapCenter = useStoreState((state) => state.mapCenter);
  const mapZoom = useStoreState((state) => state.mapZoom);
  const style = process.env.REACT_APP_MAP_STYLE;

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <DynamicGlobalStyle />
      <StyledWrapper>
        <LoadingOverlay loading={isLoading} />
        <Route path={['/liste/:itemId','/liste', '/']} render={() => <Sidebar data={data} />} />
        <Nav />
        <Map
          data={data}
          mapCenter={mapCenter}
          mapZoom={mapZoom}
          style={style}
        />
      </StyledWrapper>
    </ThemeProvider>
  );
};

export default withRouter(AppWrapper);
