<script>
import { onMounted } from "vue";
import ImageCarousel from "./ImageCarousel.vue";
export default {
  props: {
    programs: Array,
  },
  components: {
    ImageCarousel,
  },
  data() {
    return {
      programImages: this.programs,
    };
  },
  setup() {
    onMounted(() => {
      initFlowbite();
    });
  },

  methods: {
    formatPrice(price) {
      return `Rp ${price.toLocaleString("id-ID")}`;
    },
  },
};
</script>

<template>
  <div class="px-5">
    <div class="p-6 mt-10 bg-[#195136] rounded-2xl">
      <ImageCarousel :programs="programImages" />
      <div
        class="flex flex-col gap-3 mt-5"
        v-for="program in programs"
        :key="program.id"
      >
        <h1 class="text-[1.75rem] leading-9 text-white font-bold">
          {{ program.title }}
        </h1>
        <p class="text-base font-thin text-white">{{ program.description }}</p>
        <div class="flex flex-row gap-2.5 items-center">
          <h2 class="text-base font-bold text-yellow-300">
            {{ formatPrice(program.discountedPrice) }}
          </h2>
          <h2 class="text-xs text-gray-200 line-through">
            {{ formatPrice(program.originalPrice) }}
          </h2>
        </div>
      </div>
      <router-link to="/products/">
        <button
          class="mt-7 bg-[#609044] px-4 py-2.5 rounded-full w-full text-white font-semibold text-xl"
        >
          Beli
        </button>
      </router-link>
    </div>
  </div>
</template>
