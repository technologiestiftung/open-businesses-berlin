import { action, thunk, computed } from "easy-peasy";
import { id } from "utils";
import { schemePaired, scaleOrdinal } from 'd3';
import c from 'config';

const DataModel = {
  data: null,
  categories: null,
  detailData: false,
  highlightData: false,
  selectedData: false,
  isLoading: computed((state) => {
    return !state.data;
  }),
  loadDataSuccess: action((state, payload) => {
    const legendType = c.about.legend.id;
    let legendArr = [];
    let legendColorCodes = [];
    const color = scaleOrdinal(schemePaired);

    const categories = payload.features.forEach((feature, i) => {
      const val = feature.properties[legendType];
      if (!legendArr.includes(val)) {
        legendArr.push(val);
        legendColorCodes.push({ id: val, color: color(i), count: 1 })
      } else {
        const active = legendColorCodes.find(({id}) => (id == val));
        active.count += 1;
      }
    })

    payload.features.map(feature => {
      const val = feature.properties[legendType];
      const colorObj = legendColorCodes.find(({id}) => id == val);
      feature.properties.color = colorObj.color;
      return {
        ...feature
      }
    })

    state.categories = legendColorCodes;
    state.data = payload;
  }),
  loadDataFail: action((state) => {
    state.data = null;
  }),
  loadData: thunk(async (actions) => {
    try {
      const response = await fetch("/data/data.geojson");
      const data = await response.json();
      data.features.map((feat) => {
        feat.properties.autoid = id();
      });
      actions.loadDataSuccess(data);
    } catch (_) {
      actions.loadDataFail();
    }
  }),
  setHighlightData: action((state, payload) => {
    state.highlightData = payload
    state.mapCenter = payload ? payload.geometry.coordinates : c.map.mapCenter;
    state.mapZoom = payload ? [15] : c.map.mapZoom;
  }),
  setSelectedData: action((state, payload) => (state.selectedData = payload)),
};

export default DataModel;
