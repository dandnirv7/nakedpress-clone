<template>
  <div class="px-5">
    <div v-if="isMaagGerdPage">
      <BlogsDetail :blogs="maagGerd" />
    </div>

    <div v-else-if="isObesitasPage">
      <BlogsDetail :blogs="obesity" />
    </div>

    <div v-else-if="isMenstruationPage">
      <BlogsDetail :blogs="menstruation" />
    </div>

    <div v-else-if="isAutoimmunePage">
      <BlogsDetail :blogs="autoimmune" />
    </div>

    <div v-else-if="isPromilPage">
      <BlogsDetail :blogs="pregnancyProgram" />
    </div>

    <div v-else-if="isKolesterolPage">
      <BlogsDetail :blogs="cholesterol" />
    </div>

    <div v-else>
      <NotFoundPage />
    </div>
  </div>
</template>

<script>
import BlogsDetail from "../components/Blogs/BlogsDetail.vue";
import { useStoreBlogStore } from "../store/storeBlog";
import NotFoundPage from "./NotFoundPage.vue";

export default {
  name: "BlogDetailPage",
  components: {
    BlogsDetail,
    NotFoundPage,
  },
  setup() {
    const storeBlogStore = useStoreBlogStore();
    return {
      maagGerd: storeBlogStore.maagGerdBlog,
      obesity: storeBlogStore.obesityBlog,
      menstruation: storeBlogStore.menstruationBlog,
      autoimmune: storeBlogStore.autoimmuneBlog,
      pregnancyProgram: storeBlogStore.pregnancyProgramBlog,
      cholesterol: storeBlogStore.cholesterolBlog,
    };
  },
  computed: {
    isMaagGerdPage() {
      return this.$route.params.id === "blog-maaggerd";
    },
    isObesitasPage() {
      return this.$route.params.id === "blog-obesitas";
    },
    isMenstruationPage() {
      return this.$route.params.id === "blog-menstruasi";
    },
    isAutoimmunePage() {
      return this.$route.params.id === "blog-autoimun";
    },
    isPromilPage() {
      return this.$route.params.id === "blog-promil";
    },
    isKolesterolPage() {
      return this.$route.params.id === "blog-kolesterol";
    },
  },
};
</script>
