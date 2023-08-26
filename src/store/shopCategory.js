import { defineStore } from "pinia";

import { shopCategory } from "./data";

export const useShopCategoryStore = defineStore("shopCategoryStore", {
  state: () => ({
    shopCategory: shopCategory,
  }),
});
