<script>
import Blogs from "./views/Blogs.vue";
import Help from "./views/Help.vue";
import Home from "./views/Home.vue";
import Shop from "./views/Shop.vue";
import Subscriptions from "./views/Subscriptions.vue";
import NotFound from "./views/NotFound.vue";
import MobileNavigation from "./components/MobileNavigation.vue";
export default {
  components: {
    Blogs,
    Help,
    Home,
    Shop,
    Subscriptions,
    NotFound,
    MobileNavigation,
  },
};
</script>

<template>
  <div>
    <router-view />
    <MobileNavigation />
  </div>
</template>
