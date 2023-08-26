import { defineStore } from "pinia";

import { messageProcedure } from "./data";

export const useMessageProcedureStore = defineStore("messageProcedureStore", {
  state: () => ({
    messageProcedure: messageProcedure,
  }),
});
