import VueRouter from "vue-router";

import HomeView from "@/views/HomeView.vue";
// import FilmPage from "@/views/FilmPage.vue";

export default new VueRouter({
  routes: [
    { path: "/", name: "home", component: HomeView },
    // { path: "/film", name: "home", component: FilmPage },
  ],
});
