const state = {
  about: {
    picture:
      'https://media-exp1.licdn.com/dms/image/C4D03AQGlMvdvXvWpOg/profile-displayphoto-shrink_800_800/0/1641889264555?e=1671667200&v=beta&t=La8KnpN3-oL1mxgXvbP7ETgsIbad6VaIfdvu3LJXTYw',
    myName: 'Laura Simoni',
    greeting: "Hi. I'm",
    intro:
      "I'm a brazilian web developer, based in Porto (PT), who loves cats, music and mechanical keyboards. I believe that developing software is a great way to help people while keeping an active mind.",
  },
};

const getters = {
  about: (state) => state.about,
};

export default {
  state,
  getters,
};
