import { defineStore } from "pinia";

import { weightLossProgram } from "./data";

export const useWeightLossProgramStore = defineStore("weightLossProgramStore", {
  state: () => ({
    weightLossProgram: weightLossProgram,
  }),
});
