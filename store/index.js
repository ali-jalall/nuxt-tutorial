export const state = () => ({
  directory: ""
});

export const getters = {};

export const mutations = {
  setDirectory(state, payload) {
    state.directory = payload.directory;
  }
};

export const actions = {};
