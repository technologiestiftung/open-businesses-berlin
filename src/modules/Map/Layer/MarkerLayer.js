import React, { Fragment } from "react";
import { Layer, Feature } from "react-mapbox-gl";
import { useStoreActions, useStoreState } from "easy-peasy";

import history from '../../../history';

const paintProps = {
  "circle-radius": 10,
  "circle-color": "#223b53",
  "circle-stroke-color": "white",
  "circle-stroke-width": 1,
  "circle-opacity": 1,
};

const MarkerLayer = (p) => {
  const { data } = p;
// const data = useStoreState(state => state.data);

  let clickTimeout = null;
  const setTooltipPos = useStoreActions((actions) => actions.setTooltipPos);
  const setTooltipData = useStoreActions((actions) => actions.setTooltipData);
  const setSelectedData = useStoreActions((actions) => actions.setSelectedData);

  const handleMouseEnter = (evt, { properties = {} }) => {
    evt.map.getCanvas().style.cursor = "pointer";
    setTooltipData(properties);
  };

  const handleMouseLeave = (evt) => {
    evt.map.getCanvas().style.cursor = "";
    setTooltipData(null);
  };

  const handleClick = (evt, { properties }) => {
    evt.originalEvent.preventDefault();
    evt.originalEvent.stopPropagation();

    const nextLocation = `/liste/${properties.autoid}`;
    history.push(nextLocation);
  };

  const renderFeat = (feat, i) => {
    const feature = (
      <Feature
        coordinates={feat.geometry.coordinates}
        key={`feat-${i}`}
        onMouseEnter={(evt) => handleMouseEnter(evt, feat)}
        onMouseLeave={(evt) => handleMouseLeave(evt)}
        onClick={(evt) => handleClick(evt, feat)}
        properties={feat.properties}
      />
    );
    return feature;
  };

  const handleMouseMove = (evt) => {
    setTooltipPos([evt.lngLat.lng, evt.lngLat.lat]);
  };

  return (
    <Fragment>
      <Layer
        id="MarkerLayer"
        type="circle"
        paint={paintProps}
        onMouseMove={(evt) => handleMouseMove(evt)}
      >
        { data.features.map((feat, i) => renderFeat(feat, i)) }
      </Layer>
    </Fragment>
  );
};

export default MarkerLayer;
