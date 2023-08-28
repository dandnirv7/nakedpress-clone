import { defineStore } from "pinia";
import { Weeks5Programs } from "./data";

export const useWeek5SubscriptionsStore = defineStore(
  "week5SubscriptionsStore",
  {
    state: () => ({
      Weeks5Programs: Weeks5Programs,
    }),
  }
);
