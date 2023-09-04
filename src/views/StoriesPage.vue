<template>
  <div class="px-5">
    <Stories :stories="dataStories" />
  </div>
</template>

<script>
import Stories from "../components/Blogs/Stories.vue";
import { useDataStoriesStore } from "../store";
export default {
  components: {
    Stories,
  },
  setup() {
    const dataStoriesStore = useDataStoriesStore();

    return {
      dataStories: dataStoriesStore.dataStories,
    };
  },
};
</script>
