import { defineStore } from "pinia";

import { subscriptionsOneLiter } from "./data";

export const useSubscriptionsOneLiterStore = defineStore(
  "subscriptionsOneLiterStore",
  {
    state: () => ({
      subscriptionsOneLiter: subscriptionsOneLiter,
    }),
  }
);
