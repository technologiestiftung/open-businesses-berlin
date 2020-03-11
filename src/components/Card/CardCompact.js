import React from "react";
import styled from "styled-components";
import { useStoreActions } from 'easy-peasy';
import history from '../../history';

import CardWrapper from "./CardWrapper";
import CardHeader from "./CardHeader";

const StyledCardWrapper = styled(CardWrapper)`
  margin-bottom: 10px;
  padding: 5px;
  padding-bottom: 10px;
  cursor: pointer;
  border-width: 1px solid;
  border-bottom: grey;
  border-radius: 0;
  will-change: border-color, transform;
  transition: border-color 0.2s, transform 0.2s;

  &:hover {
    border-color: black;
    transform: translateX(5px);
  }
`;

const CardCompact = (p) => {
  const { data } = p;
  const { properties } = data;
  const setHighlightData = useStoreActions(a => a.setHighlightData);
  const setMapCenter = useStoreActions(a => a.setMapCenter);

  const handleClick = (evt, data) => {
    const { properties } = data;
    const nextLocation = `/liste/${properties.autoid}`;
    setHighlightData(data);
    history.push(nextLocation);
  };

  return (
    <StyledCardWrapper
      onClick={(evt) => handleClick(evt, data)}
    >
      <CardHeader
        hasBorder={true}
        data={properties}
      />
    </StyledCardWrapper>
  );
};

export default CardCompact;
