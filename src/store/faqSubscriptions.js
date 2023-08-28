import { defineStore } from "pinia";
import { faqSubscriptions } from "./data";

export const useFaqSubscriptionsStore = defineStore("faqSubscriptionsStore", {
  state: () => ({
    faqSubscriptions: faqSubscriptions,
  }),
});
