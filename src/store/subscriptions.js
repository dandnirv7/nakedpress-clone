import { defineStore } from "pinia";

import { subscriptions } from "./data";

export const useSubscriptionsStore = defineStore("subscriptionsStore", {
  state: () => ({
    subscriptions: subscriptions,
  }),
});
