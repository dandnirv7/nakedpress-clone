<script setup>
import { useAllShowProductsStore } from "../store";

const shopCategory = useAllShowProductsStore().shopCategory;
</script>

<template>
  <div class="bg-[#eaf8d7] py-6 px-5">
    <h1 class="text-[28px] leading-9 font-bold">{{ shopCategory.subject }}</h1>
    <p class="mt-3 text-[15px] leading-5">
      {{ shopCategory.description }}
    </p>
    <router-link to="/collections/all" class="flex flex-wrap gap-4 mt-6">
      <div
        v-for="category in shopCategory.category"
        :key="category.id"
        class="w-[132px] h-[132px] p-4 bg-center bg-no-repeat bg-cover rounded-lg"
        :style="{ backgroundImage: `url(${category.image})` }"
      >
        <div class="">
          <h2 class="text-[20px] leading-6 font-bold">{{ category.title }}</h2>
          <p class="text-sm">{{ category.description }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>
