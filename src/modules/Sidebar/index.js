import React, { PureComponent } from "react";
import styled from "styled-components";
import { Route, withRouter, Switch } from "react-router-dom";
import { useStoreState } from "easy-peasy";

import SidebarList from "./SidebarList/";
import SidebarClose from "./SidebarClose/";
import Card from "components/Card/Card";
import SidebarWrapper from './SidebarWrapper';

const SidebarContent = styled.div`
  min-width: 370px;
  max-width: 370px;
  padding: 20px 15px;
`;

const filterById = (geojson, id) => {
  if (geojson) {
    return geojson.features.find(feat => feat.properties.autoid === id);
  }
};

const Sidebar = (p) => {
  const { data, match} = p;

  const isVisible = match.path !== '/';
  const id = match.params.itemId;

  const selectedItem = filterById(data,id);

  return (
    <SidebarWrapper isVisible={isVisible}>
      <SidebarClose />
      <SidebarContent>
        <Switch>
          <Route
            path="/liste/:itemId"
            render={() => <Card data={selectedItem} />}
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
