<template>
  <div class="flex flex-col items-center justify-center py-10">
    <div
      v-for="post in displayedPosts"
      :key="post.id"
      class="flex flex-row items-start justify-around w-full mb-5 gap-x-4 blog-post"
    >
      <div class="w-32">
        <img :src="post.image" alt="Title" class="rounded-lg" loading="lazy" />
      </div>
      <div class="flex flex-col w-1/2 gap-y-1">
        <router-link
          :to="'/blogs/stories/' + post.id"
          class="font-semibold hover:underline hover:decoration-solid hover:decoration-2 hover:decoration-[#2f8d03] hover:text-[#2f8d03]"
        >
          {{ post.title }}
        </router-link>
        <small class="text-sm font-light">{{ post.date }}</small>
      </div>
    </div>

    <div
      class="flex flex-row mt-5 pagination gap-x-5"
      v-show="paginationItem.length >= 10"
    >
      <router-link
        v-if="currentPage === 1"
        :to="{
          name: 'BlogDetailPage',
          params: {
            id: $route.params.id,
          },
          query: {
            page: currentPage + 1,
          },
        }"
        @click="changePage(currentPage + 1)"
        class="border border-black px-5 py-2.5 rounded-full hover:bg-[#13452c] hover:text-white hover:border-[#13452c]"
      >
        <span class="text-xl font-semibold">Muat lebih banyak</span>
      </router-link>

      <div v-else class="flex flex-row space-x-3">
        <router-link
          :to="{
            name: 'BlogDetailPage',
            params: {
              id: $route.params.id,
            },
          }"
          @click="changePage(currentPage - 1)"
          class="rounded-full p-2 border border-black/20 w-8 h-8 text-sm flex items-center justify-center hover:bg-[#13452c] hover:border-[#13452c] hover:text-white"
        >
          {{ currentPage - 1 }}
        </router-link>

        <router-link
          :to="{
            name: 'BlogDetailPage',
            params: { id: $route.params.id },
          }"
          @click="changePage(currentPage)"
          :disabled="currentPage === totalPages"
          class="flex items-center justify-center w-8 h-8 p-2 text-sm border rounded-full border-black/5 bg-black/5"
        >
          {{ currentPage }}
        </router-link>

        <router-link
          :to="{
            name: 'BlogDetailPage',
            params: {
              id: $route.params.id,
            },
            query: {
              page: currentPage + 1,
            },
          }"
          @click="changePage(currentPage + 1)"
          class="rounded-full p-2 border border-black/20 w-8 h-8 text-sm flex items-center justify-center hover:bg-[#13452c] hover:border-[#13452c] hover:text-white"
          :class="{
            hidden: currentPage === totalPages,
          }"
        >
          {{ currentPage + 1 }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, watch, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { usePaginationStore } from "../../store";

export default {
  name: "BlogPage",
  props: {
    blogs: Array,
  },
  setup(props) {
    const paginationItem = props.blogs;
    const router = useRouter();
    const route = useRoute();

    const paginationStore = usePaginationStore();

    paginationStore.paginationItem = paginationItem;

    const totalPages = computed(() => paginationStore.totalPages);

    const displayedPosts = computed(() => {
      const start = (currentPage.value - 1) * paginationStore.postsPerPage;
      const end = start + paginationStore.postsPerPage;

      return paginationStore.paginationItem.slice(start, end);
    });

    const currentPage = computed({
      get: () => parseInt(route.query.page) || 1,
      set: (value) => {
        router.push({
          name: "BlogDetailPage",
          params: { id: route.params.id },
          query: { page: value },
        });
      },
    });

    const changePage = (newPage) => {
      currentPage.value = newPage;
    };

    watch(currentPage, () => {
      displayedPosts;
    });

    onMounted(() => {
      const pageFromRoute = parseInt(route.query.page);
      if (!isNaN(pageFromRoute) && pageFromRoute >= 1) {
        currentPage.value = pageFromRoute;
      }
    });

    return {
      paginationItem,
      displayedPosts,
      currentPage,
      totalPages,
      changePage,
    };
  },
};
</script>
