<script>
import { TransitionGroup } from "vue";

import { useDeliveryAreaStore, useFaqStore } from "../store";
export default {
  components: {
    TransitionGroup,
  },
  props: {
    title: String,
    description: {
      type: String,
      required: false,
    },
    storeType: String,
  },

  computed: {
    items() {
      if (this.storeType === "faq") {
        return useFaqStore().faq;
      } else if (this.storeType === "delivery") {
        return useDeliveryAreaStore().deliveryArea;
      }
      return null;
    },
    arrayKey() {
      if (this.storeType === "faq") {
        return "qna";
      } else if (this.storeType === "delivery") {
        return "area";
      }
      return "";
    },
  },
  methods: {
    toggleHide(item) {
      item.isHide = !item.isHide;
    },
    getItemTitle(item) {
      if (this.storeType === "faq") {
        return item.question;
      } else if (this.storeType === "delivery") {
        return item.city;
      }
      return "";
    },
    getItemDescription(item) {
      if (this.storeType === "faq") {
        return item.answer;
      } else if (this.storeType === "delivery") {
        return item.subdistrict;
      }
      return "";
    },
  },
};
</script>

<template>
  <div class="px-5 mb-10">
    <h1 class="text-[1.75rem] leading-7 font-bold mb-3">
      {{ title }}
    </h1>
    <p v-if="description">{{ description }}</p>
    <TransitionGroup name="fade" tag="article">
      <article
        v-for="item in items[arrayKey]"
        :key="item.id"
        class="border-b mb-2 hover:border-[#2f8d03] w-full h-full"
      >
        <div @click="toggleHide(item)">
          <div class="flex flex-row items-center justify-between pb-4">
            <h3 class="text-[#2f8d03] font-semibold">
              {{ getItemTitle(item) }}
            </h3>
            <vue-feather
              :type="item.isHide ? 'plus' : 'minus'"
              stroke="#2f8d03"
            ></vue-feather>
          </div>
          <div class="pb-4" v-if="!item.isHide">
            <p>
              {{ getItemDescription(item) }}
            </p>
          </div>
        </div>
      </article>
    </TransitionGroup>
  </div>
</template>

<!-- <style>
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style> -->
