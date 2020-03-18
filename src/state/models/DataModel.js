import { action, thunk, computed, actionOn } from "easy-peasy";
import { id } from "utils";
import { schemePaired, scaleOrdinal } from "d3";
import c from "config";

const DataModel = {
  data: null,
  filteredData: null,
  categories: null,
  filter: false,
  isFiltered: {},
  detailData: false,
  highlightData: false,
  selectedData: false,
  filterObj: null,
  isLoading: computed((state) => {
    return !state.data;
  }),
  loadDataSuccess: action((state, payload) => {
    state.data = payload;
    state.filteredData = payload;
  }),
  loadDataFail: action((state) => {
    state.data = null;
  }),
  fetchLegend: actionOn(
    (actions) => actions.loadDataSuccess,
    (state, target) => {
      const { payload } = target;
      const legendType = c.about.legend.id;
      let legendArr = [];
      let legendColorCodes = [];
      const color = scaleOrdinal(schemePaired);

      const categories = payload.features.forEach((feature, i) => {
        const { properties } = feature;

        const val = feature.properties[legendType];
        if (!legendArr.includes(val)) {
          legendArr.push(val);
          legendColorCodes.push({ id: val, color: color(i), count: 1 });
        } else {
          const active = legendColorCodes.find(({ id }) => id == val);
          active.count += 1;
        }
      });

      payload.features.map((feature) => {
        const val = feature.properties[legendType];
        const colorObj = legendColorCodes.find(({ id }) => id == val);
        feature.properties.color = colorObj.color;
        feature.properties.filtered = false;
        return {
          ...feature,
        };
      });

      state.categories = legendColorCodes;
    },
  ),
  fetchTags: actionOn(
    (actions) => actions.loadDataSuccess,
    (state, target) => {
      const features = target.payload.features;
      let isFiltered = {};
      const tagVarsArr = c.filter.filter;
      let filter = {};

      tagVarsArr.forEach(({ id }) => {
        filter[id] = [];
        isFiltered[id] = {};
      });

      features.forEach((feature) => {
        tagVarsArr.forEach(({ id }) => {
          const { properties } = feature;
          properties[id].forEach((property) => {
            if (!filter[id].includes(property)) {
              filter[id].push(property);
              isFiltered[id][property] = false;
            }
          });
        });
      });

      state.filter = filter;
      state.isFiltered = isFiltered;
    },
  ),
  setFilterSuccess: action((state, payload) => {
    state.filteredData = payload;
  }),
  setIsFilteredSuccess: action((state, payload) => {
    state.isFiltered = payload;
  }),
  // update is filtered sections here!
  // https://github.com/ctrlplusb/easy-peasy/issues/101
  setFilter: thunk(async (state, payload, { getState, getStoreState }) => {
    const { id, data } = payload;
    // object with state of filter (true & false)
    let localState = getState().isFiltered;
    let dataState = getState().data;

    // toggle filter of obj
    localState[id][data] = !localState[id][data];

    // update isFiltered prop of filteredData object
    dataState.features.map((feature) => {
      const { properties } = feature;
      c.filter.filter.forEach(({ id }) => {
        properties[id].forEach((prop) => {

          // if prop is set to filtered
          if (prop == data && localState[id][data]) {
            properties.filtered = true;
          }

          // if prop is NOT set to filtered
          if (prop == data && !localState[id][data]) {
            properties.filtered = false;
          }

        });
      });
      return feature;
    });


    state.setFilterSuccess(Object.assign({}, dataState));
    state.setIsFilteredSuccess(Object.assign({}, localState));
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
    state.highlightData = payload;
    state.mapCenter = payload ? payload.geometry.coordinates : c.map.mapCenter;
    state.mapZoom = payload ? [15] : c.map.mapZoom;
  }),
  setSelectedData: action((state, payload) => (state.selectedData = payload)),
};

export default DataModel;
