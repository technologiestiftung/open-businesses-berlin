import React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import styled from 'styled-components';
import { useStoreState } from 'easy-peasy';

import c from 'config';

const mapConfig = c.map.config;

const MapGL = ReactMapboxGl({ ...mapConfig });

const MapWrapper = styled.div`
  height: 100vh;
  width: 100%;
  flex: 1;
  flex-shrink: 1;
  flex-grow: 1;
  position: relative;
  opacity: 1;
`;

const Map = p => {
  const mapCenter = useStoreState(state => state.mapCenter);
  const mapZoom = useStoreState(state => state.mapZoom);
  return (
    <MapWrapper>
      <MapGL
        zoom={mapZoom}
        center={mapCenter}
        style={ process.env.REACT_APP_MAP_STYLE }
        containerStyle={{ height: '100%', width: '100%' }}
        // onStyleLoad={map => this.onStyleLoad(map)}
        // onData={map => this.onData(map)}
        // onClick={(map, e) => {this.posArray(e)}}
        // flyToOptions={config.map.flyToOptions}
      >
        {/* <Route exact path={['/', '/suche', '/liste', '/favoriten', '/info']} component={FilterView} />
        <Tooltip />
        <UIMap map={this.state.map}/> */}
      </MapGL>
    </MapWrapper>
  )
}

export default Map;