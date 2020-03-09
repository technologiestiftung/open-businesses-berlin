import React, { PureComponent } from "react";
import styled from "styled-components";
import { Route, withRouter, Switch } from "react-router-dom";
import { useStoreState } from "easy-peasy";

import SidebarList from "./SidebarList/";
import SidebarClose from "./SidebarClose/";
import Card from "components/Card/Card";

const SidebarWrapper = styled.div`
  display: block;
  background: #fefefe;
  display: flex;
  box-shadow: ${(props) => props.theme.boxShadow};
  z-index: 1000;
  position: absolute;
  height: calc((100vh - 0px) - 24px);
  margin: 12px;
  transform: ${(props) =>
    props.isVisible ? "translate3d(0, 0, 0)" : "translate3d(-110%, 0, 0)"
  };
  transition: transform 0.5s, box-shadow 0.5s;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`;

const SidebarContent = styled.div`
  min-width: 370px;
  max-width: 370px;
  padding: 20px 15px;
`;

const Sidebar = (p) => {
  const { data, match} = p;

const isVisible = match.path !== '/';

return (
  <SidebarWrapper isVisible={isVisible}>
    <SidebarClose />
    <SidebarContent>
      <Switch>
        <Route
          path="/liste/:itemId"
          render={() => <Card data={data} />}
        />
        <Route
          path="/liste"
          render={() => <SidebarList data={data} />}
        />
      </Switch>
    </SidebarContent>
  </SidebarWrapper>
);
};

export default withRouter(Sidebar);
