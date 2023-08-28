<script>
import CardFeatured from "../components/CardFeatured.vue";
import Accordion from "../components/Accordion.vue";
import ProductItems from "../components/ProductItems.vue";
export default {
  components: {
    CardFeatured,
    Accordion,
    ProductItems,
  },
};
</script>

<script setup>
import { toRefs } from "vue";
import {
  useWeek5SubscriptionsStore,
  useDetoxSubscriptionsStore,
} from "../store";

const week5SubscriptionsStore = useWeek5SubscriptionsStore();
const detoxSubscriptionsStore = useDetoxSubscriptionsStore();

const { category: week5Category, subject: week5Subject } = toRefs(
  week5SubscriptionsStore.Weeks5Programs
);
const { category: detoxCategory, subject: detoxSubject } = toRefs(
  detoxSubscriptionsStore.DetoxPrograms
);
</script>
<template>
  <div class="mb-10">
    <div class="flex flex-col gap-y-2 bg-[#12452c] px-5 py-2">
      <h1 class="text-[#fbf3e1] text-[2rem] leading-10 font-bold">
        Langganan, <br />
        hemat sampai 25%.
      </h1>
      <div class="flex flex-col gap-y-2">
        <div class="flex flex-row gap-x-3">
          <vue-feather type="check" stroke="#fbf3e1"></vue-feather>
          <p class="font-light text-[#fbf3e1]">Bayar ongkir 1x</p>
        </div>
        <div class="flex flex-row gap-x-3">
          <vue-feather type="check" stroke="#fbf3e1"></vue-feather>
          <p class="font-light text-[#fbf3e1]">Bebas atur jadwal kirim</p>
        </div>
      </div>
    </div>
    <CardFeatured class="px-5" />
    <ProductItems
      :subject="week5Subject"
      :products="week5Category"
      buttonText="Pilih"
      class="my-10"
    />
    <ProductItems
      :subject="detoxSubject"
      :products="detoxCategory"
      buttonText="Pilih"
    />

    <Accordion
      class="mt-5"
      :storeType="'subscriptions'"
      :title="'FAQ'"
      :description="'Pertanyaan seputar nakedpress, detox, dan cold pressed juice.'"
    />
  </div>
</template>
