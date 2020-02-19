import React, { Fragment } from 'react';
import styled from 'styled-components';

import SidebarTitle from '../SidebarTitle';
import CardCompact from 'components/Card/CardCompact';

const SidebarList = p => {
  const { data } = p;
  console.log(data);
  return (
    <>
      { data && (
        <>
        <SidebarTitle>{data.features.length} Ergebnisse gefunden.</SidebarTitle>
        { data.features.map((d,i) => {
          return (
            <CardCompact
              key={`item-${i}`}
              data={d.properties}
              // onMouseEnter={() => setHighlightData(d)}
              // onMouseLeave={() => setHighlightData(false)}
            />
          )
        }) }
        </>
      )}
    </>
  )
}

export default SidebarList;