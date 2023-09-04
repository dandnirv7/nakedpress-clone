import { defineStore } from "pinia";
import { dataStories } from "./dataStories";

export const useDataStoriesStore = defineStore("storeBlogStore", {
  state: () => ({
    dataStories: dataStories,
  }),
});
