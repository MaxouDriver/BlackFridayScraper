import { createRouter, createWebHashHistory } from "vue-router";

import Wish from "./views/Wish";
import Home from "./views/Home";

const routes = [
  { path: "/wish", component: Wish },
  { path: "/", component: Home }
];

const router = new createRouter({
  history: createWebHashHistory(),
  routes // short for `routes: routes`
});

export default router;
