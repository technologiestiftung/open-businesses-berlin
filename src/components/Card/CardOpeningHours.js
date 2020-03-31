/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import React, {useEffect} from 'react';
import { useStoreState } from 'easy-peasy';

import CardLabel from './CardLabel';

export default p => {
  const { label, content } = p;

  const hours = [
    {
      "day": "Montag",
      "hours": "08:00-20:00"
    },
    {
      "day": "Dienstag",
      "hours": "08:00-20:00"
    },
    {
      "day": "Mittwoch",
      "hours": "08:00-20:00"
    },
    {
      "day": "Donnerstag",
      "hours": "08:00-20:00"
    },
    {
      "day": "Freitag",
      "hours": "08:00-20:00"
    },
    {
      "day": "Samstag",
      "hours": "08:00-20:00"
    },
    {
      "day": "Sonntag",
      "hours": "08:00-20:00"
    }
  ]

  const categories = useStoreState(state => state.categories);
  return (
    <>
      {content && (
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            paddingBottom: [3,4],
          }}
        > 
          <CardLabel>{label}</CardLabel>
          {hours.map(({day, hours}) => (
            <Flex>
            <span sx={{ fontFamily: ['heading'], minWidth: '110px'}}>{day}</span>
            <span>{hours}</span>
            </Flex>
          ))}
        </div>
      )}
    </>
  )
}