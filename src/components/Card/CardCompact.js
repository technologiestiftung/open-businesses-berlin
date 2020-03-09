import React, { PureComponent } from "react";
import styled from "styled-components";

import CardWrapper from "./CardWrapper";
import CardHeader from "./CardHeader";

const StyledCardWrapper = styled(CardWrapper)`
  margin-bottom: ${(props) => props.theme.margin[0]};
  padding: ${(props) => props.theme.padding[0]};
  padding-bottom: ${(props) => props.theme.margin[0]};
  cursor: pointer;
  border-bottom: 2px solid ${(props) => props.theme.colors.lightgrey};
  border-radius: 0;
  will-change: border-color, transform;
  transition: border-color 0.2s, transform 0.2s;

  &:hover {
    border-color: ${(props) => props.theme.colors.midgrey};
    transform: translateX(5px);
  }
`;

const CardCompact = (p) => {
  const { data } = p;

  return (
    <StyledCardWrapper>
      <CardHeader data={data} />
    </StyledCardWrapper>
  );
};

export default CardCompact;
