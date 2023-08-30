import { defineStore } from "pinia";
import { dailyProduct330 } from "./data";

export const useDailyProduct330MlStore = defineStore("dailyProduct330MlStore", {
  state: () => ({
    dailyProduct330: dailyProduct330,
  }),
});
