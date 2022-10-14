const state = {
  about: {
    myName: 'Laura Simoni',
    greeting: "Hi. I'm",
    intro:
      "I'm a brasilian web developer, based in Porto (PT), who loves cats, music and mechanical keyboards. I believe that developing software is a great way to help people while keeping an active mind.",
  },
};

const getters = {
  about: (state) => state.about,
};

export default {
  state,
  getters,
};
