<template>
  <div class="flex flex-col items-center mt-10 gap-y-4">
    <h1 class="text-[1.75rem] leading-9 font-bold">
      {{ featuredSubscriptions.title }}
    </h1>
    <div
      class="p-6 bg-[#fbf3e1] rounded-xl flex justify-center flex-col gap-y-4"
      v-for="featured in featuredSubscriptions.featuredList"
      :key="featured.id"
    >
      <div class="flex items-center justify-between gap-x-2">
        <h2 class="text-2xl font-bold">{{ featured.title }}</h2>
        <div class="flex flex-grow-0 flex-shrink-0 w-[30%] basis-auto">
          <img
            :src="featured.image"
            :alt="featured.altImage"
            class="block max-w-full"
          />
        </div>
      </div>

      <div>
        <div
          v-for="taglineFeatured in featured.tagline"
          :key="taglineFeatured.id"
          class="flex flex-row justify-start mt-2"
        >
          <div class="mr-3">
            <img
              src="../assets/checklist.png"
              alt="checklist icon"
              class="h-auto max-w-full"
            />
          </div>
          <span class="text-xl">
            {{ taglineFeatured.titleTagline }}
          </span>
        </div>
      </div>

      <div class="flex flex-row justify-between px-3 gap-x-2">
        <p class="text-xl font-bold line-through">
          {{ formatPrice(featured.originalPrice) }}
        </p>
        <p class="font-bold text-xl text-[#872e47]">
          {{ formatPrice(featured.discountedPrice) }}
        </p>
      </div>

      <button class="px-6 py-4 rounded-full bg-[#2f8d03] w-full text-white">
        Pilih
      </button>
    </div>
  </div>
</template>

<script>
import { useFeaturedSubscriptionsStore } from "../store";

export default {
  setup() {
    const featuredSubscriptions = useFeaturedSubscriptionsStore();

    return {
      featuredSubscriptions: featuredSubscriptions.featuredSubscriptions,
    };
  },
  methods: {
    formatPrice(price) {
      return `Rp ${price.toLocaleString("id-ID")}`;
    },
  },
};
</script>
