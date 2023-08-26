import { defineStore } from "pinia";

import { faq } from "./data";

export const useFaqStore = defineStore("faqStore", {
  state: () => ({
    faq: faq,
  }),
});
