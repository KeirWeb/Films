import { createApp } from "vue";
import App from "./App.vue";

import VueRouter from "vue-router";
import router from "./router/router";

import store from "./store";

import axios from "axios";
import VueAxios from "vue-axios";

const app = createApp(App);

app.use(VueRouter).use(VueAxios, axios).use(store).use(router).mount("#app");
