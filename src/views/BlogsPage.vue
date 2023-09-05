<script setup>
import BlogInspiration from "../components/BlogInspiration.vue";
import BlogCategory from "../components/BlogCategory.vue";
import { useAllShowProductsStore } from "../store";

const blogInspiration = useAllShowProductsStore().blogInspirations;
const blogArticle = useAllShowProductsStore().blogArticles;
</script>

<template>
  <div class="flex flex-col space-y-10 my-10">
    <BlogCategory subject="Gut Health A-Z" />
    <BlogInspiration
      subject="Inspirasi Sehat"
      :blogs="blogInspiration"
      route="/blogs/stories"
    />
    <BlogInspiration
      subject="Artikel"
      :blogs="blogArticle"
      route="/blogs/articles"
    />
  </div>
</template>
