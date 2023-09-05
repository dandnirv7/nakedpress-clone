<script>
import { useAllShowProductsStore } from "../store";
export default {
  props: {
    subject: String,
  },
  setup() {
    const blogCategoryStore = useAllShowProductsStore();
    return {
      blogCategory: blogCategoryStore.blogCategory,
    };
  },
};
</script>
<template>
  <div class="px-5">
    <span class="text-2xl font-bold">{{ subject }}</span>
    <div class="flex overflow-x-auto space-x-7 p-4">
      <div
        v-for="category in blogCategory"
        :key="category.id"
        class="flex flex-col items-center"
      >
        <router-link
          :to="'/blogs/stories/tagged/' + category.id"
          class="flex flex-col items-center space-y-2 w-20"
        >
          <div class="w-16">
            <img
              :src="category.image"
              :alt="category.alt"
              class="w-full h-auto"
            />
          </div>
          <p class="text-sm">{{ category.title }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>
