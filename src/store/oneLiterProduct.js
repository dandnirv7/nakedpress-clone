import { defineStore } from "pinia";

import { oneLiterProduct } from "./data";

export const useOneLiterProductStore = defineStore("oneLiterProductStore", {
  state: () => ({
    oneLiterProduct: oneLiterProduct,
  }),
});
