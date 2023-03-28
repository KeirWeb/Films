import { createStore } from "vuex";

export default createStore({
  state: {
    listFilms: [],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});

new Vue({
  el: "#app",
  store: store,
});
