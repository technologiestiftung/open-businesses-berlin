/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { Fragment } from 'react';
import c from "config";

import CardTitle from './CardTitle';
import CardLink from './CardLink';
import CardDescription from './CardDescription';

const LoadingData = () => 'Lade Daten ...';

export default p => {
  const { data, match } = p;
  return (
    <>
    {data && (
      <>
      { c.detail.map((block,i) => {
        switch(block.component) {
          case 'title':
            return (
              <CardTitle
                size="responsive"
              >{data.properties[block.id]}</CardTitle>
            )
            break;
          case 'description':
            return (
              <CardDescription
                label={block.label}
                content={data.properties[block.id]}
              />
            )
            break;
          case 'link':
            return (
              <CardLink
                isMail={true}
                label={block.label}
                content={data.properties[block.id]}
                url={data.properties[block.id]}
              />
            )
            break;
          default:
            return null;
            // code block
        }
      }) }
      </>
    )}
    </>
  )
}
