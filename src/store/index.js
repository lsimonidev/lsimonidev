import Vuex from 'vuex';
import about from './modules/about';
import education from './modules/education';
import projects from './modules/projects';

//Create store
export default new Vuex.Store({
  modules: {
    about,
    education,
    projects,
  },
});
