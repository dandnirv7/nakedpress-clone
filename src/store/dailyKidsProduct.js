import { defineStore } from "pinia";

import { dailyKidsProduct } from "./data";

export const useDailyKidsProductStore = defineStore("dailyKidsProductStore", {
  state: () => ({
    dailyKidsProduct: dailyKidsProduct,
  }),
});
