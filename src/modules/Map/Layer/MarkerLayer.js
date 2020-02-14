import React, { Fragment } from 'react';
import { Layer, Feature } from 'react-mapbox-gl';

const paintProps = {
  'circle-radius': 10,
  'circle-color': '#223b53',
  'circle-stroke-color': 'white',
  'circle-stroke-width': 1,
  'circle-opacity': 1
}

const MarkerLayer = p => {
  const { data } = p;

  const renderFeat = (feat,i) => {
    const feature = (
      <Feature
        coordinates={feat.geometry.coordinates}
        key={`feat-${i}`}
        // onClick={evt => (this.timeoutClick(evt, feat))} // isMobile ? noop() : 
        // onMouseEnter={evt => this.handleMouseEnter(evt, feat)}
        // onMouseLeave={evt => this.handleMouseLeave(evt)}
        // onTouchStart={evt => this.handleClick(evt)}
        properties={feat.properties}
      />
    );
    return feature;
  }

  return (
    <Fragment>
      { data && (
        <Layer
          id="MarkerLayer"
          type="circle"
          paint={paintProps}
        >
          {data.features.map((feat,i) => renderFeat(feat,i))}
        </Layer>
      )}
    </Fragment>
  )
}

export default MarkerLayer;