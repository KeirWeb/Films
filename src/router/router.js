import HomeView from "@/views/HomeView";
import { createRouter, createWebHistory } from "vue-router";
import FilmPage from "@/views/FilmPage";
import LoginPage from "@/views/LoginPage";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/:id",
    name: "filmPage",
    component: FilmPage,
  },
  {
    path: "/login",
    name: "loginPage",
    component: LoginPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
