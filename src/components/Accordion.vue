<script>
import { TransitionGroup } from "vue";

import { useAllShowProductsStore } from "../store";
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
        return useAllShowProductsStore().faq;
      } else if (this.storeType === "delivery") {
        return useAllShowProductsStore().deliveryArea;
      } else if (this.storeType === "subscriptions") {
        return useAllShowProductsStore().faqSubscriptions;
      } else if (this.storeType === "location") {
        return useAllShowProductsStore().faqStoreLocation;
      }
      return null;
    },
    arrayKey() {
      if (this.storeType === "faq") {
        return "qna";
      } else if (this.storeType === "delivery") {
        return "area";
      } else if (this.storeType === "subscriptions") {
        return "subscriptionsQna";
      } else if (this.storeType === "location") {
        return "locationQna";
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
      } else if (this.storeType === "subscriptions") {
        return item.question;
      } else if (this.storeType === "location") {
        return item.question;
      }
      return "";
    },
    getItemDescription(item) {
      if (this.storeType === "faq") {
        return item.answer;
      } else if (this.storeType === "delivery") {
        return item.subdistrict;
      } else if (this.storeType === "subscriptions") {
        return item.answer.map((answer) => {
          return answer.answer;
        });
      } else if (this.storeType === "location") {
        return item.answer;
      }
      return "";
    },
  },
};
</script>

<template>
  <div class="px-5 mb-10">
    <h1 class="text-[1.75rem] leading-10 font-bold mb-3">
      {{ title }}
    </h1>
    <p v-if="description" class="mb-10 text-lg font-light">
      {{ description }}
    </p>
    <TransitionGroup name="fade" tag="article">
      <article
        v-for="item in items[arrayKey]"
        :key="item.id"
        class="border-b mb-2 hover:border-[#2f8d03] w-full h-full pb-3"
      >
        <div @click="toggleHide(item)">
          <div class="flex flex-row items-center space-x-4">
            <h3
              class="font-semibold text-sm w-full"
              :class="{
                'text-[#2f8d03]':
                  storeType === 'delivery' ||
                  storeType === 'location' ||
                  !item.isHide,
              }"
            >
              {{ getItemTitle(item) }}
            </h3>

            <vue-feather
              :type="item.isHide ? 'plus' : 'minus'"
              stroke="#2f8d03"
            ></vue-feather>
          </div>
          <div class="my-3" v-if="!item.isHide">
            <div v-if="storeType === 'subscriptions'">
              <template
                v-for="answerItem in getItemDescription(item)"
                :key="answerItem.id"
              >
                <p class="font-light mt-2">{{ answerItem }}</p>
              </template>
            </div>
            <div v-else>
              <p class="font-light">{{ getItemDescription(item) }}</p>
            </div>
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
