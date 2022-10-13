//import axios from 'axios';
const state = {
  greeting: "Hi. I'm Laura Simoni",
  intro:
    "I'm a brasilian web developer, based in Porto (PT), who loves cats, music and mechanical keyboards. I believe that developing software is a great way to help people while keeping an active mind. I think turning code into valuable solutions could be called magic.",
};

const getters = {
  greeting: (state) => state.greeting,
  intro: (state) => state.intro,
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
