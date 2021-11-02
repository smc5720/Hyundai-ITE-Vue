export default [
  {
    path: "/menu07/exam01asynccontrol",
    component: () => import(/* webpackChunkName: "menu07" */ "../views/menu07/Exam01AsyncControl"),
  },
  {
    path: "/menu07/auth/jwtauth",
    component: () => import(/* webpackChunkName: "menu07" */ "../views/menu07/auth/JwtAuth"),
  },
];
