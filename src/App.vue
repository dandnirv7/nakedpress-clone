<script>
import Blogs from "./views/Blogs.vue";
import Help from "./views/Help.vue";
import Home from "./views/Home.vue";
import Shop from "./views/Shop.vue";
import Subscriptions from "./views/Subscriptions.vue";
import NotFound from "./views/NotFound.vue";
export default {
  components: {
    Blogs,
    Help,
    Home,
    Shop,
    Subscriptions,
    NotFound,
  },
};
</script>

<template>
  <div>
    <router-view />
  </div>
</template>
