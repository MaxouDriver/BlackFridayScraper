import { createRouter, createWebHashHistory } from "vue-router";

import Wish from "./views/Wish";
import Deal from "./views/Deal";
import Landing from "./views/Landing";

const routes = [
  { path: "/wishs", component: Wish },
  { path: "/deals", component: Deal },
  { path: "/", component: Landing }
];

const router = new createRouter({
  history: createWebHashHistory(),
  routes // short for `routes: routes`
});

export default router;
