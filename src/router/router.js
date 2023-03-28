import HomeView from "@/views/HomeView";
import { createRouter, createWebHistory } from "vue-router";
import FilmPage from "@/views/FilmPage";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/film/:id",
    name: "filmPage",
    component: FilmPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
