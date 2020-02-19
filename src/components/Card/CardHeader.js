import React, { Fragment } from 'react';
import styled from 'styled-components';
import { createMarkup } from 'utils';

import c from 'config';

const CardDescription = styled.div`
  font-size: 12px;
  line-height: 150%;
  color: ${props => props.type}
`;

const CardTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin: 4px 0;
  line-height: 1.2;
  letter-spacing: ${props => props.theme.letterSpacing[1]};
  margin-bottom: ${props => props.theme.margin[0]};
  color: ${props => props.type}
`;

const CardHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${CardDescription} {
    color: ${props => props.type}
  }

  ${CardTitle} {
    color: ${props => (props.teaserUrl ? 'white' : props.theme.colors.black)};
    font-family: ${props => props.theme.fonts.sansBold };
    font-weight: 600;
  }
`;

const CardHeader = p => {
  const { data, type } = p;
  const configTooltip = c.tooltip;

  return (
    <CardHeaderWrapper>
      { configTooltip.map((d,i) => {
        console.log(d);
        return (
          <Fragment key={`key-cardheader-${i}`}>
            { d.component === 'title' && (
              <CardTitle 
                type={type}
              >
                {data[d.id]}
              </CardTitle>) }
            { d.component === 'description' && (
              <CardDescription 
                dangerouslySetInnerHTML={createMarkup(data[d.id])} 
                type={type}>
              </CardDescription>) }
          </Fragment>
        )
      }) }
    </CardHeaderWrapper>
  )
}

export default CardHeader;