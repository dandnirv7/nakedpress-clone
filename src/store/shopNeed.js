import { defineStore } from "pinia";

import { shopNeeds } from "./data";

export const useShopNeedStore = defineStore("shopNeedStore", {
  state: () => ({
    shopNeeds: shopNeeds,
  }),
});
