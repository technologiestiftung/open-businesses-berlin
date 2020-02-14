import React, { Fragment } from 'react';

import MarkerLayer from '../Layer/MarkerLayer';

const FilterView = p => {
  const { data } = p;
  return (
    <Fragment>
      { data && (
        <MarkerLayer data={data} />
      )}
    </Fragment>
  )
}

export default FilterView;