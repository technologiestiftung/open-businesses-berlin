import React, { Fragment } from "react";
import { Layer, Feature } from "react-mapbox-gl";
import { useStoreActions, useStoreState } from "easy-peasy";
import idx from 'idx';
import c from 'config';

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
  const setTooltipPos = useStoreActions((actions) => actions.setTooltipPos);
  const setTooltipData = useStoreActions((actions) => actions.setTooltipData);
  const setHighlightData = useStoreActions(a => a.setHighlightData);
  const highlightData = useStoreState(a => a.highlightData);
  const paintProps = getPaintProps(highlightData);

  const handleMouseEnter = (evt, { properties = {} }) => {
    evt.map.getCanvas().style.cursor = "pointer";
    setTooltipData(properties);
  };

  function getPaintProps(highlightData) {
    const itemId = idx(highlightData, _ => _.properties.autoid) || '';
    const activeExpr = ['case', ['==', ['string', ['get', 'autoid']], itemId], 12, 6] || '';
    return {
      'circle-radius': [
        'interpolate', ['linear'], ['zoom'],
        8, activeExpr,
      ],
      'circle-color': [
        'case',
        ['==', ['string', ['get', 'autoid']], itemId], 'red',
        'black'
      ],
      'circle-stroke-width': [
        'case',
        ['==', ['string', ['get', 'autoid']], itemId], 12,
        4
      ],
      'circle-stroke-color': 'white'
      //   'case',
      //   ['==', ['string', ['get', 'name']], detailId], 
      //   ['get', 'color'],
      //   ['get', 'isFiltered'], '#E8E8E8',
      //   ['get', 'colorLight']
      // ],
    };
  };

  const handleMouseLeave = (evt) => {
    evt.map.getCanvas().style.cursor = "";
    setTooltipData(null);
  };

  const handleClick = (evt, data) => {
    evt.originalEvent.preventDefault();
    evt.originalEvent.stopPropagation();

    setHighlightData(data);

    const nextLocation = `/liste/${data.properties.autoid}`;
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
