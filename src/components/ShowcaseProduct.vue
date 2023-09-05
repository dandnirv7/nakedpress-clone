<script setup>
import { onMounted } from "vue";
import { useAllShowProductsStore } from "../store/dataAllProduct";
import ProductItems from "./ProductItems.vue";
import CardItems from "./CardItems.vue";

onMounted(() => {
  initFlowbite();
});

const dailyKidsCategory = useAllShowProductsStore().dailyKidsProduct;
const detoxProductCategory = useAllShowProductsStore().detoxProduct;
const oneLiterProductCategory = useAllShowProductsStore().oneLiterProduct;
const subscriptionsCategory = useAllShowProductsStore().subscriptions;
const weightLossProgram = useAllShowProductsStore().weightLossProgram;
const subscriptionsOneLiter = useAllShowProductsStore().subscriptionsOneLiter;

const dailyKidsSubject = "New Mini! 200ml";
const detoxProductSubject = "Best Sellers Detox";
const oneLiterProductSubject = "Best Seller 1 Liter";
const subscriptionsSubject = "Paket Langganan";
const subscriptionsDescription = "Lebih hemat s/d 25%, ongkir cukup bayar 1x.";
</script>

<template>
  <div class="py-14">
    <ProductItems
      :subject="dailyKidsSubject"
      :products="dailyKidsCategory.slice(0, 4)"
      :orderClass="'order-2'"
    />
    <ProductItems
      :subject="detoxProductSubject"
      :products="detoxProductCategory"
      class="mt-10"
    />
    <CardItems :programs="weightLossProgram" />

    <div class="mt-10">
      <ProductItems
        :subject="oneLiterProductSubject"
        :products="oneLiterProductCategory.slice(0, 4)"
        class="mb-5"
      />
      <router-link to="/collections/all/" class="px-5">
        <span
          class="text-xl font-semibold text-[#2f8d03] border-b-2 border-b-green-500 hover:border-b-0"
          >Lihat Semua Produk</span
        >
      </router-link>
    </div>
    <CardItems :programs="subscriptionsOneLiter" />
    <div class="mt-10">
      <ProductItems
        :subject="subscriptionsSubject"
        :description="subscriptionsDescription"
        :products="subscriptionsCategory"
        :textColor="'text-black'"
        :buttonText="'Pilih'"
        class="mb-5"
      />
      <router-link to="/collections/langganan/" class="px-5">
        <span
          class="text-xl font-semibold text-[#2f8d03] border-b-2 border-b-green-500 hover:border-b-0"
          >Lihat Semua Langganan</span
        >
      </router-link>
    </div>
  </div>
</template>
