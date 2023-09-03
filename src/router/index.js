import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("../views/HomePage.vue"),
    meta: {
      title: "Detox Cold Pressed Juice - nakedpress | Jakarta",
    },
  },
  {
    path: "/collections/all",
    name: "ShoppingPage",
    component: () => import("../views/ShoppingPage.vue"),
    meta: {
      title: "all - nakedpress",
    },
  },
  {
    path: "/collections/langganan",
    name: "SubscriptionsPage",
    component: () => import("../views/SubscriptionsPage.vue"),
    meta: {
      title: "Langganan - nakedpress",
    },
  },
  {
    path: "/blogs/homepage",
    name: "BlogsPage",
    component: () => import("../views/BlogsPage.vue"),
    meta: {
      title: "Homepage - nakedpress",
    },
  },
  {
    path: "/pages/bantuan",
    name: "HelpPage",
    component: () => import("../views/HelpPage.vue"),
    meta: {
      title: "Bantuan - nakedpress",
    },
  },
  {
    path: "/account/login",
    name: "LoginPage",
    component: () => import("../views/LoginPage.vue"),
    meta: {
      title: "Akun - nakedpress",
    },
  },
  {
    path: "/account/forgot-password",
    name: "ForgotPasswordPage",
    component: () => import("../views/ForgotPasswordPage.vue"),
    meta: {
      title: "Lupa Password - nakedpress",
    },
  },
  {
    path: "/account/register",
    name: "RegisterPage",
    component: () => import("../views/RegisterPage.vue"),
    meta: {
      title: "Buat Akun - nakedpress",
    },
  },

  // {
  //   path: "/blogs/stories/tagged/:id/:page?",
  //   name: "BlogDetailPage",
  //   component: () => import("../views/BlogsDetailPage.vue"),
  //   meta: {
  //     title:
  //       "Cerita Sukses –Translation missing: id.general.meta.tags – nakedpress",
  //   },
  //   beforeEnter: (to, from, next) => {
  //     if (!to.params.page) {
  //       next({ ...to, params: { ...to.params, page: "1" } });
  //     } else {
  //       next();
  //     }
  //   },
  //   props: true,
  // },

  {
    path: "/blogs/stories/tagged/:id",
    name: "BlogDetailPage",
    component: () => import("../views/BlogsDetailPage.vue"),
    meta: {
      title:
        "Cerita Sukses – Translation missing: id.general.meta.tags – nakedpress",
    },
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes.concat([
    {
      path: "/:pathMatch(.*)*",
      name: "NotFoundPage",
      component: () => import("../views/NotFoundPage.vue"),
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
