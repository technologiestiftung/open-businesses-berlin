/** @jsx jsx */
import { jsx } from 'theme-ui'
import c from "config";
import React from 'react';

import CardTitle from './CardTitle';
import CardLink from './CardLink';
import CardDescription from './CardDescription';

export default p => {
  const { data } = p;
  return (
    <>
    {data && (
      <>
      { c.detail.map((block,i) => {
        switch(block.component) {
          case 'title':
            return (
              <CardTitle
                key={`card-title-key-${i}`}
                size="responsive"
              >{ data.properties[block.id] }</CardTitle>
            )
          case 'description':
            return (
              <CardDescription
                key={`card-desc-key-${i}`}
                label={block.label}
                content={data.properties[block.id]}
              />
            )
          case 'link':
            return (
              <CardLink
                ismail="true"
                key={`card-link-key-${i}`}
                label={block.label}
                content={data.properties[block.id]}
                url={data.properties[block.id]}
              />
            )
          default:
            return null;
        }
      }) }
      </>
    )}
    </>
  )
}
