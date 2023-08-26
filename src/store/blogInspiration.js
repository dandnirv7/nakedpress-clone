import { defineStore } from "pinia";

import { blogInspiration } from "./data";

export const useBlogInspirationStore = defineStore("blogInspirationStore", {
  state: () => ({
    blogInspiration: blogInspiration,
  }),
});
