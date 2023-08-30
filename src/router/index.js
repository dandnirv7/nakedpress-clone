import { createWebHistory, createRouter } from "vue-router";
import BlogsPage from "../views/BlogsPage.vue";
import HelpPage from "../views/HelpPage.vue";
import HomePage from "../views/HomePage.vue";
import ShoppingPage from "../views/ShoppingPage.vue";
import SubscriptionsPage from "../views/SubscriptionsPage.vue";
import NotFoundPage from "../views/NotFoundPage.vue";
import LoginPage from "../views/LoginPage.vue";
import ForgotPasswordPage from "../views/ForgotPasswordPage.vue";
import RegisterPage from "../views/RegisterPage.vue";

const routes = [
  {
    path: "/",
    name: HomePage,
    component: () => import("../views/HomePage.vue"),
    meta: {
      title: "Detox Cold Pressed Juice - nakedpress | Jakarta",
    },
  },
  {
    path: "/collections/all",
    name: ShoppingPage,
    component: () => import("../views/ShoppingPage.vue"),
    meta: {
      title: "all - nakedpress",
    },
  },
  {
    path: "/collections/langganan",
    name: SubscriptionsPage,
    component: () => import("../views/SubscriptionsPage.vue"),
    meta: {
      title: "Langganan - nakedpress",
    },
  },
  {
    path: "/blogs/homepage",
    name: BlogsPage,
    component: () => import("../views/BlogsPage.vue"),
    meta: {
      title: "Homepage - nakedpress",
    },
  },
  {
    path: "/pages/bantuan",
    name: HelpPage,
    component: () => import("../views/HelpPage.vue"),
    meta: {
      title: "Bantuan - nakedpress",
    },
  },
  {
    path: "/account/login",
    name: LoginPage,
    component: () => import("../views/LoginPage.vue"),
    meta: {
      title: "Akun - nakedpress",
    },
  },
  {
    path: "/account/forgot-password",
    name: ForgotPasswordPage,
    component: () => import("../views/ForgotPasswordPage.vue"),
    meta: {
      title: "Lupa Password - nakedpress",
    },
  },
  {
    path: "/account/register",
    name: RegisterPage,
    component: () => import("../views/RegisterPage.vue"),
    meta: {
      title: "Buat Akun - nakedpress",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes.concat([
    {
      path: "/:pathMatch(.*)*",
      name: "NotFoundPage",
      component: NotFoundPage,
      meta: {
        title: "404 Tidak Ditemukan - nakedpress",
      },
    },
  ]),
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
