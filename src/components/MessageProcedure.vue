<script>
import { useMessageProcedureStore } from "../store";
export default {
  setup() {
    const messageProcedureStore = useMessageProcedureStore();

    return {
      procedures: messageProcedureStore.messageProcedure,
    };
  },
};
</script>

<template>
  <div class="px-5 my-8">
    <h1 class="text-[1.75rem] font-bold">Tata cara pesan</h1>
    <div
      v-for="procedure in procedures"
      :key="procedure.id"
      class="flex flex-row items-start justify-center mt-5"
    >
      <div class="w-24">
        <img :src="procedure.image" alt="" class="w-16" />
      </div>
      <div class="w-[75%]">
        <h3 class="text-xl font-bold leading-8">{{ procedure.title }}</h3>
        <p class="font-thin">{{ procedure.description }}</p>
      </div>
    </div>
  </div>
</template>
