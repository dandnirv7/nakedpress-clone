<script>
import { useBlogInspirationStore } from "../store";
export default {
  setup() {
    const BlogInspirationStore = useBlogInspirationStore();

    return {
      blogInspiration: BlogInspirationStore.blogInspiration,
    };
  },
};
</script>

<template>
  <div class="px-5 mt-5">
    <h2 class="text-[28px] leading-9 font-bold">Inspirasi Sehat</h2>
    <div class="flex flex-wrap mt-6 mb-5 gap-x-4 gap-y-6">
      <div
        v-for="inspiration in blogInspiration.slice(0, 4)"
        :key="inspiration.id"
        class="w-32 h-[72px] bg-center bg-no-repeat bg-cover rounded-lg"
        :style="{ backgroundImage: `url(${inspiration.image})` }"
      ></div>
    </div>
    <router-link to="/blogs/stories">
      <span
        class="text-xl font-semibold text-[#2f8d03] border-b-2 border-b-green-500 hover:border-b-0"
        >Baca Semua</span
      >
    </router-link>
  </div>
</template>
