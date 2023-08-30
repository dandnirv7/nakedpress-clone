import { defineStore } from "pinia";
import { blogArticle } from "./data";

export const useBlogArticleStore = defineStore("blogArticleStore", {
  state: () => ({
    blogArticle: blogArticle,
  }),
});
