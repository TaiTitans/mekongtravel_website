import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import LocationsPage from "../views/LocationsPage.vue";
import FoodsPage from "@/views/FoodsPage.vue";
const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/locations",
    component: LocationsPage,
  },
  {
    path: "/foods",
    component: FoodsPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
