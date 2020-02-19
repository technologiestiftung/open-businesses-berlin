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
  let clickTimeout = null;
  const setTooltipPos = useStoreActions(actions => actions.setTooltipPos);
  const setTooltipData = useStoreActions(actions => actions.setTooltipData);
  const setSelectedData = useStoreActions(actions => actions.setSelectedData);
  const setDetailRouteWithListPath = useStoreActions(actions => actions.setDetailRouteWithListPath);

  const handleMouseEnter = (evt, { properties = {} }) => {
    evt.map.getCanvas().style.cursor = 'pointer';
    setTooltipData(properties);
  }

  const handleMouseLeave = (evt) => {
    evt.map.getCanvas().style.cursor = '';
    setTooltipData(null);
  }

  const handleClick = (evt, { properties = {} }) => {
    evt.originalEvent.preventDefault();
    evt.originalEvent.stopPropagation();

    setDetailRouteWithListPath(properties.autoid);
    // setSelectedData(properties);
  }

  const timeoutClick = (evt, feat) => {
    if (feat.properties && feat.properties.isFiltered) {
      return false;
    }

    clearTimeout(clickTimeout);

    clickTimeout = setTimeout(() => {
      handleClick(evt, feat);
    }, 50);
  }

  const renderFeat = (feat,i) => {
    const feature = (
      <Feature
        coordinates={feat.geometry.coordinates}
        key={`feat-${i}`}
        onMouseEnter={evt => handleMouseEnter(evt, feat)}
        onMouseLeave={evt => handleMouseLeave(evt)}
        onClick={evt => (timeoutClick(evt, feat))}
        // onTouchStart={evt => this.handleClick(evt)}
        properties={feat.properties}
      />
    );
    return feature;
  }

  const handleMouseMove = evt => {
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