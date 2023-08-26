import { defineStore } from "pinia";

import { detoxProduct } from "./data";

export const useDetoxProductStore = defineStore("detoxProductStore", {
  state: () => ({
    detoxProduct: detoxProduct,
  }),
});
