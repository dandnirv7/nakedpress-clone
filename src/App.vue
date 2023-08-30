<script>
import BlogsPage from "./views/BlogsPage.vue";
import HelpPage from "./views/HelpPage.vue";
import HomePage from "./views/HomePage.vue";
import ShopPage from "./views/ShoppingPage.vue";
import SubscriptionsPage from "./views/SubscriptionsPage.vue";
import NotFoundPage from "./views/NotFoundPage.vue";
import MobileNavigation from "./components/MobileNavigation.vue";
import Announcement from "./components/Announcement.vue";
import Navbar from "./components/Navbar.vue";
import Download from "./components/Download.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    BlogsPage,
    HelpPage,
    HomePage,
    ShopPage,
    SubscriptionsPage,
    NotFoundPage,
    MobileNavigation,
    Announcement,
    Navbar,
    Download,
    Footer,
  },
};
</script>

<template>
  <div>
    <Navbar />
    <!-- <Announcement /> -->
    <router-view />
    <Download />
    <Footer />
    <MobileNavigation />
  </div>
</template>
