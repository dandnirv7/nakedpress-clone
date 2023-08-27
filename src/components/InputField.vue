<template>
  <div>
    <input
      :type="type"
      :placeholder="placeholder"
      class="w-full py-3 px-3.5 rounded-md border border-black/10 outline-none focus:border-[#338b16] focus:ease-linear focus:duration-200 focus:ring-0 blur:border-[#338b16] blur:ease-linear blur:duration-200 blur:ring-0 placeholder:font-semibold placeholder:text-black/40"
    />
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    placeholder: String,
  },
};
</script>
