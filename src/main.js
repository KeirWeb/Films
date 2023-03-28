import Vue from "vue";
import App from "./App.vue";

import axios from "axios";
import VueAxios from "vue-axios";

import VueRouter from "vue-router";
import router from "./router/index";

Vue.use(VueAxios, axios).use(VueRouter).mount("#app");

new Vue({
  render: (h) => h(App),
  el: "#app",
  router,
});
