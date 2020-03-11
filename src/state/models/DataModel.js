import { action, thunk, computed } from "easy-peasy";
import { id } from "utils";

const DataModel = {
  data: null,
  detailData: false,
  highlightData: false,
  selectedData: false,
  isLoading: computed((state) => {
    return !state.data;
  }),
  loadDataSuccess: action((state, payload) => {
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
  filteredData: computed((state) => state.data),
  setHighlightData: action((state, payload) => {state.highlightData = payload}),
  setSelectedData: action((state, payload) => (state.selectedData = payload)),
};

export default DataModel;
