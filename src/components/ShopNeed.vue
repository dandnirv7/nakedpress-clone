<script setup>
import { useAllShowProductsStore } from "../store";

const needs = useAllShowProductsStore().shopNeeds;
</script>

<template>
  <div class="bg-[#fdf9ee] py-8">
    <div class="px-5">
      <h1 class="text-[28px] leading-9 font-bold">{{ needs.subject }}</h1>
      <p class="mt-2 font-light leading-5">
        {{ needs.description }}
      </p>
    </div>
    <div class="flex flex-wrap w-full h-full mt-6 gap-y-5">
      <div
        v-for="category in needs.category"
        :key="category.id"
        class="flex flex-col w-[33.33%] items-center h-28 gap-y-4"
      >
        <div class="w-16">
          <img :src="category.image" alt="" class="w-full h-full object-fit" />
        </div>
        <div class="">
          <router-link to="/collections/">
            <p class="font-normal text-center">
              {{ category.title }}
            </p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
