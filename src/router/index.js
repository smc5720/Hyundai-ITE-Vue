import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import menu01 from "./menu01";
import menu02 from "./menu02";
import menu03 from "./menu03";
import menu04 from "./menu04";
import menu05 from "./menu05";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  ...menu01,
  ...menu02,
  ...menu03,
  ...menu04,
  ...menu05,
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
