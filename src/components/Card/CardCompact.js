import React from "react";
import styled from "styled-components";

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

  return (
    <StyledCardWrapper>
      <CardHeader 
        hasBorder={true} 
        data={data} 
      />
    </StyledCardWrapper>
  );
};

export default CardCompact;
