/** @jsx jsx */
import { jsx } from 'theme-ui';
import CardLabel from './CardLabel';
import React, { Fragment } from 'react';

export default p => {
  const { url, content, label, isMail } = p;
  const directTo = isMail ? `mailto:${url}` : url;
  return (
    <div
        {...p}
        sx={{
          fontSize: [1,2],
          color: ['black'],
          fontFamily: ['heading'],
          lineHeight: ['heading'],
          fontFamily: 'body',
          paddingBottom: [2,3,4]
        }}
    >
      <CardLabel>{label}</CardLabel>
      <a
        href={directTo}
        target="_blank"
        sx={{
          fontFamily: 'heading',
          pb: 0,
          borderBottom: '1px solid black',
          textDecoration: 'none',
          transition: theme => theme.transitions[0],
          color: 'text',
          '&:hover': {
            opacity: .5
          }
        }}
      >
        {content}
      </a>
    </div>
  )
}