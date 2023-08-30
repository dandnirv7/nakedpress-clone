import { defineStore } from "pinia";
import { faqStoreLocation } from "./data";

export const useFaqStoreLocationStore = defineStore("FaqStoreLocationStore", {
  state: () => ({
    faqStoreLocation: faqStoreLocation,
  }),
});
