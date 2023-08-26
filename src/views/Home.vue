<script>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import Announcement from "../components/Announcement.vue";
import Navbar from "../components/Navbar.vue";
import ShowcaseProduct from "../components/ShowcaseProduct.vue";
import CardItems from "../components/CardItems.vue";
import ShopNeed from "../components/ShopNeed.vue";
import ShopCategory from "../components/ShopCategory.vue";
import HealthInspiration from "../components/HealthInspiration.vue";
import MessageProcedure from "../components/MessageProcedure.vue";
import Accordion from "../components/Accordion.vue";
import StoreLocation from "../components/StoreLocation.vue";
import Download from "../components/Download.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Announcement,
    Navbar,
    ShowcaseProduct,
    CardItems,
    ShopNeed,
    ShopCategory,
    HealthInspiration,
    MessageProcedure,
    Accordion,
    StoreLocation,
    Download,
    Footer,
  },
  setup() {
    onMounted(() => {
      initFlowbite();
    });
  },
};
</script>

<template>
  <div>
    <div class="relative block w-full h-full">
      <img
        src="../assets/homepage_daily_kids_-_mobile-03.jpg"
        alt="homepage-hero"
        class="-z-10"
        id="hero-image"
      />
      <div
        class="absolute top-0 flex flex-col items-start justify-center px-6 py-8"
      >
        <h1 class="text-[1.75rem] leading-9 font-bold font-sans">
          Minum sayuran tiap hari, rasakan manfaatnya.
        </h1>
        <p class="mt-2 text-base font-light">
          Rasakan sendiri manfaat jus sayuran segar yang kaya vitamin mineral
          alami dari nakedpress.
        </p>
        <button class="px-5 py-1 bg-[#2f8d03] text-white rounded-2xl mt-5">
          <router-link to="/collections/daily"> Belanja </router-link>
        </button>
      </div>
    </div>
    <ShowcaseProduct />
    <ShopNeed />
    <ShopCategory />
    <HealthInspiration />
    <MessageProcedure />
    <Accordion :storeType="'delivery'" title="Area Pengantaran" />
    <StoreLocation />
    <Accordion :storeType="'faq'" title="FAQ" />
    <Download />
    <Footer />
  </div>
</template>
