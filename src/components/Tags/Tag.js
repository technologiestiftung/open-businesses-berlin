/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from "react";
import {useStoreActions} from 'easy-peasy';

export default p => {
  const {data,id} = p;
  const setFilter = useStoreActions(actions => actions.setFilter);

  const handleClick = (obj) => {
    setFilter(obj)
  }

  return (
    <span
      sx={{
        backgroundColor: 'text',
        color: 'background',
        py: '1',
        px: '3',
        mr: '2',
        mb: '2',
        borderRadius: '12px',
      }}
      onClick={() => handleClick({data, id})}
    >{data}</span>
  )
}