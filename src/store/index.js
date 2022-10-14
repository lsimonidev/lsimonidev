import Vuex from 'vuex';
import about from './modules/about';

//Create store
export default new Vuex.Store({
  modules: {
    about,
  },
});
