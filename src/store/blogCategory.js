import { defineStore } from "pinia";
import { blogCategory } from "./data";

export const useBlogCategoryStore = defineStore("blogCategoryStore", {
  state: () => ({
    blogCategory: blogCategory,
  }),
});
