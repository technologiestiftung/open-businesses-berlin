import React, { Fragment } from 'react';
import styled from 'styled-components';
import { useStoreActions, useStoreState } from 'easy-peasy';

import SidebarTitle from '../SidebarTitle';
import CardCompact from 'components/Card/CardCompact';

const SidebarList = p => {
  const { data } = p;
  const setHighlightData = useStoreActions(actions => actions.setHighlightData);
  const highlightData = useStoreState(state => state.highlightData);
  const selectedData = useStoreState(state => state.selectedData);

  console.log(selectedData, 'selectedData');

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
              onMouseEnter={() => setHighlightData(d.properties)}
              onMouseLeave={() => setHighlightData(false)}
            />
          )
        }) }
        </>
      )}
    </>
  )
}

export default SidebarList;