import Vuex from 'vuex';
import intro from './modules/intro';

//Create store
export default new Vuex.Store({
  modules: {
    intro,
  },
});
