import React, { PureComponent } from "react";
import styled from "styled-components";
import { NavLink, withRouter, matchPath } from "react-router-dom";

import ListIcon from "@material-ui/icons/List";
import InfoIcon from "@material-ui/icons/InfoOutlined";
import FavIcon from "@material-ui/icons/FavoriteBorderOutlined";
import SearchIcon from "@material-ui/icons/Search";

import EdgeButton from "components/EdgeButton";
import { media } from "styles/Utils";

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  box-shadow: 0 2px 40px 0 rgba(30,55,145,0.15);
  flex-grow: 0;
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 1000;

  ${media.m`
    transform: ${(props) =>
      props.isNavOpen ? "translate3d(375px, 0, 0)" : "none"};
    transition: transform 375ms;
  `}
`;

const NavItem = styled(NavLink)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

const navConfig = [
  { path: "/liste", title: "Listenansicht", icon: <ListIcon /> },
];

const Nav = (p) => {
  const { location } = p;
  const { pathname } = location;

  const isNavOpen =
    matchPath(pathname, {
      path: navConfig.map((m) => m.path),
    }) !== null;

  return (
    <NavWrapper isNavOpen={isNavOpen}>
      {navConfig.map((m) => (
        <NavItem
          exact
          to={{ pathname: m.path, search: "" }}
          // onClick={() => (this.handleClick(m.title))}
          key={m.path}
        >
          <EdgeButton
            title={m.title}
            aria-label={m.title}
            isActive={pathname === m.path}
          >
            {m.icon}
          </EdgeButton>
        </NavItem>
      ))}
    </NavWrapper>
  );
};

export default withRouter(Nav);
