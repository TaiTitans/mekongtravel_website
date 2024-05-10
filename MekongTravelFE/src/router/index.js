import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import LocationsPage from "../views/LocationsPage.vue";
import FoodsPage from "@/views/FoodsPage.vue";
import HistoryPage from "@/views/HistoryPage.vue";
import ContactPage from "@/views/ContactPage.vue";
import LocationsProduct from "@/views/LocationsProduct.vue";
const routes = [

  {
    path: "/login",
    name: 'Login',
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path:'/',
    name: 'Home',
    children:[
      {
        path:"/home",
        component: HomePage,
      },
      {
        path: "/locations",
        component: LocationsPage,
      },
      {
        path: "/foods",
        component: FoodsPage,
      },
      {
        path: "/history",
        component: HistoryPage,
      },
      {
        path: "/contact",
        component: ContactPage,
      },
      {
        path: "/location-product",
        component: LocationsProduct,
      },
    ]
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  const isLoginPage = to.path === "/login";
  const isRegisterPage = to.path === "/register";

  if (to.path === '/') {
    next('/home');
  } else if (!isAuthenticated && !isLoginPage && !isRegisterPage) {
    localStorage.setItem('redirectPath', to.path);
    next('/login');
  } else {
    next();
  }
});


export default router;
