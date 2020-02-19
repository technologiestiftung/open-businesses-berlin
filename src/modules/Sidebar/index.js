import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Route, withRouter, Switch } from 'react-router-dom';
import { useStoreState } from 'easy-peasy';

import SidebarList from './SidebarList/';
import SidebarClose from './SidebarClose/';

const SidebarWrapper = styled.div`
  display: block;
  background: #fefefe;
  display: flex;
  box-shadow: ${props => (props.isVisible ? props.theme.boxShadow : 'none')};
  z-index: 1000;
  position: absolute;
  height: calc((100vh - 0px) - 24px);
  margin: 12px;
  transform: ${props => (props.isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(-100%, 0, 0)')};
  transition: transform .5s, box-shadow .5s;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`;

const SidebarContent = styled.div`
  min-width: 370px;
  max-width: 370px;
  padding: 20px 15px;
`;

const Sidebar = p => {
  const data = useStoreState(state => state.enrichedData);
  console.log(p.history.location);
  return (
      <Route
        path={['/liste']}
        children={({ match }) => {
          console.log(match);
          return (
            <SidebarWrapper isVisible={match}>
              <SidebarClose />
              <SidebarContent>
                <Switch>
                  { data && (<Route path="/liste" component={() =><SidebarList data={data}/>}/>)}
                </Switch>
              </SidebarContent>
            </SidebarWrapper>
          )
        }}
      />
  )
}

export default withRouter(Sidebar);
