import React, { Fragment } from 'react';
import { Layer, Feature } from 'react-mapbox-gl';
import { useStoreActions } from 'easy-peasy';

const paintProps = {
  'circle-radius': 10,
  'circle-color': '#223b53',
  'circle-stroke-color': 'white',
  'circle-stroke-width': 1,
  'circle-opacity': 1
}

const MarkerLayer = p => {
  const { data } = p;
  const setTooltipPos = useStoreActions(action => action.setTooltipPos);
  const setTooltipData = useStoreActions(action => action.setTooltipData);

  const handleMouseEnter = (evt, { properties = {} }) => {
    evt.map.getCanvas().style.cursor = 'pointer';
    setTooltipData(properties);
  }

  const handleMouseLeave = (evt) => {
    evt.map.getCanvas().style.cursor = '';
    setTooltipData(null);
  }

  const renderFeat = (feat,i) => {
    const feature = (
      <Feature
        coordinates={feat.geometry.coordinates}
        key={`feat-${i}`}
        onMouseEnter={evt => handleMouseEnter(evt, feat)}
        onMouseLeave={evt => handleMouseLeave(evt)}
        // onClick={evt => (this.timeoutClick(evt, feat))} // isMobile ? noop() : 
        // onTouchStart={evt => this.handleClick(evt)}
        properties={feat.properties}
      />
    );
    return feature;
  }

  const handleMouseMove = evt => {
    console.log(evt)
    setTooltipPos([evt.lngLat.lng, evt.lngLat.lat]);
  }

  return (
    <Fragment>
      { data && (
        <Layer
          id="MarkerLayer"
          type="circle"
          paint={paintProps}
          onMouseMove={evt => handleMouseMove(evt)}
        >
          {data.features.map((feat,i) => renderFeat(feat,i))}
        </Layer>
      )}
    </Fragment>
  )
}

export default MarkerLayer;