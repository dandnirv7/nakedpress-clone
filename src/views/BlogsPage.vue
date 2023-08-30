<script setup>
import BlogInspiration from "../components/BlogInspiration.vue";
import BlogCategory from "../components/BlogCategory.vue";
import { useBlogArticleStore, useBlogInspirationStore } from "../store";

const blogInspiration = useBlogInspirationStore().blogInspiration;
const blogArticle = useBlogArticleStore().blogArticle;
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
