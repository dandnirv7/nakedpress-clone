<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import ProductItems from "../components/ProductItems.vue";
import ShopNeed from "../components/ShopNeed.vue";
import MessageProcedure from "../components/MessageProcedure.vue";
import Accordion from "../components/Accordion.vue";
import { useAllShowProductsStore } from "../store";

const allShowProductsStore = useAllShowProductsStore();

const route = useRoute();

const isActiveSection = (sectionId) => {
  return route.hash === `#${sectionId}`;
};

onMounted(() => {
  initFlowbite();
});

const dailyKidsCategory = allShowProductsStore.dailyKidsProduct;
const detoxProductCategory = allShowProductsStore.detoxProduct;
const oneLiterProductCategory = allShowProductsStore.oneLiterProduct;
const dailyProduct330Category = allShowProductsStore.dailyProduct330;
const merchandisesStoreCategory = allShowProductsStore.merchandise;

const detoxSubject = "Detox 1 Day";
const detoxDescription =
  "Bangun kebiasaan puasa dengan jus sayuran 1x seminggu untuk meningkatkan self healing.";
const oneLiterSubject = "Daily 1 Liter";
const oneLiterDescription =
  "Bangun kebiasaan sehat dengan minum 400 gram sayuran setiap hari.";
const dailyKidsSubject = "Mini 200ml";
const dailyKidsDescription =
  "Kemasan mini 200ml untuk teman dan keluarga kesayangan kamu.";
const dailyProduct330Subject = "Daily 330ml";
const dailyProduct330Description =
  "Minum 1-2 botol setiap hari untuk menjaga kesehatan usus.";

const merchandisesSubject = "Merchandises";
const merchandisesDescription = "Pengingat supaya kangen nakedpress";

const isActiveDropdown = ref(false);
const toggleDropdown = () => {
  return (isActiveDropdown = !isActiveDropdown);
};
</script>

<template>
  <div>
    <div id="sticky-header">
      <nav
        class="flex flex-row items-center py-5 bg-white justify-evenly z-99 sticky top-0"
      >
        <li
          class="list-none"
          :class="{ 'text-[#2f8d03]': isActiveSection('detox-1-day') }"
        >
          <a href="#detox-1-day">Detox 1 Day</a>
        </li>
        <li
          class="list-none"
          :class="{ 'text-[#2f8d03]': isActiveSection('daily-1-liter') }"
        >
          <a href="#daily-1-liter">Daily 1 Liter</a>
        </li>
        <li class="list-none">
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            class="flex flex-row items-center gap-x-1"
            :class="{ 'text-[#2f8d03]': isActiveDropdown }"
            type="button"
            @click="toggleDropdown"
            triggerType="hover"
          >
            Lainnya
            <vue-feather
              type="chevron-down"
              stroke="black"
              v-if="!isActiveDropdown"
            ></vue-feather>
            <vue-feather
              type="chevron-up"
              stroke="#2f8d03"
              v-if="isActiveDropdown"
            ></vue-feather>
          </button>
          <div
            id="dropdown"
            class="z-10 hidden w-full bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
          >
            <ul
              class="py-2 text-black dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  href="#mini-200ml"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  :class="{ 'text-[#2f8d03]': isActiveSection('mini-200ml') }"
                  >Mini 200ml</a
                >
              </li>
              <li>
                <a
                  href="#daily-330ml"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  :class="{ 'text-[#2f8d03]': isActiveSection('daily-330ml') }"
                  >Daily 330ml</a
                >
              </li>
              <li>
                <a
                  href="#merchandises"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  :class="{ 'text-[#2f8d03]': isActiveSection('merchandises') }"
                  >Merchandises</a
                >
              </li>
            </ul>
          </div>
        </li>
      </nav>
      <div class="flex flex-col mb-10 gap-y-10">
        <ProductItems
          :subject="detoxSubject"
          :description="detoxDescription"
          :products="detoxProductCategory"
          productId="detox-1-day"
        />
        <ProductItems
          :subject="oneLiterSubject"
          :description="oneLiterDescription"
          :products="oneLiterProductCategory"
          productId="daily-1-liter"
        />
        <ProductItems
          :subject="dailyKidsSubject"
          :description="dailyKidsDescription"
          :products="dailyKidsCategory"
          productId="mini-200ml"
          :orderClass="'order-2'"
        />
        <ProductItems
          :subject="dailyProduct330Subject"
          :description="dailyProduct330Description"
          :products="dailyProduct330Category"
          productId="daily-330ml"
        />
        <ProductItems
          :subject="merchandisesSubject"
          :description="merchandisesDescription"
          :products="merchandisesStoreCategory"
          productId="merchandises"
        />
      </div>
      <ShopNeed />
      <MessageProcedure />
      <Accordion title="Area Pengantaran" storeType="delivery" />
      <Accordion title="Lokasi Toko" storeType="location" />
    </div>
  </div>
</template>
