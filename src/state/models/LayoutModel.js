import { action } from 'easy-peasy';

const LayoutModel = {
  layout: 'Grid',
  setLayout: action((state, payload) => {
    state.layout = payload;
  }),
};

export default LayoutModel;
