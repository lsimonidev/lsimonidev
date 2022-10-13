import Vuex from 'vuex';
import Vue from 'vue';
import intro from './modules/intro';

//Load Vuex
Vue.use(Vuex);

//Create store
export default new Vuex.Store({
  modules: {
    intro,
  },
});
