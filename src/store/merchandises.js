import { defineStore } from "pinia";
import { merchandise } from "./data";

export const useMerchandisesStore = defineStore("merchandisesStore", {
  state: () => ({
    merchandise: merchandise,
  }),
});
