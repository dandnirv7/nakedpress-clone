import { defineStore } from "pinia";
import { featuredSubscriptions } from "./data";

export const useFeaturedSubscriptionsStore = defineStore(
  "featuredSubscriptionsStore",
  {
    state: () => ({
      featuredSubscriptions: featuredSubscriptions,
    }),
  }
);
