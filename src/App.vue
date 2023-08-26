<script>
import Blogs from "./views/Blogs.vue";
import Help from "./views/Help.vue";
import Home from "./views/Home.vue";
import Shop from "./views/Shop.vue";
import Subscriptions from "./views/Subscriptions.vue";
import NotFound from "./views/NotFound.vue";
import MobileNavigation from "./components/MobileNavigation.vue";
import Announcement from "./components/Announcement.vue";
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Blogs,
    Help,
    Home,
    Shop,
    Subscriptions,
    NotFound,
    MobileNavigation,
    Announcement,
    Navbar,
  },
};
</script>

<template>
  <div>
    <Navbar />
    <!-- <Announcement /> -->
    <router-view />
    <MobileNavigation />
  </div>
</template>
