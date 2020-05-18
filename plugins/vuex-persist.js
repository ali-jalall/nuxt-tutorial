import VuexPersist from "vuex-persist";

export default ({ store }) => {
  window.onNuxtReady(() => {
    new VuexPersist({
      storage: window.localStorage
    }).plugin(store);
  });
};
