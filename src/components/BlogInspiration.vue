<script>
export default {
  props: {
    subject: String,
    blogs: Array,
    route: String,
  },
};
</script>
<template>
  <div class="px-5 flex flex-col space-y-5">
    <span class="text-2xl font-bold">{{ subject }}</span>
    <div
      v-for="blog in blogs"
      :key="blog.id"
      class="flex flex-row justify-between"
    >
      <div class="w-32">
        <img :src="blog.image" :alt="blog.alt" />
      </div>
      <div class="flex flex-col gap-y-2 w-1/2">
        <router-link to="/blogs/stories" class="font-semibold">
          {{ blog.title }}
        </router-link>
        <small class="text-sm font-light">{{ blog.date }}</small>
      </div>
    </div>
    <router-link :to="route">
      <span
        class="text-xl font-semibold text-[#2f8d03] border-b-2 border-b-green-500 hover:border-b-0"
        >Baca Semua</span
      >
    </router-link>
  </div>
</template>
