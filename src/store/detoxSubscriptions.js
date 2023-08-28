import { defineStore } from "pinia";
import { DetoxPrograms } from "./data";

export const useDetoxSubscriptionsStore = defineStore(
  "detoxSubscriptionsStore",
  {
    state: () => ({
      DetoxPrograms: DetoxPrograms,
    }),
  }
);
