import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

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
  {
    path: "/menu01/exam01view",
    name: "menu01_exam01view",
    component: () => import(/* webpackChunkName: "menu01" */ "../views/menu01/Exam01View"),
  },
  {
    path: "/menu01/exam02view",
    name: "menu01_exam02view",
    component: () => import(/* webpackChunkName: "menu01" */ "../views/menu01/Exam02View"),
  },
  {
    path: "/menu01/exam03view",
    component: () => import(/* webpackChunkName: "menu01" */ "../views/menu01/Exam03View"),
    children: [
      {
        path: "subacomponent",
        component: () =>
          import(/* webpackChunkName: "menu01" */ "../components/menu01/SubAComponent"),
      },
      {
        path: "subbcomponent",
        component: () =>
          import(/* webpackChunkName: "menu01" */ "../components/menu01/SubBComponent"),
      },
    ],
  },
  {
    path: "/menu01/exam04view",
    component: () => import(/* webpackChunkName: "menu01" */ "../views/menu01/Exam04View"),
    children: [
      {
        path: "",
        components: {
          default: () =>
            import(/* webpackChunkName: "menu01" */ "../components/menu01/SubAComponent"),
          rv1: () => import(/* webpackChunkName: "menu01" */ "../components/menu01/SubBComponent"),
          rv2: () => import(/* webpackChunkName: "menu01" */ "../components/menu01/SubCComponent"),
        },
      },
    ],
  },
  {
    path: "/menu01/exam05view",
    component: () => import(/* webpackChunkName: "menu01" */ "../views/menu01/Exam05View"),
  },
  {
    path: "/menu01/exam06view/:bno",
    name: "menu01_exam06view",
    component: () => import(/* webpackChunkName: "menu01" */ "../views/menu01/Exam06View"),
    props: true,
  },
  {
    path: "/menu01/exam07view",
    name: "menu01_exam07view",
    component: () => import(/* webpackChunkName: "menu01" */ "../views/menu01/Exam07View"),
    props: { kind: "freeboard", color: "blue" },
  },
  {
    path: "/menu01/exam08view",
    name: "menu01_exam08view",
    component: () => import(/* webpackChunkName: "menu01" */ "../views/menu01/Exam08View"),
    props: route => ({
      kind: route.query.kind,
      color: route.query.color,
    }),
  },
  {
    path: "/menu02/exam01expressions",
    component: () => import(/* webpackChunkName: "menu02" */ "../views/menu02/Exam01Expressions"),
  },
  {
    path: "/menu02/exam02directives",
    component: () => import(/* webpackChunkName: "menu02" */ "../views/menu02/Exam02Directives"),
  },
  {
    path: "/menu02/exam03attrbinding",
    component: () => import(/* webpackChunkName: "menu02" */ "../views/menu02/Exam03AttrBinding"),
  },
  {
    path: "/menu02/exam04formbinding",
    component: () => import(/* webpackChunkName: "menu02" */ "../views/menu02/Exam04FormBinding"),
  },
  {
    path: "/menu02/exam05forrepeatbinding",
    component: () => import(/* webpackChunkName: "menu02" */ "../views/menu02/Exam05ForRepeatBinding"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
