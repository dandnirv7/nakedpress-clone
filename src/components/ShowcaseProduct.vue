<script setup>
import { onMounted, toRefs } from "vue";
import {
  useDailyKidsProductStore,
  useDetoxProductStore,
  useOneLiterProductStore,
  useSubscriptionsStore,
  useSubscriptionsOneLiterStore,
  useWeightLossProgramStore,
} from "../store";
import ProductItems from "./ProductItems.vue";
import CardItems from "./CardItems.vue";

const dailyKidsProductStore = useDailyKidsProductStore();
const detoxProductStore = useDetoxProductStore();
const oneLiterProductStore = useOneLiterProductStore();
const subscriptionsStore = useSubscriptionsStore();
const subscriptionsOneLiterStore = useSubscriptionsOneLiterStore();
const weightLossProgramStore = useWeightLossProgramStore();

onMounted(() => {
  initFlowbite();
});

const { category: dailyKidsCategory, subject: dailyKidsSubject } = toRefs(
  dailyKidsProductStore.dailyKidsProduct
);
const { category: detoxProductCategory } = toRefs(
  detoxProductStore.detoxProduct
);
const { category: oneLiterProductCategory, subject: oneLiterProductSubject } =
  toRefs(oneLiterProductStore.oneLiterProduct);
const {
  category: subscriptionsCategory,
  subject: subscriptionsSubject,
  description: subscriptionsDescription,
} = toRefs(subscriptionsStore.subscriptions);
const subscriptionsOneLiter = subscriptionsOneLiterStore.subscriptionsOneLiter;
const weightLossProgram = weightLossProgramStore.weightLossProgram;
const detoxProductSubject = "Best Sellers Detox";
</script>

<template>
  <div class="py-14">
    <ProductItems
      :subject="dailyKidsSubject"
      :products="dailyKidsCategory.slice(0, 4)"
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
