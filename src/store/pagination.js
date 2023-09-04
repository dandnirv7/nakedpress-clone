import { defineStore } from "pinia";

export const usePaginationStore = defineStore("pagination", {
  state: () => ({
    currentPage: 1,
    postsPerPage: 10,
    paginationItem: [],
  }),
  getters: {
    totalPages: (state) =>
      Math.ceil(state.paginationItem.length / state.postsPerPage),
  },
  actions: {
    setCurrentPage(page) {
      this.currentPage = page;
    },

    changePage(newPage) {
      if (newPage >= 1 && newPage <= this.totalPages) {
        this.currentPage = newPage;
      }
    },

    setPostsPerPage(postPerPage) {
      this.postsPerPage = postPerPage;
    },
  },
});
