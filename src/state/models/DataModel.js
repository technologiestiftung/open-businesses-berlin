import { action, thunk, computed } from 'easy-peasy';
import history from '../../history';
import { id } from 'utils';

const DataModel = {
  data: null,
  detailData: false,
  highlightData: false,
  selectedData: false,
  isLoading: computed(state => !state.data),
  loadDataSuccess: action((state, payload) => {
    state.data = payload;
  }),
  loadDataFail: action(state => {
    state.data = null;
  }),
  loadData: thunk(async actions => {
    try {
      const response = await fetch('/data/data.geojson');
      const data = await response.json();
      data.features.map(feat => {
        feat.properties.autoid = id();
      });
      actions.loadDataSuccess(data);
    } catch (_) {
      actions.loadDataFail();
    }
  }),
  enrichedData: computed(state => {
    // do data transformation here!
    if (state.data) {
      return state.data;
    } else {
      return null;
    }
  }),
  filteredData: computed(state => state.data),
  setHighlightData: action((state, payload) => (state.highlightData = payload)),
  setSelectedData: action((state, payload) => (state.selectedData = payload)),
  setDetailRoute: action((state, payload) => {
    if (payload) {
      const nextLocation = `?location=${payload}`;
      return history.push(nextLocation);
    }
    history.push(history.location.pathname.replace(/\?location=.+/, ''));
    state.detailData = false;
  }),
  setDetailRouteWithListPath: action((state, payload) => {
    if (payload) {
      const nextLocation = `/liste?location=${payload}`;
      return history.push(nextLocation);
    }
    history.push(history.location.pathname.replace(/\?location=.+/, ''));
    state.detailData = false;
  })
};

export default DataModel;