import { createWebHistory, createRouter } from "vue-router";
import Blogs from "../views/Blogs.vue";
import Help from "../views/Help.vue";
import Home from "../views/Home.vue";
import Shop from "../views/Shop.vue";
import Subscriptions from "../views/Subscriptions.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: Home,
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/collections/all",
    name: Shop,
    component: () => import("../views/Shop.vue"),
  },
  {
    path: "/collections/Subscriptions",
    name: Subscriptions,
    component: () => import("../views/Subscriptions.vue"),
  },
  {
    path: "/blogs/homepage",
    name: Blogs,
    component: () => import("../views/Blogs.vue"),
  },
  {
    path: "/pages/help",
    name: Help,
    component: () => import("../views/Help.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes.concat([
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ]),
});

export default router;
