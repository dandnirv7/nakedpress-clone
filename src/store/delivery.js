import { defineStore } from "pinia";

import { deliveryArea } from "./data";

export const useDeliveryAreaStore = defineStore("deliveryAreaStore", {
  state: () => ({
    deliveryArea: deliveryArea,
  }),
});
